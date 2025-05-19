---
title: 关于 onMounted
date: 2025-5-19
tags:
  - Vue3
categories:
  - Vue3
---

# 关于 **onMounted**

## 说明

`onMounted` 是 Vue 3 中组合式 API 的一部分。它是一个生命周期钩子，用于在组件挂载到 DOM 后执行指定的函数。在 Vue 的生命周期中，当组件的挂载过程完成，即组件的模板已经被渲染到 DOM 中，并且组件的 DOM 元素已经可以被访问时，onMounted 中的回调函数就会被调用。

## 示例代码

```vue
<template>
  <h1>onMounted</h1>
  <p ref="pElementRef">Hello</p>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const pElementRef = ref(null);
const text = ref("");
onMounted(() => {
  console.log(`the component is now mounted.`);
  pElementRef.value.textContent = "mounasdas dted!";
  // text.value = 'asf '
  changeText();
});

function changeText() {
  text.value = "Hello Vue 3!";
}
</script>
```

## 注意

请在使用 onMounted 等生命周期钩子之前，不要忘记从 vue 里导入它。

```javascript
import { onMounted } from "vue";
```

## 其他生命周期钩子

### 1. `onBeforeMount`

- **说明**：在组件挂载之前执行的钩子。此时组件的模板还没有被渲染到 DOM 中，但组件的实例已经创建完成，数据也已经初始化。
- **使用场景**：通常用于在组件挂载前进行一些准备工作，比如获取初始数据（虽然也可以在 `onMounted` 中获取，但在某些情况下可能需要在挂载前获取数据以影响初始渲染）。
- **代码示例**：

  ```javascript
  import { onBeforeMount } from "vue";

  export default {
    setup() {
      onBeforeMount(() => {
        console.log("Component is about to be mounted");
        // 这里可以进行一些准备工作
      });
    },
  };
  ```

### 2. `onBeforeUpdate`

- **说明**：在组件更新之前执行的钩子。当组件的响应式数据发生变化时，Vue 会重新渲染组件，在重新渲染之前会调用 `onBeforeUpdate`。
- **使用场景**：可以在这个钩子中进行一些在 DOM 更新前的操作，比如记录组件的状态变化。
- **代码示例**：

  ```javascript
  import { onBeforeUpdate, ref } from "vue";

  export default {
    setup() {
      const count = ref(0);

      onBeforeUpdate(() => {
        console.log("Component is about to be updated");
        console.log("Current count before update:", count.value);
      });

      return { count };
    },
  };
  ```

### 3. `onUpdated`

- **说明**：在组件更新之后执行的钩子。当组件的响应式数据发生变化并导致组件重新渲染后，`onUpdated` 会被调用。
- **使用场景**：可以在这个钩子中进行一些在 DOM 更新后的操作，比如操作更新后的 DOM 元素。
- **代码示例**：

  ```javascript
  import { onUpdated, ref } from "vue";

  export default {
    setup() {
      const count = ref(0);

      onUpdated(() => {
        console.log("Component is updated");
        console.log("New count after update:", count.value);
      });

      return { count };
    },
  };
  ```

### 4. `onBeforeUnmount`

- **说明**：在组件销毁之前执行的钩子。此时组件的实例仍然存在，但即将被销毁。
- **使用场景**：通常用于在组件销毁前进行一些清理工作，比如清除定时器、取消订阅事件等。
- **代码示例**：

  ```javascript
  import { onBeforeUnmount, ref } from "vue";

  export default {
    setup() {
      const timer = ref(null);

      onBeforeUnmount(() => {
        console.log("Component is about to be unmounted");
        if (timer.value) {
          clearInterval(timer.value);
        }
      });

      // 示例：设置一个定时器
      timer.value = setInterval(() => {
        console.log("Timer is running");
      }, 1000);

      return {};
    },
  };
  ```

### 5. `onUnmounted`

- **说明**：在组件销毁之后执行的钩子。此时组件的实例已经被销毁，无法访问组件的响应式数据和方法。
- **使用场景**：通常用于在组件销毁后进行一些日志记录或其他操作。
- **代码示例**：

  ```javascript
  import { onUnmounted } from "vue";

  export default {
    setup() {
      onUnmounted(() => {
        console.log("Component is unmounted");
      });
    },
  };
  ```

### 生命周期钩子的顺序

- **挂载阶段**：
  1. `onBeforeMount`
  2. `onMounted`
- **更新阶段**：
  1. `onBeforeUpdate`
  2. `onUpdated`
- **销毁阶段**：
  1. `onBeforeUnmount`
  2. `onUnmounted`

通过这些生命周期钩子，你可以在组件的不同阶段执行特定的逻辑，从而更好地控制组件的行为。
