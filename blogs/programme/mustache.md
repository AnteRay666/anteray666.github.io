---
title: Mustache 语法
date: 2025-5-9
tags:
  - Mustache
categories:
  - programme
---

# Mustache 语法(即双大括号)

Mustache 是一个轻逻辑模板解析引擎，它的优势在于可以应用在 Javascript、PHP、Python、Perl 等多种编程语言中。

Mustache 的模板语法很简单，就那么几个：

- `{{keyName}}`
- `{{#keyName}} {{/keyName}}`
- `{{^keyName}} {{/keyName}}`
- `{{.}}`
- `{{<partials}}`
- `{{{keyName}}}`
- `{{!comments}}`

## **基本语法**

1. **变量替换**

使用双花括号 `{{}}` 包裹变量名来进行变量替换。

```html
<p>{{name}}</p>
```

2. **条件渲染**

使用 `{{#keyName}} `和`{{/keyName}}`来进行条件渲染。如果 `keyName` 的值为真，则渲染其中的内容。

```html
{{#isAdmin}}
<p>Welcome, Admin!</p>
{{/isAdmin}}
```

注意，这是一对组合，类似于`<a></a>`这样的。

3. **反向条件渲染**

使用 `{{^keyName}}` 和`{{/keyName}} `来进行反向条件渲染。如果 `keyName` 的值为假，则渲染其中的内容。

```html
{{^isAdmin}}
<p>Welcome, User!</p>
{{/isAdmin}}
```

4. **循环渲染**

使用 `{{#items}}`和 `{{/items}}` 来循环渲染数组中的每一项。

```html
<ul>
  {{#items}}
  <li>{{.}}</li>
  {{/items}}
</ul>
```

5. **注释**

使用` {{! 注释内容 }}` 来添加注释，注释内容不会被渲染。

```html
{{! This is a comment }}
```

6. **原样输出**

使用三花括号 `{{{}}}` 来原样输出内容，不进行 HTML 转义。

```html
<p>{{{htmlContent}}}</p>
```

7. **子模板**

使用 `{{> partialName}}` 来引入子模板。

```html
<h2>Names</h2>
{{#names}} {{> user}} {{/names}}
```

## 设置分隔符

可以通过设置分隔符来改变默认的花括号分隔符。

`{{=<% %>=}}`

`<% name %>`

`<%={{ }}=%>`
