---
title: Sidebar Settings
date: 2025-08-05
tags:
  - shopify
categories:
  - shopify
---

# [Sidebar Settings](https://shopify.dev/docs/storefronts/themes/architecture/settings/sidebar-settings)

`Sidebar Settings`不能保存值，也无法配置。它们是信息元素，可用于提供有关输入设置的详细信息并组织它们。

它由标准属性(Standard attributes)组成。

分为以下 2 个类型：

- header
- paragraph

## 标准属性(Standard attributes)

| 属性    | 描述                                            | Required |
| ------- | ----------------------------------------------- | -------- |
| type    | 输入设置类型，可以是 `header` 或者 `paragraph`. | Yes      |
| content | 设置内容，将显示在主题编辑器中。                | Yes      |

## header

`header` 类型的设置会输出 `header` 元素，以帮助您更好地组织输入设置。

除了边栏设置的标准属性外， 标题类型设置还具有属性：`info`,表示有关设置的信息性文本的选项。不是必须的。

## paragraph

`paragraph`类型的设置会输出文本元素，以帮助您更好地描述输入设置.

## Create Link

跟 Markdown 语法，一样，添加一个`[text]({url})`来插入链接。点击跳转。
