---
title: 关于 Gitpage 的使用
date: 2025-5-04
tags:
  - website
categories:
  - computer
---

# 关于上线我们的个人网站和项目站点的指南

我的 github 用户名为 AnteRay666

为了方便搭建个人博客，我将详细的将我搭建个人博客的过程记录下来。

我使用 [vuepress-reco](https://theme-reco.vuejs.press/) 来搭建我们的项目。

## 项目创建说明

我推荐在项目创建之初就将项目的命名命名好，这样可以避免后期更改项目名称时带来的麻烦。我的项目名称是 `anteray666.github.io`。

`注意`： 这里的项目名称不建议使用大写字母。因为在上线后，访问站点是`https://anteray666.github.io/`,这里的`anteray666`就是我的用户名。

例如：[我的站点](https://anteray666.github.io/)

## 项目初始化

```bash
npm install @vuepress-reco/theme-cli@1.0.7 -g # 安装脚手架
```

```bash
theme-cli init # 使用脚手架进行快速创建项目
```

以上两条命令是`npm`的初始化命令,其他包管理器例如`npx`、`yarn`等也可以。详细请参考[快速开始](https://theme-reco.vuejs.press/docs/guide/getting-started.html)

在项目初始化的时候，请参考以下,username 即为你的用户名，请注意使用小写字母。

```bash
D:>theme-cli init
? Whether to create a new directory? Yes
? What's the name of new directory? username.github.io
? What's the title of your project? username.github.io
? What's the description of your project? username.github.io
? What's the author's name? username
? What style do you want your home page to be?(The 2.x version is the alpha version) 2.x
√ [1/1] Load file from git

Load successful, enjoy it!

# Inter your blog
$ cd username.github.io
# Install package
$ yarn & npm install
```

创建好本地项目后，请在项目目录下创建.github/workflows/deploy.yml 文件，并添加以下内容：

```yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main] # 触发分支（根据你的分支名修改）
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22 # 这里的版本号根据你的需求进行更改

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .vuepress/dist
```

当然，如果你熟悉 yml 的语法并了解 gitpage 的配置说明，你可以自行配置文件，请参考[ gitpage 入门文档](https://docs.github.com/zh/pages/getting-started-with-github-pages)

这样，我们就初始化我们的项目成功了。

## 打包并部署到 gitpage

手动部署到 gh-pages 分支

1. 请先在.gitignore 里添加以下

```bash
# 忽略构建产物
.vuepress/dist
```

2. 安装 gh-pages：

```bash
npm install gh-pages --save-dev
```

3. 在`package.json`中添加脚本：

```json
{
  "scripts": {
    "deploy": "gh-pages -d .vuepress/dist"
  }
}
```

4. 上传代码到远程仓库

这个部分请自行操作，如果你不熟悉 git 的操作，请参考[git 入门文档](https://git-scm.com/book/zh/v2)。

当然，我们使用的是 Vscode 快速发布，以下是我的操作流程
在终端执行

```bash
git init
git add .
git commit -m "init"
```

然后在侧边栏的`源代码管理`>`图形`>`发布分支`>`选择新建仓库并公开发布`。‘
这需要你在初始化项目的时候将项目命名成`username.github.io`.

5. 构建并部署：

```bash
npm run build
npm run deploy
```

这时候访问应该是 404 的，，因为我们还没有配置 gitpage

6. 修改 gitpage 发布分支

上传代码成功后，我们需要在我们的项目里更改设置
在你的项目里
`Setting`>`Pages`>`Build and deployment`>`Branch`中选择 gh-pages 分支，然后点击`Save`保存。
![alt text](/images/programme/image1.png)

至此，你的网站应该就搭建完毕了，你可以访问`https://<你的用户名>.github.io`来查看你的网站。
