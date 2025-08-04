# 重点开发内容

包含 3 个部分：

## [product](https://shopify.dev/docs/storefronts/themes/architecture/templates/product)

product 模板呈现产品页面，其中包含产品的媒体和内容，以及供客户选择变体并将其添加到购物车的表单。

在商品模板或模板内的某个部分中包含以下内容：

1. The product object

2. The product form, with the following components:

   - A variant selector
   - A quantity input
   - Accelerated checkout buttons
   - Input elements for line item properties

或者可以放上 product recommendations。

### 对于一个 示例 [product.json](https://github.com/Shopify/dawn/blob/main/templates/product.json) 文件的结构分析:

#### 顶层结构

```json
{
  "sections": { ... },
  "order": [ ... ]
}
```

- `sections`：定义了页面上包含的所有 section，每个 section 内可以嵌套多个 block。

- `order`：指定这些 section 在页面上的展示顺序（如 main → image-with-text → multicolumn → related-products）

#### sections

```json
"main": {
  "type": "main-product",
  "blocks":{···},
  "block_order": [], /*定义了blocks里显示的顺序 */
  "settings":{}, /* 对整个 main-product 区域的设置*/
}

```

blocks 参考图片
![blocks](/images/shopify/image1.png)

- `blocks`
  | Block ID | 类型 | 功能 |
  | ------------------- | ------------------- | ------------------------------------- |
  | `vendor` | `text` | 显示供应商名 `{{ product.vendor }}`，文字样式为大写 |
  | `title` | `title` | 显示产品标题 |
  | `caption` | `text` | 显示产品 metafield 中的 `subtitle`（副标题） |
  | `price` | `price` | 显示价格 |
  | `variant_picker` | `variant_picker` | 变体选择器（按钮样式） |
  | `quantity_selector` | `quantity_selector` | 数量选择器 |
  | `buy_buttons` | `buy_buttons` | 显示“添加到购物车”等按钮，支持礼品卡和动态结账 |
  | `description` | `description` | 显示产品描述 |
  | `collapsible-row-*` | `collapsible_tab` | 可折叠的说明区域（比如材质、退换货等） |
  | `share` | `share` | 显示“分享”功能 |
- `settings`
  | 设置项 | 意义 |
  | ------------------------------- | -------------------------- |
  | `enable_sticky_info` | 启用滚动时产品信息固定显示 |
  | `gallery_layout` | 图片布局为“stacked” |
  | `media_size` | 媒体图像为“large” |
  | `constrain_to_viewport` | 限制在可视范围显示 |
  | `mobile_thumbnails` | 在移动端隐藏缩略图 |
  | `hide_variants` | 隐藏变体 |
  | `enable_video_looping` | 不启用视频循环 |
  | `padding_top`, `padding_bottom` | 设置上下间距（单位是像素） |

`related-products`:展示类似或推荐产品。

```json
  "related-products": {
    "type": "related-products",
    "settings": {
      "heading": "You may also like",
      "heading_size": "h2",
      "columns_desktop": 4,
      "color_scheme": "scheme-1",
      "image_ratio": "square",
      "show_secondary_image": true,
      "show_vendor": false,
      "show_rating": false,
      "columns_mobile": "2",
      "padding_top": 36,
      "padding_bottom": 28
    }
  }
```

#### order

## [page](https://shopify.dev/docs/storefronts/themes/architecture/templates/page)

page 页呈现商店的页面 ，例如 “关于我们 ”或“ 联系我们 ”。

```json
{
  "sections": {
    "main": {
      "type": "main-page",
      "settings": {
        "padding_top": 28,
        "padding_bottom": 28
      }
    }
  },
  "order": ["main"]
}
```

`type: "main-page"`：表示调用的是 `sections/main-page.liquid`（或 `JSON section`）的模块，用于渲染 Page 类型的内容。

## [blog](https://shopify.dev/docs/storefronts/themes/architecture/templates/blog)

blog 模板呈现博客页面，其中列出了博客中的所有文章。

```json
{
  "sections": {
    "main": {
      "type": "main-blog",
      "settings": {
        "layout": "collage",
        "show_image": true,
        "image_height": "medium",
        "show_date": true,
        "show_author": false,
        "padding_top": 36,
        "padding_bottom": 36
      }
    }
  },
  "order": ["main"]
}
```

`"type": "main-blog"`表示调用 `sections/main-blog.liquid（或 JSON）`这个模块，负责渲染博客文章列表。

PS：
| 字段 | 是否手动设置 | 用途 |
| ------- | -------- | -------------------- |
| `type` | ✅ 必须手动设置 | 指定要加载哪个 section 模块文件 |
| `id` | ❌ 一般自动生成 | 唯一标识这个模块实例 |
| `order` | ✅ 推荐设置 | 控制这些模块的显示顺序 |
