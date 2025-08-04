# Tags

## 注释

`comment`  标记让你能够在 Liquid 模板中书写的内容不被输出。任何书写在  `comment`  起始与结束标记之间的内容都不会被输出，如果是 Liquid 代码则不会被执行。

这没什么好说的，类似 C 语言的`//`,类似 Python 的 `#`。

## 控制流

1.  `if` 略
2.  `unless` 除非，与 `if` 相对，同`{{if a != ?}}`.
3.  `elsif`(`else if` 缩写，仅注意不要书写错误即可)
4.  `else` 略
5.  `case/when` 类似于 `switch`.

## 迭代／循环

1. `for` 略
2. `break` 略
3. `continue` 略

## for (parameters)

1. 使用 `limit` 限定循环执行的次数。

```input
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array limit:2 %}
  {{ item }}
{% endfor %}
```

```output
1 2
```

2. 使用 `offset`从指定索引号开始执行循环。

```input
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array offset:2 %}
  {{ item }}
{% endfor %}
```

```output
3 4 5 6
```

3. 使用`range`定义循环执行的范围。可利用数字或变量来定义此执行范围。

```input
{% for i in (3..5) %}
  {{ i }}
{% endfor %}

{% assign num = 4 %}
{% for i in (1..num) %}
  {{ i }}
{% endfor %}
```

```output
3 4 5
1 2 3 4
```

4. 使用`reversed`反转循环的执行顺序。注意和  `reverse`  过滤器（filter）的拼写是不同的。

```input
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array reversed %}
  {{ item }}
{% endfor %}

```

```output
6 5 4 3 2 1
```

## cycle

循环一组字符串并按照它们传入的顺序将其输出。

## cycle (parameters)

`cycle`  能够接受一个叫做  `cycle group`  的参数，以便满足你在模版中需要使用多个  `cycle`  代码块的情况。如果没有为 cycle group 命名，那么将会假定带有相同参数的 cycle 调用属于同一个组（group）。

## tablerow

生成一个 HTML 表格。必须用  `<table>`  和  `</table>`  这两个 HTML 标签将其包裹起来。

## tablerow (parameters)

`cols` 定义表格应当有多少列。
`limit` 在执行到指定的脚标（index）之后退出 tablerow 。
`offset` 在指定的脚标（index）之后开始执行 tablerow 。
`range` 定义循环执行的范围。可利用数字和变量来定义执行范围。

## 原始内容

`raw`  标记临时禁止处理其所包围的代码。如果输出的内容与 Liquid 模板语言有冲突时（例如 Mustache、Handlebars 模板语言）可以避免冲突。

## 变量

`increment`创建一个全新的数值变量，并且在后续每次调用时将此变量的值加 1。初始值是 0。

`decrement`创建一个全新的数值变量，并且在后续每次调用时将此变量的值减 1。初始值是 -1。

注意：通过  `increment`  和`decrement`标记（tag）创建的变量与通过  `assign`  或  `capture`  创建的变量是相互独立的。

下一部分[Filters](./Filters)
