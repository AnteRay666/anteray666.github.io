---
title: 关于 reactive
date: 2025-5-9
tags:
  - Vue3
categories:
  - Vue3
---

# 关于 reactive

## 说明

`reactive` 是 Vue3 中用于创建响应式对象的 API。它可以将一个普通的 `JavaScript` 对象转换为响应式对象，使得当对象的属性发生变化时，Vue 会自动更新相关的视图。

`作用`：将普通对象转换为响应式对象（基于 Proxy 实现）。

`使用场景`：适合处理对象或数组，对它们的属性进行深度响应式代理。

`特点`：

- 直接修改属性即可触发响应式更新。

- 只能处理对象类型（Object、Array、Map、Set 等），不能处理原始值（如 string、number、boolean）。

## 代码示例

```vue
<template>
  <h1>reactive的使用实例</h1>
  <el-row>
    <el-col :span="12">
      <el-card class="card">
        <h2>num</h2>
        <div>
          <strong>{{ tempvar.num }}</strong>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="card">
        <h2>str</h2>
        <div>
          <strong>{{ tempvar.str }}</strong>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive } from "vue";

const tempvar = reactive({
  num: 0,
  str: "Hello world",
});
</script>

<style scoped>
.card {
  width: 50%;
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
```

## `reactive` vs `ref`

| **特性**             | **`reactive`**                       | **`ref`**                                     |
| -------------------- | ------------------------------------ | --------------------------------------------- |
| **数据类型**         | 仅支持对象类型（Object、Array 等）。 | 支持所有类型（原始值、对象等）。              |
| **访问方式**         | 直接访问属性：`obj.key`。            | 通过 `.value` 访问：`refObj.value`。          |
| **重新赋值对象**     | 直接替换整个对象会丢失响应性。       | 可以通过 `refObj.value = newValue` 安全替换。 |
| **模板自动解包**     | 无需额外操作，直接使用属性。         | 在模板中自动解包，无需 `.value`。             |
| **组合式函数返回值** | 需配合 `toRefs` 解构保持响应性。     | 可直接解构使用，保留响应性。                  |

## **总结**

- **`reactive`** 适合深度响应式的对象或数组，直接操作属性。
- **`ref`** 灵活通用，适合原始值或需要替换整个对象的场景，通过 `.value` 操作。
- 两者可结合使用，如用 `ref` 管理顶层状态，用 `reactive` 处理嵌套数据。
