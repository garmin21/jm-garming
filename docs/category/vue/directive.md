---
title: 8-08 directive
date: "2022-08-08"
categories:
 - VUE
tags:
 - VUE
publish: true
---


### 1. vue2 指令介绍

```text
el：指令所绑定的元素，可以用来直接操作 `DOM`。
binding：一个对象，包含以下 `property`：
    name：指令名，不包括 `v- 前缀`。
    value：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 2。
    oldValue：指令绑定的前一个值，仅在 `update 和 componentUpdated` 钩子中可用。无论值是否改变都可用。
    expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
    arg：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `foo`。
    modifiers：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
    vnode：Vue 编译生成的虚拟节点。`移步 VNode API 来了解更多详情`。
    oldVnode：上一个虚拟节点，`仅在 update 和 componentUpdated 钩子中可用`。
```

### 2. 指令的几种用法形式

1. `v-copy="message"`, message 可以在 binding.value 中获取 指令的绑定值
2. `v-copy:name="message"`, name 可以在 binding.arg 中获取 传给指令的参数
3. `v-copy.stop="message"`, name 可以在 binding.modifiers 中获取 一个包含修饰符的对象



### 3. 实现一个 v-copy 指令，仅限平台 H5

```js
import { DirectiveOptions } from "vue";
import { DirectiveBinding } from "vue/types/options";
import FmToast from "@fm/vue-ui/components/toast";

const vCopy: DirectiveOptions = {
  bind: function (el: any, binding: DirectiveBinding) {
    el.$value = binding.value;
    const handler = () => {
      if (!el.$value) {
        (FmToast as any).error("error");
      }
      const input = document.createElement("input");
      input.setAttribute("readonly", "readonly");
      input.style.position = "absolute";
      input.style.left = "-9999px";
      input.setAttribute("value", el.$value);
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length);
      if (document.execCommand("copy")) {
        const result = document.execCommand("copy");
        result && (FmToast as any).success("success");
      }
      document.body.removeChild(input);
    };
    el.handler = handler;
    el.addEventListener("click", el.handler);
  },
  componentUpdated: function (el: any, binding: DirectiveBinding) {
    el.$value = binding.value;
  },
  unbind: function (el: any) {
    el.removeEventListener("click", el.handler);
  },
};

export default vCopy;
```




### 4. v-dialogDrag element-ui 弹窗拖拽指令

```js
import Vue from "vue";

// v-dialogDrag: 弹窗拖拽属性
Vue.directive("dialogDrag", {
  bind(el, binding, vnode, oldVnode) {
    const dialogHeaderEl = el.querySelector(".el-dialog__header");
    const dragDom = el.querySelector(".el-dialog");

    dialogHeaderEl.style.cssText += ";cursor:move;";
    dragDom.style.cssText += ";top:0px;";

    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = (() => {
      if (window.document.currentStyle) {
        return (dom, attr) => dom.currentStyle[attr];
      } else {
        return (dom, attr) => getComputedStyle(dom, false)[attr];
      }
    })();

    dialogHeaderEl.onmousedown = (e) => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft;
      const disY = e.clientY - dialogHeaderEl.offsetTop;

      const screenWidth = document.body.clientWidth; // body当前宽度
      const screenHeight = document.documentElement.clientHeight; // 可见区域高度(应为body高度，可某些环境下无法获取)

      const dragDomWidth = dragDom.offsetWidth; // 对话框宽度
      const dragDomheight = dragDom.offsetHeight; // 对话框高度

      const minDragDomLeft = dragDom.offsetLeft;
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;

      const minDragDomTop = dragDom.offsetTop;
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomheight;

      // 获取到的值带px 正则匹配替换
      let styL = sty(dragDom, "left");
      let styT = sty(dragDom, "top");

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (styL.includes("%")) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, "") / 100);
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, "") / 100);
      } else {
        styL = +styL.replace(/\px/g, "");
        styT = +styT.replace(/\px/g, "");
      }

      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        // 边界处理
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }

        // 移动当前元素
        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`;
      };

      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  },
});
```
