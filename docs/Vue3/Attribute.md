---
title: Attribute 绑定
date: 2025-5-9
tags:
  - Vue3
categories:
  - Vue3
---

# Attribute 绑定

在 Vue.js 中，为了给 `attribute` 动态绑定一个值，可以使用 `v-bind` 指令。

`v-bind` 是 Vue 模板语法中的一种特殊指令，由 `v-` 开头。它用于将 HTML 属性与 Vue 的响应式数据绑定在一起，使得 HTML 属性能够根据数据的变化动态更新。

## 基本用法

可以使用 `v-bind` 指令绑定普通属性（如 `id`、`class` 等）或事件属性（如 `@click`）到 HTML 元素上。

```vue
<template>
  <div>
    <p v-bind:id="paraId">这是一个段落</p>
    <button @click="changeId">点击改变段落 ID</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const paraId = ref("paragraph");
const changeId = () => {
  paraId.value = "new-paragraph";
};
</script>
```

在这个示例中，段落的 `id` 属性通过 `v-bind` 绑定到 `paraId` 数据上，点击按钮可以动态改变段落的 `id`。

## 动态绑定 `class`

使用 `v-bind:class` 可以根据条件动态绑定一个或多个 CSS 类：

```vue
<template>
  <div>
    <p v-bind:class="{ highlight: isHighlighted }">动态绑定类名</p>
    <button @click="toggleHighlight">切换高亮</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isHighlighted = ref(false);
const toggleHighlight = () => {
  isHighlighted.value = !isHighlighted.value;
};
</script>

<style>
.highlight {
  background-color: yellow;
}
</style>
```

这里根据 `isHighlighted` 的布尔值动态绑定 `highlight` 类，点击按钮可以切换段落的高亮状态。

## 动态绑定 `style`

动态绑定 `style` 属性可以动态设置内联样式：

```vue
<template>
  <div>
    <p v-bind:style="{ color: textColor }">动态绑定样式</p>
    <button @click="changeColor">改变文字颜色</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const textColor = ref("black");
const changeColor = () => {
  textColor.value = textColor.value === "black" ? "red" : "black";
};
</script>
```

在这个例子中，段落的文字颜色通过 `v-bind:style` 动态绑定到 `textColor` 数据上，点击按钮可以切换文字颜色。

使用 `v-bind` 指令可以更灵活地控制 DOM 元素的属性，使 HTML 页面更具动态性和交互性。
