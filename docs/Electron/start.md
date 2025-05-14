# 启动！

```bash
mkdir eletest && cd eletest
npm init -y
npm install electron --save-dev
npm install electron-builder --save-dev
```

.gitignore 文件将保持和[GitHub 的 Node.js gitignore 模板](https://github.com/github/gitignore/blob/main/Node.gitignore)一致

在 package.json 中添加以下脚本：

```json
{
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  }
}
```

呃呃呃，为了快速学习 Electron + Vite + Vue.我们找到一个开源的模版项目[Electron + Vite + Vue](https://github.com/electron-vite/electron-vite-vue)来进行快速构建并逐步分析。

因为我们没能在网络上找到一个合适的免费教程。

我们应会使用 DevToos，在应用程序中，它的快捷键是 Ctrl+Shifr+I

后面我们又找到了一个脚手架，Vite 可以快速构建项目

```bash
npm create electron-vite@latest my-app
```

这个命令会创建一个快速启动的项目，它包括 package.json 的配置。也就是你可以使用`npm run dev`启动你的 electron+vue 程序。

他会生成一个类似的目录

```bash
    my-app/  # 项目的根目录
    ├── .vscode/  # Visual Studio Code 配置文件夹
    ├── electron/  # Electron 相关文件夹，包含主进程和预加载脚本
    │   ├── electron-env.d.ts  # Electron 环境类型声明文件
    │   ├── main.ts  # Electron 主进程入口文件
    │   └── preload.ts  # Electron 预加载脚本文件
    ├── public/  # 公共文件夹，存放静态资源
    ├── src/  # 源代码文件夹
    │   ├── assets/  # 资源文件夹，存放图片、字体等资源
    │   ├── components/  # 组件文件夹，存放 Vue 组件
    │   ├── App.vue  # 根 Vue 组件
    │   ├── main.ts  # Vue 应用入口文件
    │   └── style.css  # 全局样式文件
    ├── vite-env.d.ts  # Vite 环境类型声明文件
    ├── .gitignore  # Git 忽略文件配置
    ├── electron-builder.json5  # Electron 打包配置文件
    ├── index.html  # 应用的 HTML 入口文件
    ├── package.json  # 项目配置文件，包含项目信息、依赖和脚本等
    ├── README.md  # 项目说明文档
    ├── tsconfig.json  # TypeScript 配置文件
    ├── tsconfig.node.json  # Node.js 环境下的 TypeScript 配置文件
    └── vite.config.ts  # Vite 配置文件，用于构建和开发服务器配置
```
