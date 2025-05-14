---
title: 内存分析工具开发
time: 2025-5-13
categories:
  - 工具开发
tags:
  - tool
---

#

Development of memory analysis tools

## FireGraph 和 HeapMemoy

需求是将 FireGraph 放置在左边，HeapMemory 放置在右边。点击⼀个节点能够动态的进⾏缩放展⽰。

### 数据结构

单个节点的数据结构是这样的。

```json
{
  "name": "root",
  "value": 100000,
  "id": 1,
  "children": []
}
```

说明
`name` : 节点的名称。⽐如 `root`, `a1`, `a2`, `a3` 等.

`value` ：节点的值。可以是其他名字，这⾥专指分配的内存⼤⼩.

`id` : 节点的唯⼀标识。这个是为了对⽕焰图进⾏缩放查找 `SelectItembyid`.

`children` : 不是必须的.⽐如叶节点就没有 `children` .

`注意` : 理论上讲，节点的 `value` 应该⼤于等与 `Children.value` 的和

### ⽰例

```json
{
  "name": "root",
  "value": 100000,
  "id": 1,
  "children": [
    {
      "name": "a1",
      "value": 9999,
      "id": 2
    },
    {
      "name": "a2",
      "value": 1,
      "id": 3
    },
    {
      "name": "a3",
      "value": 90000,
      "id": 4,
      "children": [
        {
          "name": "a3_1",
          "value": 50000,
          "id": 5
        },
        {
          "name": "a3_2",
          "value": 40000,
          "id": 5
        }
      ]
    }
  ]
}
```

### 多个时间段说明

可以使⽤⼀个 `json` 来表⽰，也可以是⼀个⽂件夹列表动态展⽰，下⾯说明 2 种⽅式的具体展开⽅式：

1. 单个 `json` ⽂件, `json` ⽂件的格式需要修改

```json
{
  "name": "this project name",
  "timelist": [
    {
      "time": 1,
      "content": [
        {
          "name": "root",
          "value": 100,
          "id": 1,
          "children": []
        }
      ]
    },
    {
      "time": 2,
      "content": [
        {
          "name": "root",
          "value": 100,
          "id": 1,
          "children": []
        }
      ]
    }
  ]
}
```

2.  ⽂件夹⽬录形式

动态获取整个⽬录下的所有 json ⽂件。

⽐如

```bash
main
 |--a_1.json
 |--a_2.json
```

那么时间轴上就只有 2 个时间节点，请注意，这个⽂件夹中的命名应该按照时间点进⾏命名，为了⽅便前端代码进⾏查找并加载数据

## Fragmentation Ratio and Memory Custumed Over Time

碎⽚化⽐率和内存消耗根据时间进⾏排列,这个的数据结构⽐较简单。

未整合之前的 json 格式

```json
//Fragmentation Ratio
{
"timestamp": 558329,
"fragmentation_ratio": 0.0
}
//Memory Custumed
{
"brk_diff": 0,
"time_result": 1093496
}
```

这⾥的 timestamp 和 time_result 值应该⼀样。

整合后的 json

```json
//Fragmentation Ratio and Memory Custumed Over Time
{
  "timestamp": 558329,
  "brk_diff": 0,
  "fragmentation_ratio": 0.0
}
```

## 内存碎片数据格式

```json
{
  "memory_fragments": [
    {
      "fragment_id": 1,
      "address_start": "0x1000",
      "address_end": "0x2000",
      "size": 4096,
      "status": "free", //"free" 表示空闲，"used" 表示已被使用
      "type": "contiguous" //"contiguous" 表示连续内存碎片，"non-contiguous" 表示非连续内存碎片
    },
    {
      "fragment_id": 2,
      "address_start": "0x3000",
      "address_end": "0x3500",
      "size": 1280,
      "status": "used",
      "type": "contiguous"
    }
  ],
  "summary": {
    "total_memory": 8192,
    "free_memory": 5376,
    "used_memory": 2816,
    "largest_free_fragment_size": 4096,
    "smallest_free_fragment_size": 1280,
    "free_fragments_count": 1,
    "used_fragments_count": 1
  }
}
```

## 点击内存碎片跳转具体代码行

```json
{
  "memory_fragments": [
    {
      "fragment_id": 1,
      "status": "free", //注：该内存片未分配的时候无对应代码行
      "code_location": {}
    },
    {
      "fragment_id": 2,
      "status": "used",
      "code_location": {
        "file_path": "src/main.c",
        "line_number": 42
      }
    }
  ]
}
```

预计初始展⽰上下⽂ 20 ⾏
