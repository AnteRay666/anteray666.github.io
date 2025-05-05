---
title: npm 的使用
date: 2025-4-29
tags:
  - node.js
  - npm
categories:
  - programme
---

# `npm`的使用

npm 是 Node.js 的包管理工具，它包含了海量的开源包。开发者可以通过 npm 安装、卸载和管理项目所需的依赖包。

npm 有许多命令，不过很多并不常用，使用`npm help`来查看命令,并获取更多提示。

`npm install`是一个非常常用的命令。

`npm install` :install all the dependencies in your project

`npm install <foo>` :add the `<foo>` dependency to your project

`npm test ` run this project's tests

`npm run <foo>` run the script named `<foo>`这个你会在`package.json` 中配置它，比如你常见的命令`"npm run dev"`中的 dev 就是 script 中的一个参数，它其实是表示一段脚本，不过 npm 相当于快速启动它罢了.

`package.json 文件`

这是 Node.js 项目的一个重要文件，它存储了项目的基本信息、依赖包、脚本等。例如，通过 `package.json` 文件中的 `"scripts"` 字段，可以定义项目的启动、测试等脚本，方便开发者在命令行中
执行这些脚本。
