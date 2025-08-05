---
title: Shopify
date: 2025-08-01
tags:
  - shopify
categories:
  - shopify
---

# Shopify

## 主题架构

文件目录结构

```perl
my-theme/
├── assets/           # 存放 CSS、JS、图片等静态资源
├── config/           # 包含 settings_schema.json（自定义设置）
├── layout/           # 包含 theme.liquid（主布局文件）
├── locales/          # 多语言支持
├── sections/         # 页面可配置模块（如幻灯片、产品列表等）
├── snippets/         # 可复用的模板片段
├── templates/        # 各类页面模板，如 product.liquid、index.liquid
```

### assets

在 `assets` 文件夹中包含了静态资源。

### config

在 `config/settings-schema.json` 中记录了对于主题设置的“后台元数据”。
[settings-schema-json 详细设置](https://shopify.dev/docs/storefronts/themes/architecture/config/settings-schema-json)

### layout

一般包含 `theme.liquid` 和 `password.liquid`

`theme.liquid` 是主题的「根 HTML 结构」模板,所有页面（product、cart、index）最终都会渲染到它里面

### locales

使用 `json` 文件(`key-value 结构`)来存储对不同语言的翻译，支持店铺切换语言。

在 Liquid 中这样使用：

```liquid
{{ 'general.welcome' | t }}
```

### Sections

Sections 是 Liquid 文件，允许创建可由商家自定义的可重用内容模块,
包括允许商家在版块内添加、删除和重新排序内容的块

#### 静态 Section

在 theme.liquid 或模板中固定引用：

```liquid
{% section 'header' %}
{% section 'footer' %}
```

这些 Section 不能在后台页面编辑器中拖动，仅作“公共布局使用”。

#### 动态 Section

通过 Shopify Online Store Editor 动态拖拽添加，如：

`/templates/index.liquid`

```liquid
{% section 'hero' %}
{% section 'featured-products' %}
```

#### blocks

一个 Section 内部可以允许多个“子模块”（类似组件嵌套），每个块可独立配置和重复。

🚀 section 文件的常见用途
| 名称 | 用途 |
| -------------------------- | ----------- |
| `header.liquid` | 页面顶部 |
| `footer.liquid` | 页面底部 |
| `hero.liquid` | 横幅图 |
| `featured-products.liquid` | 精选商品模块 |
| `collection-list.liquid` | 分类展示 |
| `rich-text.liquid` | 可配置文字模块 |
| `image-with-text.liquid` | 图文排版 |
| `custom-html.liquid` | 自定义 HTML 插槽 |

[Section schema](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema)
这里介绍了 schema 的一些主要参数配置，具体还要实践才能知道具体应该如何配置

### [Section group](https://shopify.dev/docs/storefronts/themes/architecture/section-groups)

这个用于存储要呈现的分区和应用块的列表及其关联设置

Section group 位于主题的 sections 目录中

### [Blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks)

Blocks 就是 Section 内部的“可配置小组件”。

Blocks 允许开发人员通过将部分分解为更小的、可重用的 Liquid 部分来创建灵活的布局。每个块都有自己的一组设置，可以在分区内添加、删除和重新排序。

#### Block 的属性说明

| 字段         | 说明                                                    |
| ------------ | ------------------------------------------------------- |
| `type`       | Block 的类型标识，必须唯一（用于前端区分）              |
| `name`       | Block 在后台显示的名称                                  |
| `settings`   | 当前 block 可配置的内容（类似 section 中的 `settings`） |
| `max_blocks` | 限制 block 最多可添加的数量（默认 16，最大 50）         |

三种类型的块
`Theme blocks`
`Section blocks`
`App blocks`

### Snippets

`Snippets` 是可重用的 `Liquid` 代码片段，作用为保持一致性并减少主题之间的重复。

被包含进其他文件（如 section、template、layout）中的 小模块

使用 `render` 标签引用 `Liquid` 代码中的片段。它接受可用于将数据传递到代码片段的命名参数。

`render` 有局部作用域（变量不会污染全局）

```liquid
{% render 'product-card',
product: product,
show_price: true,
max_description_length: 120
%}

```

### [Templates](https://shopify.dev/docs/storefronts/themes/architecture/templates)

控制在主题中每种类型的页面上呈现的内容。
传统的 `templates` 中存放的是 liquid 文件。
Shopify 现在支持 JSON 模板（而不是传统 .liquid），用于支持 Online Store 2.0 可视化编辑。
