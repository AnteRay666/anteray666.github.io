---
title: node.js
date: 2025-4-29
tags:
  - node.js
categories:
  - programme
---

# 关于 Node.js 的学习笔记

如果简单配置 `node.js` 环境，只需要下载 [node.js](https://nodejs.org/zh-cn)，然后配置环境变量即可。

不过，我个人使用 `node.js` 环境的时候，习惯使用 `nvm` 管理 `node.js` 环境。

`nvm` 全名 `node.js version management`，是一个 `node.js` 版本管理工具。

它可以让你在同一台电脑上安装多个不同版本的 `node.js`，并且可以在不同的项目中使用不同的版本。

`nvm` 可以让你在不同的项目中使用不同的 `node.js` 版本，这对于一些需要特定版本的项目来说非常有用。

查看 nvm 的一些知识，请查看另一篇笔记：[nvm.md](nvm.md)

## 一些链接

[node.js 的官网](https://nodejs.org/zh-cn)
[node.js 的学习网站](https://nodejs.org/zh-cn/learn/getting-started/introduction-to-nodejs)
[nvm](https://github.com/nvm-sh/nvm)

## 一些文件的作用

### `.npmrc`

`.npmrc` 文件是 npm（Node Package Manager）的配置文件，用于定义 npm 的运行时行为。它通过设置不同的键值对（配置项），可以控制 npm 的包安装、发布、认证、缓存等行为。

`npm`支持多级配置文件，优先级从高到低依次为：

`项目级`：项目根目录的 `.npmrc`（仅影响当前项目）。

`用户级`：用户主目录的 `.npmrc`（如 `~/.npmrc`，影响当前用户的所有操作）。

`全局级`：`npm` 全局安装路径下的 `npmrc`（如 `/usr/local/etc/npmrc`，影响系统所有用户）。

`内置默认配置`：`npm` 内置的默认值。

对我个人而言，一般在项目目录下是不会使用的.即忽略该配置，选择使用用户级和内置默认配置。

参考链接：[关于 Node.js 项目中的 .npmrc 文件](https://zhuanlan.zhihu.com/p/656085924)

### `.d.ts`

`.d.ts` 文件 是 `TypeScript` 的类型声明文件（Declaration File），用于描述 JavaScript 模块或全局变量的类型信息，但不包含具体实现。

核心作用：

`提供类型提示`：帮助 `TypeScript` 理解非 `.ts` 模块（如 `.vue`、图片文件）的类型。

`扩展环境变量`：声明 `Vite` 环境变量（如 `import.meta.env`）的类型。

### `vite-env.d.ts`

#### **`vite-env.d.ts` 的用途**

在 Vite 项目中，该文件通常用于：

1. **声明环境变量类型**：  
   Vite 通过 `import.meta.env` 暴露环境变量，默认只有 `BASE_URL` 和 `MODE` 等基础变量。通过此文件可扩展自定义变量的类型：

   ```typescript
   // vite-env.d.ts
   interface ImportMetaEnv {
     readonly VITE_API_URL: string; // 声明自定义环境变量
     readonly VITE_DEBUG: boolean;
   }

   interface ImportMeta {
     readonly env: ImportMetaEnv;
   }
   ```

2. **处理非 TypeScript 模块**：  
   声明如 `.vue`、`.png` 等文件的类型，避免 TypeScript 报错：

   ```typescript
   // vite-env.d.ts
   declare module "*.vue" {
     import type { DefineComponent } from "vue";
     const component: DefineComponent<{}, {}, any>;
     export default component;
   }

   declare module "*.png" {
     const src: string;
     export default src;
   }
   ```

#### **自动生成与维护**

- **Vite 初始化生成**：  
  使用 Vite 创建 TypeScript 项目时，默认会生成 `vite-env.d.ts`。
- **更新机制**：  
  当环境变量前缀（如 `VITE_`）变化时，可能需要手动更新该文件。

### `tsconfig.json`

`tsconfig.json `的作用

定义编译选项：指定 `TypeScript` 如何将 `.ts` 代码编译为 `.js`（如目标版本、模块格式、严格检查等）。

指定文件范围：明确哪些文件需要编译，哪些需要排除。

统一团队规范：确保所有开发者使用相同的编译规则，避免环境差异导致的问题。

### `tsconfig.node.json`

针对 `Node.js` 环境的 `TypeScript` 配置：用于项目中与 `Node.js` 相关的代码（如服务端脚本、工具脚本、Electron 主进程等），与前端代码的 `TypeScript` 配置（tsconfig.json）区分开。

项目同时包含前端（浏览器）和 `Node.js` 后端代码。

使用 `Vite` 构建前端，但需要编写独立的 `Node.js` 脚本（如数据爬虫、批量处理工具）。

### `vite.config.ts`

`Vite`的核心配置文件：定义项目的构建、开发服务器、插件、优化等行为。

`TypeScript` 支持：使用 `.ts` 扩展名可获得类型提示和静态检查。
