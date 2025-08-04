# **代码结构原则**

### 一、代码结构原则

#### 1. **主进程代码（main process）**

不是所有逻辑必须全部写在 `main.js`，但需要以 main.js 为入口。
对于大型项目而言，逻辑处理部分的代码行会很多，因此，我们可以选择模块化拆分，使用 ES 模块的 import 导入在 main.js 使用。
例如以下结构。

```bash
electron/
├── main.js          // 主入口
├── ipc/             // IPC 通信模块
│    ├── fileSystem.js  // 文件系统相关处理
│    └── systemInfo.js  // 系统信息处理
└── utils/           // 工具函数
```

#### 2. **预加载脚本（preload.js）**

- **核心职责**：作为安全桥梁，通过 `contextBridge` 选择性暴露 API
- **不可替代性**：直接访问 Node.js 的能力必须通过这里中转

---

### 二、`window.electronAPI` 的本质

#### 1. 变量特性

**命名空间性质**：通过 `contextBridge.exposeInMainWorld` 创建的白名单命名空间

类似于 C/C++的`namespace`,比如我们习惯在写 C++代码的时候,添加以下代码。

```c++
using namespace std;
```

**不可变性**：该对象属性不可被覆盖（类似 C 中的 const 指针），也就是 const 属性。

```javascript
// 预加载脚本示例（安全模式）
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // 暴露的 API 方法
  readFile: () => {
    /* ... */
  },
});

// 以下操作会失败（安全隔离）
window.electronAPI = {}; // ❌ 无法覆盖
window.newAPI = {}; // ❌ 无法添加新属性
```

#### 2. 类型安全（可选）

这是加入了 TS 的类型检查，当变量类型不合法的时候可以抛出一定的错误，加强了软件的安全性。一般大型的项目对于类型都是有严格要求的。小型项目中也可以添加此模块。

在项目中创建 `src/types/electron.d.ts`：
声明代码示例如下:

```typescript
declare interface Window {
  electronAPI: {
    readFile: (path: string) => Promise<string>;
    writeFile: (path: string, content: string) => Promise<void>;
    openDirectoryDialog: () => Promise<string | null>;
  };
}
```

---

### 三、完整通信流程示例

#### 1. 主进程模块化示例

```javascript
//electron/ipc/fileSystem.mjs
import { ipcMain, dialog } from "electron";
import fs from "fs/promises";

export function registerFileHandlers() {
  ipcMain.handle("file:open-dialog", async () => {
    const result = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    return result.filePaths[0] || null;
  });

  ipcMain.handle("file:read", async (_, path) => {
    return fs.readFile(path, "utf-8");
  });
}
```

#### 2. 主进程入口 (main.js)

ESM 语法是 `main.mjs`

```javascript
import { app, BrowserWindow } from "electron";
import { registerFileHandlers } from "./ipc/fileSystem.mjs";
import path from "path";
import url from "url";

// ES 模块的 __dirname 替代方案
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.whenReady().then(async () => {
  registerFileHandlers();

  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "../preload/preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.env.NODE_ENV === "development") {
    await win.loadURL("http://localhost:3000");
  } else {
    await win.loadFile("dist/index.html");
  }
});
```

#### 3. 预加载脚本优化

```javascript
// preload/preload.mjs
import { contextBridge, ipcRenderer } from "electron";

const api = {
  file: {
    openDialog: () => ipcRenderer.invoke("file:open-dialog"),
    read: (path) => ipcRenderer.invoke("file:read", path),
  },
  system: {
    getPlatform: () => ipcRenderer.invoke("system:get-platform"),
  },
};

contextBridge.exposeInMainWorld("electronAPI", api);
```

#### 4. Vue 组件调用

```vue
<template>
  <div>
    <button @click="handleReadFile">读取文件</button>
    <div>{{ fileContent }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fileContent = ref("");

const handleReadFile = async () => {
  const path = await window.electronAPI.file.openDialog();
  if (path) {
    const content = await window.electronAPI.file.read(path);
    fileContent.value = content;
  }
};
</script>
```

---

### 四、安全架构设计

#### 1. 进程边界防护

```mermaid
flowchart LR
  Renderer[渲染进程] -->|通过 preload.js| Bridge[安全 API 白名单]
  Bridge -->|IPC 通信| Main[主进程]
  Main -->|Node.js API| OS[操作系统]
```

#### 2. 关键安全规则

- **不可打破的三层架构**：

  1. 渲染进程：纯 Web 环境（无 Node.js 访问）
  2. 预加载脚本：唯一可访问 Node.js 的渲染进程代码
  3. 主进程：实际执行敏感操作

- **禁用危险配置**：
  ```javascript
  // 错误配置示例（将导致安全漏洞）
  new BrowserWindow({
    webPreferences: {
      nodeIntegration: true, // ❌ 绝对禁用
      contextIsolation: false, // ❌ 绝对禁用
    },
  });
  ```

---

### 六、调试技巧

查看暴露的 API

在 Vue 组件中：

```javascript
console.log("Available APIs:", Object.keys(window.electronAPI));
```

通过这种架构设计，你可以实现：

1. 严格的安全隔离
2. 清晰的代码组织
3. 可扩展的 API 系统
4. 类型安全的开发体验

`window.electronAPI` 的命名是约定俗成的，你可以自定义名称（如 `window.desktopBridge`），但必须保持整个项目中命名一致。这个对象的作用类似于 C 语言中的命名空间（namespace），而不是类实例，其内部方法是静态绑定的。s
