---
title: Input settings
date: 2025-08-05
tags:
  - shopify
categories:
  - shopify
---

# [Input settings](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings)

输入设置,可以保存一个值，并可由商家配置。

输入设置一般由[标准属性](#standard-attributes)组成，分为两类：

## 分类

1. [Basic input settings](#basic-input-settings-基本输入设置) 基本输入设置

2. [Specialized input settings](#specialized-input-settings-专门的输入设置) 专门的输入设置

## standard attributes

输入设置（Input Settings）都包含一组“标准属性”，这些属性适用于所有可配置的设置类型（如 checkbox、text、select、color 等）

✅ 属性详解与功能
| 属性 | 类型 | 必选 | 功能简介 |
| --------- | ------ | ---- | --------------------------------------------------- |
| `type` | string | 是 | 声明设置类型，例如 `checkbox`, `text`, `color` 等 |
| `id` | string | 是 | 唯一标识符，用于在 Liquid 中通过 `settings.id` 访问 |
| `label` | string | 是 | 编辑器侧边显示的说明标签 |
| `default` | varies | 否 | 初始值，比如 `"Enter text"`、`true`、`#ffffff` |
| `info` | string | 否 | 补充说明或帮助信息，如链接或额外提示 |

示例：

```json
{
  "type": "color", // type 表示颜色选择器
  "id": "heading_color", // id 用于后续 Liquid 调用：{{ section.settings.heading_color }}
  "label": "Heading color", // label 在编辑器界面中显示
  "default": "#333333", // default 是默认选定的十六进制颜色
  "info": "This color will apply to your section heading." // info 提供用户额外理解的提示
}
```

::: tip Note

1. 默认值行为：如果未提供 `default` 属性，`checkbox` 类型默认为 `false`，其他类型则为 `nil` 或`空值`.
2. info 属性的使用：可以在字符串中内嵌链接，格式为 [链接文本](URL)，编辑器会将其渲染为可点击的链接。

:::

## Basic input settings 基本输入设置

### 1. `checkbox`

`checkbox`类型的设置将输出复选框字段。此设置类型可用于打开和关闭功能，例如是否显示公告栏。
以下是实例代码

```json
{
  "type": "checkbox",
  "id": "show_announcement",
  "label": "Show announcement",
  "default": true // 如果未指定 default，则默认值为 false。
}
```

在访问复选框类型设置的值时，数据将作为布尔值返回。

### 2. `number`

::: tip Note
它除了标准属性外，还有一个 Attribute 值`placeholder`,表示输入的占位符值。和`text`一样具有该属性。
:::

实例代码

```json
{
  "type": "number",
  "id": "products_per_page",
  "label": "Products per page",
  "default": 20
}
```

访问数字类型设置的值时，数据将以以下格式之一返回：

- number. 一个数字 。
- nil, 如果没有输入任何内容。

::: warning
`default`属性是可选的。但是，该值必须是数字而不是字符串。否则会导致错误。
:::

### 3. `radio`

`radio` 类型的设置输出 `radio option` 字段.除了输入设置的标准属性外， `radio`还具有一个必需的`options`属性，该属性接受`value`和`label`定义数组。

类比枚举类型，这里的 options 就是枚举的类型，区别于 checkbox 只有 2 个值(ture and false)。这里的值支持自定义，但要注意传输的值要合法，否则会导致报错。

例如：

```json
{
  "type": "radio",
  "id": "logo_aligment",
  "label": "Logo alignment",
  "options": [
    {
      "value": "left",
      "label": "Left"
    },
    {
      "value": "centered",
      "label": "Centered"
    }
  ],
  "default": "left"
}
```

访问`radio`设置类型的值时，数据将作为字符串返回。
::: tip Note
如果未指定 default，则默认选择第一个选项。
:::

### 4. `range`

`range`类型的设置将输出带有输入字段的范围滑块字段。除了标准属性外， `range`类型设置还具有以下属性：

| Attribute | Description                           | Required |
| --------- | ------------------------------------- | -------- |
| `min`     | 输入的最小值                          | Yes      |
| `max`     | 输入的最大值                          | Yes      |
| `step`    | 滑块步长之间的增量大小,省略时默认为 1 | No       |
| `unit`    | 输入的单位。                          | No       |

- 可以用来捕获不同的数值。
- 可以使用提供的滑块或在输入字段中键入值来更新范围值：
  - 如果输入的值不符合`step`定义，则该值将舍入到最接近的步骤。
  - 如果输入的值超出给定的`min`和`max`，则该值将相应地恢复为最小值或最大值。

```json
{
  "type": "range",
  "id": "font_size",
  "min": 12,
  "max": 24,
  "step": 1,
  "unit": "px",
  "label": "Font size",
  "default": 16
}
```

访问`range`类型设置的值时，数据将以数字形式返回。

::: warning

`default`属性是必需的。`min`、`max`、`step` 和 `default` 属性不能是字符串值。否则会导致错误。
:::

### 5. `select`

`select `类型的设置会根据某些条件输出不同的`Selector fields`。除了标准属性外， 选择类型设置还具有以下属性：

| Attribute | Description                                              | Required |
| --------- | -------------------------------------------------------- | -------- |
| options   | 为下拉列表中的每个选项获取`value` / `label` 定义数组。   | Yes      |
| group     | 可以添加到每个选项的可选属性，以便在下拉列表中创建选项组 | No       |

Shopify 支持两种不同的 select UI 表现形式：
对于`Selector fields` 选择器字段

以下条件将选择器字段呈现为 `DropDown`(默认) 或 `SegmentedControl`：

- `DropDown`使用可选的`group`属性。提供了五个以上的选项。如果选项太长，可能会溢出其容器。
- `SegmentedControl`不使用可选的`group`属性。只提供两到五个选项。所有选项都适合其容器内，并且不会溢出。

可以使用此设置类型来捕获多选项选择.

官网上对于`Selector fields`的选择是自动的，但是实际上对于选择`SegmentedControl`的可以添加字段 `"style": "segmented"`

::: tip Note
如果未指定 default，则默认选择第一个选项。
:::

### 6. `text`

`text`类型的设置输出单行文本字段。除了标准属性外， 文本类型设置还具有属性：`placeholder`,表示输入的占位符值。

可以使用此设置类型捕获短字符串.
例如：

```json
{
  "type": "text",
  "id": "footer_linklist_title",
  "label": "Heading",
  "default": "Quick links"
}
```

访问文本类型设置的值时，数据将以以下格式之一返回：

- string, 字符串
- empty object, 如果未输入任何内容。

### 7. `textarea`

`textarea` 类型的设置将输出多行文本字段。除了标准属性外， 文本区域类型设置还具有属性：`placeholder`,表示输入的占位符值.

使用此设置类型捕获较大的文本块.例如:

```json
{
  "type": "textarea",
  "id": "home_welcome_message",
  "label": "Welcome message",
  "default": "Welcome to my shop!"
}
```

访问文本区域类型设置的值时，数据将以以下格式之一返回：(与前面的`text`类型一样)

- string, 字符串
- empty object, 如果未输入任何内容。

## Specialized input settings 专门的输入设置

由于专门的输入设置比较多(24 个)，只简单标注一下重点。

| All settings | 1                  | 2                    | 3                  | 4                 |
| ------------ | ------------------ | -------------------- | ------------------ | ----------------- |
| 1            | `article         ` | `color_scheme      ` | `link_list       ` | `product_list   ` |
| 2            | `blog            ` | `color_scheme_group` | `liquid          ` | `richtext       ` |
| 3            | `collection      ` | `font_picker       ` | `metaobject      ` | `text_alignment ` |
| 4            | `collection_list ` | `html              ` | `metaobject_list ` | `url            ` |
| 5            | `color           ` | `image_picker      ` | `page            ` | `video          ` |
| 6            | `color_background` | `inline_richtext   ` | `product         ` | `video_url      ` |

### 🟦 一类(9 个)：资源选择类（用于 Shopify 后台已有内容）

| 类型              | 用途                                            | 示例返回值      |
| ----------------- | ----------------------------------------------- | --------------- |
| `article`         | 选择一篇博客文章                                | Article 对象    |
| `blog`            | 选择一个博客频道                                | Blog 对象       |
| `collection`      | 单个集合                                        | Collection 对象 |
| `collection_list` | 多个集合                                        | Collection\[]   |
| `product`         | 单个产品                                        | Product 对象    |
| `product_list`    | 多个产品                                        | Product\[]      |
| `page`            | 选择一个自定义页面                              | Page 对象       |
| `metaobject`      | 用于绑定单一内容项，如某个团队成员或一条 FAQ    | metaobject 对象 |
| `metaobject_list` | 用于绑定多个内容项，如 FAQ 列表、活动日程列表等 | metaobject \[]  |

### 🎨 二类(6 个)：设计配置类（控制样式、颜色、字体）

| 类型                         | 用途                                               |
| ---------------------------- | -------------------------------------------------- |
| `color` / `color_background` | 十六进制颜色、渐变色                               |
| `color_scheme`               | Shopify 预设的颜色方案（配合 theme settings 定义） |
| `color_scheme_group`         | 多种颜色方案组合选择器                             |
| `font_picker`                | 字体选择器(自动填充 Shopify 字体库中的字体)        |
| `text_alignment`             | 文本对齐（left/center/right）                      |

1. 在`color_scheme_group` 中,提到了`role`.

`role `字段输出配色方案预览。配色方案预览对商家在编辑器中可能选择配色方案的任何位置都可见。您可以将角色分配给配色方案定义，以将配色方案映射到预览。

2. 对于`font_picker` ,`default`属性是必需的。如果不包含它，将导致错误.

3. 对于`text_alignment`，存在一个`default`,只有 3 个值可以选择，未选择的时候，默认为`left`.

### 🔧 三类(4 个)：内容输入类（富文本、自定义代码）

| 类型              | 用途                                  |
| ----------------- | ------------------------------------- |
| `html`            | 纯 HTML 代码输入                      |
| `richtext`        | 富文本输入（含 HTML）                 |
| `inline_richtext` | 单行富文本（用于按钮等）              |
| `liquid`          | 可输入 Liquid 代码片段（⚠️ 高级用法） |

1. `html`除了标准属性外， `html`类型设置还具有属性：`placeholder`,表示输入的占位符值.

   以下 HTML 标签将被自动删除：`<html>`,`<head>`,`<body>`

2. `inline_richtext` 输出未包装在段落标记 （`<p>`） 中的 HTML 标记。该设置包括以下基本格式选项：
   `Bold(粗体)`, `Italic(斜体)`,`Link(链接)`.

   `inline_richtext`不支持以下功能：

   - Line breaks (`<br />`)
   - 富文本编辑器中的下划线选项

3. `liquid`中`default`是可选的。但是，如果使用它，则其值不能是空字符串.

   并且`liquid`类型有一定的局限性，它无法访问一些 liquid 对象/标签，只可以访问一些特定的内容，具体参考[这里](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#liquid).

   同时，在这些设置中输入的内容不能超过 50kb。保存超过此限制或包含无效 Liquid 的内容将导致错误。

### 🔗 四类(5 个)：链接与媒体类

| 类型           | 用途                                                                    |
| -------------- | ----------------------------------------------------------------------- |
| `url`          | 普通链接输入                                                            |
| `link_list`    | 绑定到 Shopify 菜单（自动填充商店的可用菜单）                           |
| `video`        | Shopify 的 `media` 视频资源                                             |
| `video_url`    | YouTube/Vimeo 视频链接                                                  |
| `image_picker` | 选择图片(自动填充 Shopify 后台文件部分的可用图片，并可以选择上传新图片) |

1. 在`image_picker`中,提到了`Image focal points`.
   使用 image_picker 设置选择的图像支持焦点。焦点是图片中商家希望在图片被主题裁剪和调整时保持在视野中的位置。可以在主题编辑器 image_picker 设置中设置焦点，也可以从 “文件” 页面设置焦点。

2. `link_list`中`default`可接受值是 `main-menu` 和 `footer`。

### 特殊说明

1. `limit`属性，商家可以选择的最大集合数。默认限制和您可以设置的最大限制为 50。在专门的输入设置中有三个类型具有这个属性，如下所示：

| 类型              | 说明                         |
| ----------------- | ---------------------------- |
| `collection_list` | 使用`limit`字段 限制集合数量 |
| `metaobject_list` | 使用`limit`字段 限制数量     |
| `product_list`    | 使用`limit`字段 限制商品数量 |

2. 切换 `preset` 时不会更新设置 的类型

| 类型              | 原因说明                                   |
| ----------------- | ------------------------------------------ |
| `collection_list` | 用户选择资源，不易自动覆盖                 |
| `metaobject_list` | 同上                                       |
| `product_list`    | 同上                                       |
| `metaobject`      | 与上面一样，绑定特定 metaobject 是精细操作 |
| `image_picker`    | 通常不会被预设覆盖，用户可能上传了图片     |
| `video`           | 同上                                       |
| `video_url`       | 一般也不会被覆盖（尤其是上传视频的场景）   |

3. 不支持 `default` 属性的类型

| 类型              | 不支持 `default` 的原因    |
| ----------------- | -------------------------- |
| `collection_list` | 多个集合绑定，默认值不适用 |
| `metaobject_list` | 同上                       |
| `product_list`    | 同上                       |
| `metaobject`      | 单个资源绑定，不支持默认   |
| `image_picker`    | 无默认图片                 |
| `video`           | 无默认视频（上传型）       |

4. 会输出资源选取器字段并自动填充内容的类型

| 类型              | 自动填充商店资源     | 表现形式         | 支持单选/多选 |
| ----------------- | -------------------- | ---------------- | ------------- |
| `product`         | ✅ 商品选择器        | 单个商品选择     | 单选          |
| `product_list`    | ✅ 商品选择器        | 多个商品选择     | 多选          |
| `collection`      | ✅ 集合选择器        | 单个集合选择     | 单选          |
| `collection_list` | ✅ 集合选择器        | 多个集合选择     | 多选          |
| `blog`            | ✅ 博客选择器        | 单个博客选择     | 单选          |
| `article`         | ✅ 文章选择器        | 单个文章选择     | 单选          |
| `page`            | ✅ 页面选择器        | 单个页面选择     | 单选          |
| `metaobject`      | ✅ metaobject 选择器 | 单个 metaobject  | 单选          |
| `metaobject_list` | ✅ metaobject 选择器 | 多个 metaobject  | 多选          |
| `link_list`       | ✅ 菜单选择器        | 从导航菜单中选择 | 单选          |

### Create Link

跟 Markdown 语法，一样，添加一个`[text]({url})`来插入链接。点击跳转。
