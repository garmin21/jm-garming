---
title: "package工具包"
---

::: tip
vue-slideout: 一个 Vue.js 2/3 的侧滑组件: <a href="https://hyjiacan.github.io/vue-slideout/">https://hyjiacan.github.io/vue-slideout/</a>
:::

::: tip
headlessui 完全没有样式，完全可访问的 UI 组件，旨在与 Tailwind CSS 完美集成: <a href="https://headlessui.dev/">https://headlessui.dev/</a>
:::

::: tip
zrender: 二维绘图引擎，它提供 Canvas、SVG、VML 等多种渲染方式。ZRender 也是 ECharts 的渲染器: <a href="https://ecomfe.github.io/zrender-doc/public/">https://ecomfe.github.io/zrender-doc/public/</a>
:::

::: tip
awesome-f2e-libs 他人平常收藏的库: <a href="https://github.com/garmin21/awesome-f2e-libs#awesome-f2e-libs">https://github.com/garmin21/awesome-f2e-libs#awesome-f2e-libs</a>
:::

::: tip
date-fns: javascript 日期工具库: <a href="https://date-fns.org/">https://date-fns.org/</a>
:::

::: tip
node-rd: 列出（遍历）目录下的所有文件，包括子目录（支持 TypeScript: <a href="https://github.com/leizongmin/node-rd">https://github.com/leizongmin/node-rd</a>
:::

::: tip
MonitorControl: 外接显示屏亮度调节神器: <a href="https://github.com/MonitorControl/MonitorControl/releases">https://github.com/MonitorControl/MonitorControl/releases</a>
:::

::: tip
popper.js: 它将元素从文档中定位出来，并漂浮在任何 UI 元素上，适用于 工具提示，下拉列表，弹出框等应用场景: <a href="https://popper.js.org/docs/v2/">https://popper.js.org/docs/v2/</a>
:::

::: tip
JavaScript 使用 CryptoJS 加解密: <a href="https://github.com/brix/crypto-js">https://github.com/brix/crypto-js</a>
参考：<a href="https://devnote.pro/posts/10000051981222">https://devnote.pro/posts/10000051981222</a>
:::

### NPM 库：dotenv，从文件加载环境变量

- https://www.jianshu.com/p/ab7b106c3540
- npm: https://www.npmjs.com/package/dotenv
- 支持 ts

### NPM 库：mitt，事件发布订阅器

> 类似于 vue2 的 $on $once $emit

- https://www.npmjs.com/package/mitt

### 从一个记事本入门 node 脚手架开发

- https://juejin.cn/post/6916424375734370317

### 23 个非常有用的 NodeJs 库

- https://segmentfault.com/a/1190000041458272

### highlight.js 代码高亮

1. 支持任何框架

- 中文文档： https://fenxianglu.cn/highlight.html?theme=vs2015

**使用**

```js
// vue 指令

import Vue from "vue";
import hljs from "highlight.js";

Vue.directive("highlight", {
  deep: true,
  bind: highlight,
  update: highlight,
});

function highlight(el, binding) {
  if (el.tagName !== "CODE") {
    let blocks = el.querySelectorAll("code");
    blocks.forEach((block) => {
      highlight(block, binding);
    });
  } else {
    if (typeof binding.value === "string") {
      el.textContent = binding.value;
    }
    // ?? language-markup 是什么鬼，注意⚠️
    if (el.parentElement.className == "language-markup") {
      el.parentElement.className = "language-html";
    }
    hljs.highlightBlock(el);
  }
}
```

```html
<!-- vue component -->
<div class="asw asw-about" v-highlight v-html="content"></div>
```

### wangEditor 富文本编辑器

1. 支持 vue3
2. 轻量，容易上手

- github 地址: https://github.com/wangeditor-team/wangEditor-with-vue3
- 文档地址: https://www.wangeditor.com/doc/

<img :src="$withBase('/8.png')" width="100%" height="100%" alt="1" />
