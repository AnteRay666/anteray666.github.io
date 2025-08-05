---
title: Liquid
date: 2025-08-01
tags:
  - liquid
categories:
  - shopify
---

# Liquid

在 shopify 的开发中,liquid 语言是极为必要的。

Liquid 代码可分为  [**对象（object）**](https://liquid.bootcss.com/basics/introduction/#objects)、[**标记（tag）**](https://liquid.bootcss.com/basics/introduction/#tags)  和  [**过滤器（filter）**](https://liquid.bootcss.com/basics/introduction/#filters)。

**对象**  告诉 Liquid 在页面的哪个位置展示内容。对象和变量名由双花括号标识：`{{`  和  `}}`。

**标记（tag）**  创造了模板的逻辑和控制流。他们由单括号加百分号标识：`{%`  和  `%}`

**过滤器**  改变 Liquid 对象的输出。他们被用在输出上，通过一个  `|`  符号分隔。

## 操作符部分

操作符部分仅区别于以下：

1. 逻辑与`and` 区别于 c 语言的 `&&`
2. 逻辑或 `or` 区别于 c 语言的 `||`
3. `contains`（包含）:
   `contains`  用于检查在一个字符串中是否存在某个子串。
   `contains`  还可以用于检查一个字符串数组中是否存在某个字符串。

## 真值与假值

这里注意 liquid 的一些语法特性：
**真值（truthy）**
**假值（falsy）**
尽管对一些条件判断语句仍使用布尔值 true 和 false.但这里的写作习惯为以上 2 个。
注意，这里空值表示为`nil`,而并非`null`.

[字符串（String）](https://liquid.bootcss.com/basics/types/#string)，即便是空字符串，也是真值（truthy）。

## 数据类型

Liquid 对象的类型可以是以下五种：

- [String](https://liquid.bootcss.com/basics/types/#string)
- [Number](https://liquid.bootcss.com/basics/types/#number)
- [Boolean](https://liquid.bootcss.com/basics/types/#boolean)
- [Nil](https://liquid.bootcss.com/basics/types/#nil)
- [Array](https://liquid.bootcss.com/basics/types/#array)

可以通过  [assign](https://liquid.bootcss.com/tags/variable/#assign)  或  [capture](https://liquid.bootcss.com/tags/variable/#capture)  标记来初始化 Liquid 变量。

在数据类型方面区别于其他语言加了一个 Nil 类型，即空值类型。

初始化变量的时候使用 assign（分派，布置），这个在 Verilog 语言中同样存在。
capture 则不常见。

至于初始化数组，无法只通过 Liquid 语法初始化一个数组。

| 功能点         | `assign`                             | `capture`                                |
| -------------- | ------------------------------------ | ---------------------------------------- |
| 用于什么？     | 简单变量赋值（数字、字符串、过滤器） | 赋值为一整段内容（HTML/Liquid 混合块）   |
| 支持表达式？   | ✅（简单表达式/过滤器）              | ✅（块中可以使用变量、标签）             |
| 支持多行？     | ❌ 只能一行                          | ✅ 支持任意多行                          |
| 最终结果类型？ | 原始值或结果                         | 字符串                                   |
| 类比编程语言   | `let x = 5;`                         | `let x = "...block of rendered HTML..."` |

## 控制输出的空白符

在 Liquid 模版中，可以将连字符放在标记（tag）中，例如  `{{-`、`-}}`、`{%-`  和  `-%}`，用于将标记（tag）渲染之后的输出内容的左侧或右侧的空拍符剔除。
这个工作是必要的.

下一部分[Tags](./Tags)
