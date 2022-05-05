---
title: "vue3 API"
date: 2022-4-23
tags:
  - Vue3
---

## 常规

### version

获取当前 vue 的版本

```js
import { version } from "vue";

console.log(version);
```

### nextTick()

等待下一次 DOM 更新刷新的工具方法。

```vue
<script setup>
import { ref, nextTick } from "vue";

const count = ref(0);

async function increment() {
  count.value++;

  // DOM 还未更新
  console.log(document.getElementById("counter").textContent); // 0

  await nextTick();
  // DOM 此时已经更新
  console.log(document.getElementById("counter").textContent); // 1
}
</script>

<template>
  <button id="counter" @click="increment">{{ count }}</button>
</template>
```

### defineComponent

在定义 Vue 组件时提供类型提示的帮助函数。

```js
function defineComponent(
  component: ComponentOptions | ComponentOptions['setup']
): ComponentConstructor
```

获取组件实例

```js
const Foo = defineComponent(/* ... */);

type FooInstance = InstanceType<typeof Foo>;
```

### defineAsyncComponent

创建一个异步组件，

适用场景：某一个组件需要等待数据回来在进行显示

例子：骨架屏

特点：打包会帮助我们进行 分包 处理，减少的 js 大小，减少加载时间

```js
// 简单使用
const asyncSelect = defineAsyncComponent(() => {
  return import(/* select */ "./components/select.vue");
});
```

> https://blog.csdn.net/gpj065/article/details/117419752

> https://www.jianshu.com/p/ff9fde39e9b0

> https://juejin.cn/post/6912749734818447374

加载远程组件方案

> https://www.jianshu.com/p/7336055b0264

### defineCustomElement()

使用 vue 来构建 原生自定义元素

## 引用

### createApp()

创建一个应用实例, 第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props

```js
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
```

### createSSRApp()

创建一个 ssr 应用实例

### app.mount()

将应用程序实例挂载在一个容器元素中。

### app.unmount()

将一个应用实例卸载，会触发这个组件树上所有的 卸载 钩子

### app.provide()

注入，向当前 父级的 所有后代，注入 信息

返回应用实例本身，说明可以链式调用

### app.component()

注册全局组件

### app.directive()

注册全局指令

### app.use()

安装一个插件

### app.mixin()

应用一个全局 mixin（适用于该应用程序的范围）

<!-- ::: tip
一个 Vue3 的 Starter，让丝滑快人一步: <a href="https://juejin.cn/post/7054757895853834276">https://juejin.cn/post/7054757895853834276</a>
:::

::: tip
5 个知识点，让 Vue3 开发更加丝滑: <a href="https://juejin.cn/post/7054317318343491615">https://juejin.cn/post/7054317318343491615</a>
:::

::: tip
分享 15 个 Vue3 全家桶开发的避坑经验: <a href="https://segmentfault.com/a/1190000041679573">https://segmentfault.com/a/1190000041679573</a>
:::

::: tip
Vue3 中的新特性 Fragment、Suspense、Portal: <a href="https://juejin.cn/post/7054345738142089246">https://juejin.cn/post/7054345738142089246</a>
:::

::: tip
Vue3 script setup 语法糖，超爽体验: <a href="https://www.cnblogs.com/bingcola/p/15507847.html#4-%E8%8E%B7%E5%8F%96-slots-%E5%92%8C-attrs">https://www.cnblogs.com/bingcola/p/15507847.html#4-%E8%8E%B7%E5%8F%96-slots-%E5%92%8C-attrs</a>
:::

::: tip
Vue2 快速掌握 Vue3 差异化: <a href="https://segmentfault.com/a/1190000041645889#comment-area">https://segmentfault.com/a/1190000041645889#comment-area</a>
::: -->
