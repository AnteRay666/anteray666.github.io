---
title: Settings 的一些配置
date: 2025-08-05
tags:
  - shopify
categories:
  - shopify
---

# Settings 的一些配置

参考文档[Settings](https://shopify.dev/docs/storefronts/themes/architecture/settings)

## 概述部分

Settings 是通过 JSON 定义，可让商家在主题编辑器里配置，如颜色、字体、布局等.

设置可分为三种级别：主题(Theme)级别（global），section 级别，block 级别，分别对应不同的编辑范围.

这种设置是可以选择是固定的也可以选择是可交互变化的。设置的值可以是静态的值，也可以设置动态源(这里相当于一个绑定的变量，随着变量的更改，所设置的值也会同步更改。)

### Settings 分类

Setinggs 分为两类：

1. `Input settings`:可以保存值且可由应用用户配置的设置。

2. `Sidebar settings`:无法保存值且应用用户无法配置的设置。它们是信息元素，可用于为您的输入设置提供详细信息和清晰度。

### Setting 一般所在的位置

1. `config`文件夹下的`setting_schema.json`文件
2. `sections`文件夹下的`liquid文件`的一个代码段。(比如`main-product.liquid`里面使用`{% schema %}...{% endschema %}`包裹的 `Settings` 字段)

### Setting 按照级别分类

`settings_schema.json`:控制主题编辑器的主题设置区域的内容。此文件中的设置转换为全局主题设置，可以通过 Liquid 设置对象访问。(**theme 级别**)

`Section schema`:在这里使用 `{% schema %}` 可以创建 `section settings` 和 `block settings`.这些设置可以分别通过 section 对象和 block 对象的 settings 属性访问。(**section 和 block 级别**)

`settings`定义为一个 JSON 设置属性，该属性是应用设置的对象的父级。此属性接受一系列设置。`Input settings`和`Sidebar settings`都使用标准架构属性。

`visible_if`:大多数设置类型都可以使用它来进行有条件的控制。

### Usage

1. `Accessing setting values`:访问设置值

可以通过以下三个 liquid 对象访问设置

- `The global settings object`
- `The section object`
- `The block object`

要访问特定的设置，就要关联 id 属性到要访问的对象。

根据文档的设置，对于 3 个级别的 setting 如果都有以下设置

```json
{
  "type": "text", //?
  "id": "message", //这里的id是可以自定义的
  "label": "Message", //标签也会一同输出。
  "default": "Hello!" // 默认值
}
```

那么输入以下内容

```input
// Settings
Message: {{ settings.message }}

// Section
Message: {{ section.settings.message }}

// Block
Message: {{ block.settings.message }}
```

将会导致这样的输出

```output
// Settings
Message: Hello!

// Section
Message: Hello!

// Block
Message: Hello!
```

2. `Checking the setting value format`:检查设置值格式

::: tip
要注意检查设置值的格式.

任何没有自动默认值的设置最终都可能没有值，这会转换为空字符串 。

可以使用空白运算符检查值是否为空字符串

```
{% unless settings.message == blank %}
{{ settings.message }}
{% endunless %}
```

:::

总之，需要一定的逻辑代码来检查值是否为空。

3. `Using dynamic sources for settings`:使用动态源进行设置

对于 JSON 模板中包含的版块和块的设置，可以选择将一个或多个动态源连接到该设置 ，具体取决于设置类型。

参考链接[dynamic-sources](https://shopify.dev/docs/storefronts/themes/architecture/settings/dynamic-sources)

### Conditional settings 条件设置

并非所有设置都可以有条件地设置。以下设置支持条件设置：
::: tip 支持条件设置

- All basic input settings // 所有基本输入设置
- All sidebar settings // 所有边栏设置
- These specialized input settings: //专用输入设置
  - color
  - color_background
  - color_scheme
  - font_picker
  - html
  - image_picker
  - inline_richtext
  - link_list
  - liquid
  - richtext
  - text_alignment
  - url
  - video
  - video_url

:::

### 仅做了解的部分

1. Platform-controlled settings 平台控制的设置

在 theme editor 中，Shopify 在模板和版块级别公开自定义 CSS 设置 。无法在设置架构中添加或隐藏此设置。

商家使用此设置添加的任何自定义 CSS 都存储在 custom_css 属性中，可以是 JSON 模板的 section 属性 ，也可以存储在 settings_data.jsonplatform_customizations 对象中。

2. Translate settings 翻译设置

根据在线商店的活动语言翻译设置架构的各种属性 。这些翻译存储在 schema locale files 中
