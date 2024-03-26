(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{670:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("理解 JavaScript 中的执行上下文和执行栈: https://juejin.cn/post/6844903682283143181#heading-5")])]),t._v(" "),a("blockquote",[a("p",[t._v("Blog： https://github.com/mqyqingfeng/Blog/issues/3")])]),t._v(" "),a("blockquote",[a("p",[t._v("一道 js 面试题引发的思考: https://github.com/kuitos/kuitos.github.io/issues/18")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/1.webp"),width:"100%",height:"100%",alt:"1"}}),t._v(" "),a("h3",{attrs:{id:"什么是执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是执行上下文"}},[t._v("#")]),t._v(" 什么是执行上下文？")]),t._v(" "),a("p",[t._v("执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候，它都是在执行上下文中运行。")]),t._v(" "),a("h3",{attrs:{id:"执行上下文的三种类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文的三种类型"}},[t._v("#")]),t._v(" 执行上下文的三种类型")]),t._v(" "),a("ol",[a("li",[t._v("全局执行上下文")])]),t._v(" "),a("p",[t._v("这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。\n它会执行两件事：创建一个全局的 window 对象（浏览器的情况下），并且设置 this 的值等于这个全局对象。\n一个程序中只会有一个全局执行上下文。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("函数执行上下文")])]),t._v(" "),a("p",[t._v("每当一个函数被调用时, 都会为该函数创建一个新的上下文。\n每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。\n函数上下文可以有任意多个。\n每当一个新的执行上下文被创建，它会按定义的顺序执行一系列步骤。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Eval 函数执行上下文")])]),t._v(" "),a("p",[t._v("执行在 eval 函数内部的代码也会有它属于自己的执行上下文")]),t._v(" "),a("h3",{attrs:{id:"什么事执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么事执行栈"}},[t._v("#")]),t._v(" 什么事执行栈？")]),t._v(" "),a("p",[t._v("执行栈，也叫 “调用栈”，是一种拥有 LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文。")]),t._v(" "),a("h3",{attrs:{id:"创建执行上下文干了哪些事情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建执行上下文干了哪些事情"}},[t._v("#")]),t._v(" 创建执行上下文干了哪些事情？")]),t._v(" "),a("p",[a("strong",[t._v("全局执行上下文：")])]),t._v(" "),a("ol",[a("li",[t._v("① 执行代码之前，确定全局上下文对象，是 window")]),t._v(" "),a("li",[t._v("② 预处理\n"),a("ul",[a("li",[t._v("变量提升")]),t._v(" "),a("li",[t._v("函数提升")]),t._v(" "),a("li",[t._v("this 赋值")])])]),t._v(" "),a("li",[t._v("③ 正式执行全局上下文的代码")])]),t._v(" "),a("p",[a("strong",[t._v("函数执行上下文：")])]),t._v(" "),a("ol",[a("li",[t._v("① 当函数被调用的时候，创建函数的执行上下文，确定执行上下文对象")]),t._v(" "),a("li",[t._v("② 预处理\n"),a("ul",[a("li",[t._v("形参赋值")]),t._v(" "),a("li",[t._v("arguments 赋值")]),t._v(" "),a("li",[t._v("变量提升")]),t._v(" "),a("li",[t._v("函数提升")]),t._v(" "),a("li",[t._v("this 赋值")])])]),t._v(" "),a("li",[t._v("③ 正式执行上下文的代码")])]),t._v(" "),a("h4",{attrs:{id:"_1-this-绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-this-绑定"}},[t._v("#")]),t._v(" 1. This 绑定：")]),t._v(" "),a("ol",[a("li",[t._v("在全局执行上下文中，this 的值指向全局对象。(在浏览器中，this 引用 Window 对象)。")]),t._v(" "),a("li",[t._v("在函数执行上下文中，this 的值取决于该函数是如何被调用的。")]),t._v(" "),a("li",[t._v("如果它被一个引用对象调用，那么 this 会被设置成那个对象，否则 this 的值被设置为全局对象或者 undefined（在严格模式下）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("baz")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'this' 引用 'foo', 因为 'baz' 被")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象 'foo' 调用")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'this' 指向全局 window 对象，因为")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有指定引用对象")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-确定词法环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-确定词法环境"}},[t._v("#")]),t._v(" 2. 确定词法环境：")]),t._v(" "),a("p",[t._v("词法环境有两种类型：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("全局环境（在全局执行上下文中）是没有外部环境引用的词法环境。全局环境的外部环境引用是 null。它拥有内建的 Object/Array/等、在环境记录器内的原型函数（关联全局对象，比如 window 对象）还有任何用户定义的全局变量，并且 this 的值指向全局对象。")])]),t._v(" "),a("li",[a("p",[t._v("在函数环境中，函数内部用户定义的变量存储在环境记录器中。并且引用的外部环境可能是全局环境，或者任何包含此内部函数的外部函数。")])])]),t._v(" "),a("h4",{attrs:{id:"_1-确定变量环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-确定变量环境"}},[t._v("#")]),t._v(" 1. 确定变量环境：")]),t._v(" "),a("ol",[a("li",[t._v("它同样是一个词法环境，其环境记录器持有变量声明语句在执行上下文中创建的绑定关系")]),t._v(" "),a("li",[t._v("变量环境也是一个词法环境，所以它有着上面定义的词法环境的所有属性。")]),t._v(" "),a("li",[t._v("在 ES6 中，词法环境 和 变量环境 的一个不同就是前者被用来存储函数声明和变量（let 和 const）绑定，而后者只用来存储 var 变量绑定。")])]),t._v(" "),a("h3",{attrs:{id:"解答思考题-下面两段代码结果都一样-但有什么不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解答思考题-下面两段代码结果都一样-但有什么不同"}},[t._v("#")]),t._v(" 解答思考题, 下面两段代码结果都一样，但有什么不同？")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",[a("li",[t._v("全局执行上下文进栈")]),t._v(" "),a("li",[t._v("局部 checkscope 调用创建 局部上下文进栈")]),t._v(" "),a("li",[t._v("局部 f 调用创建 局部上下文进栈")]),t._v(" "),a("li",[t._v("局部 f 调用完毕 局部上下文出栈")]),t._v(" "),a("li",[t._v("局部 checkscope 调用完毕 局部上下文出栈")]),t._v(" "),a("li",[t._v("最后只剩下全局上下文")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",[a("li",[t._v("全局执行上下文进栈")]),t._v(" "),a("li",[t._v("局部 checkscope 调用创建 局部上下文进栈")]),t._v(" "),a("li",[t._v("局部 f 没有被调用而是直接返回，此时 checkscope 执行上下文被销毁出栈，但是 checkscope 函数作用域并没有被销毁,此时 f 还紧握着 checkscope 的作用域")]),t._v(" "),a("li",[t._v("接下来，局部 f 创建上下文对象进栈，")]),t._v(" "),a("li",[t._v("局部 f 执行完毕后出栈，")]),t._v(" "),a("li",[t._v("最后只剩下全局上下文")])]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("javascript 是使用静态作用域的语言，他的作用域在函数创建的时候便已经确定。")])]),t._v(" "),a("li",[a("strong",[t._v("局部执行上下文被销毁，并不等于函数本身被销毁")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);