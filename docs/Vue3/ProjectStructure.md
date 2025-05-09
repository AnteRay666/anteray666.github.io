---
title: Vue3 项目结构
date: 2025-5-8
tags:
  - Vue3
categories:
  - Vue3
---

# Vue3 项目结构

对于一个标准的 Vue3 项目而言，我们需要先了解它的结构，这样能够帮助我们在使用快速构建的脚手架上搭建我们的项目。

以下是一个标准的结构。

## 结构

```bash
    vuebox/                   # 项目根目录
    ├── .vscode/              # VS Code 配置目录，存放编辑器相关配置文件
    ├── public/               # 静态资源目录，存放不会被构建工具处理的静态文件，如favicon.ico等
    ├── src/                  # 源代码目录，项目的核心代码文件都存放在这里
    │   ├── assets/           # 存放项目所需的静态资源，如图片、样式表等
    │   ├── components/       # 存放项目的各个组件文件，每个组件对应一个.vue文件
    │   ├── router/           # 路由配置目录
    │   │   └── index.js      # 路由配置文件，定义应用中的不同路由
    │   ├── stores/           # 状态管理目录，存放Pinia状态管理相关的代码
    │   ├── views/            # 存放各个页面组件，通常每个路由对应一个页面组件
    │   ├── App.vue           # 应用的根组件，其他组件都会在这个组件中进行组合和展示
    │   └── main.js           # 应用的入口文件，用于初始化和配置应用
    ├── .gitattributes        # Git配置文件，用于指定文件的换行符处理方式等
    ├── .gitignore            # 指定Git版本控制中需要忽略的文件和目录
    ├── .prettierrc.json      # Prettier代码格式化工具的配置文件
    ├── index.html            # 项目的HTML入口文件，用于挂载Vue应用
    ├── jsconfig.json         # JavaScript配置文件，提供智能代码提示等功能
    ├── package.json          # 项目依赖配置文件，定义了项目的元数据、依赖项等
    ├── README.md             # 项目的说明文件，通常包含项目的介绍、安装指南等
    ├── vite.config.js        # Vite构建工具的配置文件
    └── vitest.config.js      # Vitest测试工具的配置文件
```

请按照需求进行文件的创建和引用。
