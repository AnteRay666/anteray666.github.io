---
title: nvm 的使用
date: 2025-4-29
tags:
  - node.js
  - nvm
categories:
  - programme
---

# `nvm` 的使用

以下是我常用的 nvm 的一些命令：

`nvm -v`

`nvm install <version>`

`nvm uninstall <version>`

`nvm use <version>`

`nvm ls`

## 个人使用 nvm 命令的经验

对于我而言，我使用 nvm 主要是创建一个特定版本的 node.js 环境，以供项目使用。不过，对于一部分简单的项目而言，一个 node.js 环境就足够了。一般这个环境是安装最新的 LST 版本的 node.js。这已经足够日常使用了。

我使用的系统是 Windows 系统，如果是其他比如 liunx，macOS 等，请参考官方文档。
以下是我执行命名后产生的一些结果

`nvm arch` : Show if node is running in 32 or 64 bit mode.

```bash
C:\Users\username>nvm arch
System Default: 64-bit.
Currently Configured: 64-bit.
```

`nvm current` : Display active version.

```bash
C:\Users\username>nvm current
v22.9.0
```

`注` : 这里的 v22.9.0 是我当前使用的 node.js 版本。截止至本篇笔记编写时，最新的 LTS 版本是 v22.15.0。最新版本请以官方发行版本为准。

`nvm debug` : Check the NVM4W process for known problems (troubleshooter).

这个暂不演示

`nvm install <version> [arch]`:The version can be a specific version, "latest" for the latest current version, or "lts" for the most recent LTS version. Optionally specify whether to install the 32 or 64 bit version (defaults to system arch). Set `[arch]` to "all" to install 32 AND 64 bit versions. Add --insecure to the end of this command to bypass SSL validation of the remote download server.

`注`：除非你非常确认你的需求，否则请先执行`nvm list available`命令，查看可用的版本。

`nvm list [available]`: List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.

`nvm list`：查看你本地安装的所有 node.js 版本。使用`nvm ls`也是可以的。

```bash
C:\Users\username>nvm list

  * 22.9.0 (Currently using 64-bit executable)

```

`nvm list available`查看所有可用的 node.js 版本。

```bash
C:\Users\username>nvm list available

|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|   23.11.0    |   22.15.0    |   0.12.18    |   0.11.16    |
|   23.10.0    |   22.14.0    |   0.12.17    |   0.11.15    |
|    23.9.0    |   22.13.1    |   0.12.16    |   0.11.14    |
|    23.8.0    |   22.13.0    |   0.12.15    |   0.11.13    |
|    23.7.0    |   22.12.0    |   0.12.14    |   0.11.12    |
|    23.6.1    |   22.11.0    |   0.12.13    |   0.11.11    |
|    23.6.0    |   20.19.1    |   0.12.12    |   0.11.10    |
|    23.5.0    |   20.19.0    |   0.12.11    |    0.11.9    |
|    23.4.0    |   20.18.3    |   0.12.10    |    0.11.8    |
|    23.3.0    |   20.18.2    |    0.12.9    |    0.11.7    |
|    23.2.0    |   20.18.1    |    0.12.8    |    0.11.6    |
|    23.1.0    |   20.18.0    |    0.12.7    |    0.11.5    |
|    23.0.0    |   20.17.0    |    0.12.6    |    0.11.4    |
|   22.10.0    |   20.16.0    |    0.12.5    |    0.11.3    |
|    22.9.0    |   20.15.1    |    0.12.4    |    0.11.2    |
|    22.8.0    |   20.15.0    |    0.12.3    |    0.11.1    |
|    22.7.0    |   20.14.0    |    0.12.2    |    0.11.0    |
|    22.6.0    |   20.13.1    |    0.12.1    |    0.9.12    |
|    22.5.1    |   20.13.0    |    0.12.0    |    0.9.11    |
|    22.5.0    |   20.12.2    |   0.10.48    |    0.9.10    |

This is a partial list. For a complete list, visit https://nodejs.org/en/download/releases

```

`nvm on` : Enable node.js version management.

`nvm off` : Disable node.js version management.

暂不演示

`nvm proxy [url]`: Set a proxy to use for downloads. Leave [url] blank to see the current proxy.Set `[url]` to "none" to remove the proxy.
就是设置代理。一般设置为国内镜像。

`nvm node_mirror [url]` : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.

`nvm npm_mirror [url] ` : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.

`nvm use [version] [arch]`: Switch to use the specified version. Optionally use "latest", "lts", or "newest". "newest" is the latest installed version. Optionally specify 32/64bit architecture. nvm use `<arch>` will continue using the selected version, but switch to 32/64 bit mode.

例如：

```bash
C:\Users\username>nvm install latest
23.11.0
Downloading node.js version 23.11.0 (64-bit)...
Extracting node and npm...
Complete
npm v10.9.2 installed successfully.


Installation complete. If you want to use this version, type

nvm use 23.11.0

C:\Users\username>nvm ls

    23.11.0
  * 22.9.0 (Currently using 64-bit executable)

C:\Users\username>nvm use 23.11.0
Now using node v23.11.0 (64-bit)

C:\Users\username>nvm ls

  * 23.11.0 (Currently using 64-bit executable)
    22.9.0

C:\Users\username>nvm use 22.9.0
Now using node v22.9.0 (64-bit)

C:\Users\username>nvm uninstall 23.11.0
Uninstalling node v23.11.0... done
C:\Users\username>nvm ls

  * 22.9.0 (Currently using 64-bit executable)

C:\Users\username>
```

`nvm root [path]` : Set the directory where nvm should store different versions of node.js. If `<path>` is not set, the current root will be displayed.

`nvm [--]version` : Displays the current running version of nvm for Windows. Aliased as v.
这个经常用来查看 nvm 的版本。

目前 `nvm` 没有可以自己升级自己的命令，所以如果需要升级 nvm 的版本，请查看官方发行版。截止至本篇笔记编写时，nvm 的最新版本是 v1.2.2

以上。

一些链接

[nvm 下载](https://github.com/coreybutler/nvm-windows/releases)

[nvm-sh](https://github.com/nvm-sh/nvm)
