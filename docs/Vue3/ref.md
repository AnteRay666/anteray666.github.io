# 关于 ref

Vue 的核心功能是声明式渲染.

在组合式 API 中，推荐使用 ref() 函数来声明响应式状态：

这是我们在沙盒中编写的代码。

```vue
<template>
  <h1>ref的使用实例</h1>

  <p>这是一个简单的ref的演示界面</p>
  <div class="showlist">
    <el-button @click="shownum = !shownum">显示num的变化</el-button>
    <el-button @click="showstr = !showstr">显示str的变化</el-button>
  </div>
  <el-col :span="18" v-if="shownum">
    <h2>num的变化</h2>
    <el-card class="card">
      <div>
        <strong>{{ num }}</strong>
      </div>
    </el-card>

    <div>
      <span>点击它，卡片里的数字会发生变化: </span>
      <el-button @click="num = 1">变成1</el-button>
      <el-button @click="num = 2">变成2</el-button>
      <el-button @click="num = 100">变成100</el-button>
      <el-button @click="num++">加一</el-button>
      <el-button @click="num--">减一</el-button>
      <el-button @click="num *= 2">翻倍</el-button>
      <el-button @click="num = 0">清零</el-button>
    </div>
  </el-col>
  <el-col :span="18" v-if="showstr">
    <h2>str的变化</h2>
    <el-card class="card">
      <div>
        <strong>{{ str }}</strong>
      </div>
    </el-card>

    <div>
      <span>点击它，卡片里的字符串会发生变化: </span>
      <el-button @click="str = 'hello world'">变成 hello world</el-button>
      <el-button @click="str = 'hello vue3'">变成 hello vue3</el-button>
      <el-button @click="str = 'hello element plus'"
        >变成 hello element plus</el-button
      >
      <el-button @click="str = 'hello Ante'">变成 hello Ante</el-button>
      <el-button @click="str += ' Ante'">后面加Ante</el-button>
    </div>
  </el-col>
</template>

<script setup>
import { ref } from "vue";
const shownum = ref("true");
const showstr = ref("true");
const num = ref(100);
const str = ref("hello world");
</script>
<style scoped>
.showlist {
  margin: 10px;
}

.card {
  width: 20%;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
```
