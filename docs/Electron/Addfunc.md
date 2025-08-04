# 快捷的添加功能

很多时候，我们需要添加一个新的功能，但是会动原本的代码结构，这导致我们捉襟见肘。

所以，我对一个新的实验性的功能通常会留一个后门。这样会方便我们测试功能。。

从项目角度来看，如果我们需要 electron 的 ipc 通信功能，那么我们需要调整的方面有以下几点

1. main.js 中，引用新的功能，并且在 proload.js 中暴露它。

## 嘿嘿

在 electron 文件夹中新建一个文件夹 testipc

```bash
    ├── electron/  # Electron 相关文件夹，包含主进程和预加载脚本
    ├── ├── testipc
    │   │   ├── testipc.ts
    │   │   ├── index.ts
    │   │   └──
    │   ├── electron-env.d.ts  # Electron 环境类型声明文件
    │   ├── main.ts  # Electron 主进程入口文件
    │   └── preload.ts  # Electron 预加载脚本文件
```

说明一下喵~

testipc 是自己新建的文件夹，其他什么名字都可以喵~

然后里面的 testipc.ts 同上，index.ts 不能变。

testipc/testipc.ts 的内容如下所示

```ts
// 这只是例子，在上方引入必要的文件
import { ipcMain, dialog, shell } from "electron";
import fs from "fs";
import os from "os";
import path from "node:path";
// 下面是正常的函数部分，
function getUserDataDir() {
  const username = os.userInfo().username;
  return path.join("C:", "Users", username, "AppData", "Local", "zjl");
}
// 注意导出函数喵

export function test() {}
// 测试IPC的函数可以有多个，也可以只写一个
// ipcMain.handle()是必要的哦，这个可以自定义你想要实现的功能，但是敲代码的时候需要用到很多很多东西。
export function registertextIPC() {
  ipcMain.handle("get-data-storage-path", async () => {
    return getSafeStoragePath();
  });
  ipcMain.handle("load-folders", async () => {});
  ipcMain.handle("save-folders", async (_, folders) => {});
  ipcMain.handle("select-folder", async () => {});
  ipcMain.handle("add-folder", async (_, folder) => {});
}
```

好了喵，现在你可以写 testipc/index.ts 里的内容了

```ts
// 嘻嘻，将上面编写的可以导出的函数包装一下，这就是index.ts要干的事。

import { ensureUserDataFile, registertextIPC } from "./testipc.js";

export function TestIPC() {
  registertextIPC();
  ensureUserDataFile();
}
```

是的，testipc/index.ts 的内容就是如此简单，当然这是为了分化函数结构才这样设计的。

下面到我们的 main.ts 的编写了

```ts
// 根据你的目录结构导入你的功能代码

import { TestIPC } from "./testipc";
// 然后根据详细需求，将函数作用于不同的域。比如这个注册IPC的函数需要放在app.whenReady().then()里面，不要问我为什么，请参考electron项目的生命周期
app.whenReady().then(() => {
  TestIPC(); // add
  createWindow();
});
```

哎？？如果要问 createwindow()能不能从其他文件导入？能的，能的，兄弟，能的。

你可以创建一个 Window.ts，设定必要的参数，然后 import 即可。

2. 在前端测试界面通过 window.xxAPI.<>来测试它。
