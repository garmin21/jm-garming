---
title: 8-05 css-performance
date: "2022-08-05"
categories:
 - CSS
tags:
 - CSS
publish: true
sticky: 3
---


### 1. will-change

will-change属性通过告诉浏览器什么属性、什么元素将会发生变化，可以对这些操作进行可能性的优化，由此提高CSS动画的执行效率。

这个属性可以有4个值：

1. auto: 实行标准浏览器优化。
2. scroll-position: 指明元素的滚动位置将会出现动画变化，浏览器应该为滚动视窗内容的不可见部分事先做好准备。
3. contents: 指明元素的内容将会发生变化，浏览器不要缓存它们的内容。
4. `<custom-ident>`: 指明will-change实施的目标属性，比如transform 或 opacity。

如果想通知浏览器会发生一个transform方面的变化，可以这样写：
```css

.element {
	will-change: transform;
}
```
我们还可以指定多个值，用逗号分隔，例如：

```css
.element {
	will-change: transform, opacity;
}
```

然而，千万不要过度使用will-change属性，否则，事与愿违，页面的执行效率会降低，推荐的做法是当一个元素或属性发生变化时打开will-change，变化完成之后关闭它。`will-change: auto;`

### 2. pointer-events
现代浏览器里CSS的职责范围和JavaScript的越来越模糊分不清。比如CSS里`-webkit-touch-callout`属性在iOS里能禁止当用户点击时弹出气泡框。而本文要说的pointer-events的风格更像JavaScript，它能够：

1. 阻止用户的点击动作产生任何效果
2. 阻止缺省鼠标指针的显示
3. 阻止CSS里的hover和active状态的变化触发事件
4. 阻止JavaScript点击动作触发的事件


```css
/* none值能阻止点击、状态变化和鼠标指针变化 */
.element {
    pointer-events: none;
}
```
一些需要注意的关于pointer-events的事项：

1. 子元素可以声明pointer-events来解禁父元素的阻止鼠标事件限制。
2. 如果你对一个元素设置了click事件监听器，然后你移除了pointer-events样式声明，或把它的值改变为auto，监听器会重新生效。基本上，监听器会遵守pointer-events的设定。

适用场景：

1. 做权限级控制的时候可以通过 `pointer-events` 阻止点击
2. 滚动页面的时候，如果你页面有许多hover的效果，可能会导致滚动出现问题，可以在滚动时给body元素应用 `pointer-events：none`，禁用了包括hover在内的鼠标事件，从而提高滚动性能。
