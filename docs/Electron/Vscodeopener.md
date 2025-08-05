# Vscode 启动器

这是一个基于 Electron+Vue3+vite 实现的项目

在这里我们将分享我们的设计思路以及核心编程代码。

## 第一步

先确定好核心功能，即通过 Vscode 打开项目。

确定 Electron 能够通过原生 API 访问操作系统，读取配置文件，调用系统进程，进而打开项目文件夹。

确定 Vue3 能够实现界面布局，并跟 Electron 联系在一起，

确定 Vite 能够快速构建并且打包发布。

## 第二步

开发。

我个人习惯使用分文件形式，这样方便维护.

比如 electron 文件夹

```perl
electron/
├── main/
│   ├── index.ts           # 主进程入口
│   ├── window.ts          # 窗口管理
├── preload/
│   └── index.ts           # 渲染进程 bridge
├── ipc/
│   ├── file.ts            # 与文件选择相关的 ipc 处理
│   └── vscode.ts          # 与 VS Code 打开相关的 ipc 处理
├── config/
│   └── paths.ts           # 所有路径、配置项等统一管理
├── electron-env.d.ts
```

前端通过 Vue3 实现

左侧一个侧边栏，右侧是主界面
