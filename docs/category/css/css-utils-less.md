---
title: 8-05 css-utils-less
date: "2022-08-05"
categories:
 - CSS
tags:
 - CSS
publish: true
sticky: 2
---


### 1. 清除移动端点击按钮的背景
```less
.update-tab-bg() {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
}
```

### 2. 文字显示特定行数，多余的显示省略号
```less
.text-line-clamp(@row: 2) {
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    overflow: hidden;  /** 隐藏超出的内容 **/
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: @row; /** 显示的行数 **/
}

```

### 3. 自定义数字框
```less
.clear-number-style() {
    &[type="number"] {
        outline: none; /*去掉外边框*/
        -moz-appearance:textfield;/*给火狐浏览器去掉上下加减号*/
    }
    /*数字框旁边的加减号去掉*/
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    // 去掉text 文本框 在IE浏览器中的叉叉
    &::-ms-clear{display: none;}
}


```


### 4. 一像素的线
```less
.line(@color: #333){
    height: 1px;
    overflow: hidden;
    background-color: @color;
}

```