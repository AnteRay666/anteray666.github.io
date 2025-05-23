---
title: Vue3 创建项目
date: 2025-5-8
tags:
  - Vue3
categories:
  - Vue3
---

# Vue3 创建项目

我们将从创建项目这一步，来进行对 Vue 工程的一个详细的理解。

在使用`npm create vue@latest`命令去创建一个 Vue 项目时，需要注意的是

## 1. 项目命名

命令后加`.`会在当前目录下创建项目，而跳过命名。

## 2. 项目预加载

可以选择一些项目要包含的功能。以下是可选功能列表。

```bash
◆  请选择要包含的功能： (↑/↓ 切换，空格选择，a 全选，回车确认)
│  ◻ TypeScript
│  ◻ JSX 支持
│  ◻ Router（单页面应用开发）
│  ◻ Pinia（状态管理）
│  ◻ Vitest（单元测试）
│  ◻ 端到端测试
│  ◻ ESLint（错误预防）
│  ◻ Prettier（代码格式化）
└
```

### 功能选项含义

1. **TypeScript**

   - TypeScript 是一种静态类型检查语言，它是 JavaScript 的超集。它添加了类型定义，可以在编写代码时提供更强的类型检查，从而提前发现潜在的错误，提高代码的安全性和可维护性。

2. **JSX 支持**

   - JSX（JavaScript XML）是一种允许你在 JavaScript 代码中直接编写类似 HTML 结构的语法。在 Vue 项目中支持 JSX，可以让你使用类似 React 的 JSX 语法来构建 Vue 组件的模板部分，这在一些复杂的组件构建场景中可能会提供更灵活的开发体验。

3. **Router（单页面应用开发）**

   - Vue Router 是 Vue.js 官方的路由管理器，它用于构建单页面应用（SPA）。通过 Router，你可以定义多个路由，每个路由对应一个组件，当用户在应用中导航时，Vue Router 会根据当前的 URL 显示对应的组件，这样可以实现页面的无缝切换，而不需要重新加载整个页面。

4. **Pinia（状态管理）**

   - Pinia 是 Vue3 的状态管理库，它用于管理应用的全局状态。在单页面应用中，当组件之间需要共享数据或者存在复杂的状态交互时，使用 Pinia 可以将这些状态集中管理，使得状态的更新和订阅更加有序和易于维护。

5. **Vitest（单元测试）**

   - Vitest 是一个轻量级的测试框架，它与 Vite 兼容，可以方便地为 Vue 项目编写单元测试。单元测试用于验证单个组件或函数的正确性，通过编写测试用例，可以确保代码的质量和稳定性，及时发现代码的变更是否引入了新的问题。

6. **端到端测试**

   - 端到端（E2E）测试是从用户的角度对整个应用进行测试，模拟用户在浏览器中的操作，检查应用的功能是否符合预期。它可以帮助发现应用在不同页面和功能之间的交互问题，例如从登录页面到主页的流程是否正确等。

7. **ESLint（错误预防）**

   - ESLint 是一个用于识别和报告 JavaScript 代码中问题的工具。它可以帮助开发者遵循一定的代码规范，提前发现代码中的潜在问题，如语法错误、未使用的变量等，提高代码的质量。

8. **Prettier（代码格式化）**
   - Prettier 是一个代码格式化工具，它可以自动格式化 JavaScript、HTML、CSS 等代码，使得团队中的代码风格保持一致。它通过简单的配置，可以按照统一的规则对代码进行缩进、换行等操作，减少因为代码风格不一致带来的困扰。

一般而言，我们会根据需求选择其中的几项。

请注意，对每一个项的选择，你应该能够正常使用它，而不至于是一头雾水，导致项目无法进行。
