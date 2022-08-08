---
title: 8-05 place-items
date: "2022-08-05"
categories:
 - CSS
tags:
 - CSS
publish: true
sticky: 1
---

### place-items
`place-items`是一个简写属性, 它是 `align-items`与 `justify-items` 的简写,可以搭配flex 和gird 布局使用
在flex 布局下，有点失效，建议搭配gird使用,

```css
/* 水平垂直居中 */
.outer{
    width: 200px;
    height: 200px;
    background-color: brown;
    display: grid;
    place-items: center;
    font-size: 24px;
    color: whitesmoke;
}
```