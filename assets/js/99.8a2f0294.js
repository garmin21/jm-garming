(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{677:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),a("p",[t._v("JavaScript 是一种单线程的编程语言，只有一个调用栈，决定了它在同一时间只能做一件事情。")]),t._v(" "),a("p",[t._v("在 JavaScript 的运行过程中，真正负责执行 JavaScript 代码的始终只有一个线程，通常被称为主线程，各种任务都会用排队的方式来同步执行。这种方式最常见的一个问题就是：如果你尝试执行一段非常耗时的同步代码，浏览器就没办法同时去渲染 GUI，导致界面失去响应，也就是被阻塞了。")]),t._v(" "),a("p",[t._v("于是，要处理阻塞问题，就使用到了 Event Loop 机制的解决方法")]),t._v(" "),a("h2",{attrs:{id:"_2-什么是-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是-event-loop"}},[t._v("#")]),t._v(" 2. 什么是 Event Loop ？")]),t._v(" "),a("p",[t._v("事件循环（Event Loop） 是让 JavaScript 做到既是单线程，又绝对不会阻塞的核心机制，也是 JavaScript 并发模型（Concurrency Model）的基础，是用来协调各种事件、用户交互、脚本执行、UI 渲染、网络请求等的一种机制")]),t._v(" "),a("h2",{attrs:{id:"_3-任务队列-task-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-任务队列-task-queue"}},[t._v("#")]),t._v(" 3. 任务队列(task queue)")]),t._v(" "),a("h3",{attrs:{id:"_1-什么是队列-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是队列-queue"}},[t._v("#")]),t._v(" 1. 什么是队列（Queue）？")]),t._v(" "),a("p",[t._v("特殊之处在于它只允许在表的前端"),a("code",[t._v("（front）")]),t._v("进行"),a("strong",[t._v("删除")]),t._v("操作，而在表的后端"),a("code",[t._v("（rear）")]),t._v("进行"),a("strong",[t._v("插入")]),t._v("操作，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。 队列中没有元素时，称为空队列。")]),t._v(" "),a("p",[t._v("队列的数据元素又称为队列元素。在队列中插入一个队列元素称为入队，从队列中删除一个队列元素称为出队。因为队列只允许在一端插入，在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除，故队列又称为先进先出"),a("code",[t._v("（FIFO—first in first out）")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/9.webp"),width:"100%",height:"100%"}}),t._v(" "),a("h3",{attrs:{id:"_2-同步任务-synctask-、异步任务-asynctask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-同步任务-synctask-、异步任务-asynctask"}},[t._v("#")]),t._v(" 2. 同步任务(SyncTask)、异步任务(AsyncTask)")]),t._v(" "),a("p",[a("code",[t._v("Javascript")]),t._v("单线程任务被分为同步任务和异步任务，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。")]),t._v(" "),a("p",[t._v("同步任务说白了就是主线程来执行的时候立即就能执行的代码,")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"garming"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("异步任务，被 宿主环境提供 异步 API 包裹的语句，异步任务的特点就是，不会阻塞代码的执行。而是在某一个特定的条件或时刻触发")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"garming"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-宏任务-macrotask-、微任务-microtask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-宏任务-macrotask-、微任务-microtask"}},[t._v("#")]),t._v(" 3. 宏任务(MacroTask)、微任务(MicroTask)")]),t._v(" "),a("p",[a("code",[t._v("JS")]),t._v("是单线程的，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入执行栈中，依次执行，将异步代码推入异步队列，异步队列又分为"),a("strong",[t._v("宏任务队列")]),t._v("和"),a("strong",[t._v("微任务队列")]),t._v("，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。微任务队列的代表就是，"),a("code",[t._v("Promise.then")]),t._v("，"),a("code",[t._v("MutationObserver")]),t._v("，宏任务的话就是"),a("code",[t._v("setImmediate setTimeout setInterval")])]),t._v(" "),a("p",[a("strong",[t._v("MacroTask（宏任务）")])]),t._v(" "),a("p",[t._v("script 全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有 IE10 支持，具体可见 MDN）、I/O、UI Rendering。")]),t._v(" "),a("p",[a("strong",[t._v("MicroTask（微任务）")])]),t._v(" "),a("p",[t._v("Process.nextTick（Node 独有）、Promise、Object.observe(废弃)、MutationObserver")]),t._v(" "),a("h2",{attrs:{id:"_4-浏览器中的-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器中的-event-loop"}},[t._v("#")]),t._v(" 4. 浏览器中的 Event Loop")]),t._v(" "),a("p",[t._v("Javascript 有一个 main thread 主线程和 call-stack 调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/10.jpeg"),width:"100%",height:"100%"}}),t._v(" "),a("ol",[a("li",[t._v("一开始执行栈空,我们可以把执行栈认为是一个存储函数调用的栈结构，遵循先进后出的原则。微任务 队列空，宏任务 队列里有且只有一个 script 脚本（整体代码）")]),t._v(" "),a("li",[t._v("全局上下文（script 标签）被推入执行栈，同步代码执行。在执行的过程中，会判断是同步任务还是异步任务，通过对一些接口的调用，可以产生新的 （宏任务） 与（微任务），它们会分别被推入各自的任务队列里。同步代码执行完了，script 脚本会被移出 （宏任务）队列，这个过程本质上是队列的 （宏任务）队列 的执行和出队的过程。")]),t._v(" "),a("li",[t._v("上一步我们出队的是一个 （宏任务），这一步我们处理的是 （微任务）。但需要注意的是：当 宏任务队列 出队时，任务是一个一个执行的；而 微任务 出队时，任务是一队一队执行的。因此，我们处理 微任务 队列这一步，会逐个执行队列中的任务并把它出队，直到队列被清空。")]),t._v(" "),a("li",[t._v("执行渲染操作，更新界面")]),t._v(" "),a("li",[t._v("检查是否存在 Web worker 任务，如果有，则对其进行处理")]),t._v(" "),a("li",[t._v("上述过程循环往复，直到两个队列都清空")])]),t._v(" "),a("p",[a("strong",[t._v("总结一下")])]),t._v(" "),a("p",[a("strong",[t._v("当某个宏任务执行完后,会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务，如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。栈空后，再次读取微任务队列里的任务，依次类推。")])]),t._v(" "),a("h2",{attrs:{id:"_5-node-中的-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-node-中的-event-loop"}},[t._v("#")]),t._v(" 5. Node 中的 Event Loop")]),t._v(" "),a("h3",{attrs:{id:"_1-node-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-node-简介"}},[t._v("#")]),t._v(" 1. Node 简介")]),t._v(" "),a("p",[t._v("Node 中的 Event Loop 和浏览器中的是完全不相同的东西。Node.js 采用 V8 作为 js 的解析引擎，而 I/O 处理方面使用了自己设计的 libuv，libuv 是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的 API，事件循环机制也是它里面的实现")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/11.jpeg"),width:"100%",height:"100%"}}),t._v(" "),a("p",[t._v("暂时不写，后面补充")]),t._v(" "),a("h2",{attrs:{id:"_6-node-与浏览器的-event-loop-差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-node-与浏览器的-event-loop-差异"}},[t._v("#")]),t._v(" 6. Node 与浏览器的 Event Loop 差异")]),t._v(" "),a("p",[a("strong",[t._v("浏览器环境下，microtask 的任务队列是每个 macrotask 执行完之后执行。而在 Node.js 中，microtask 会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行 microtask 队列的任务。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/12.jpeg"),width:"100%",height:"100%"}}),t._v(" "),a("p",[t._v("接下我们通过一个例子来说明两者区别：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timer1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"promise1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timer2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"promise2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-浏览器端运行结果-timer1-promise1-timer2-promise2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器端运行结果-timer1-promise1-timer2-promise2"}},[t._v("#")]),t._v(" 1. 浏览器端运行结果："),a("code",[t._v("timer1=>promise1=>timer2=>promise2")])]),t._v(" "),a("p",[t._v("浏览器端的处理过程如下：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/13.gif"),width:"100%",height:"100%"}}),t._v(" "),a("h3",{attrs:{id:"_2-node-端运行结果-timer1-timer2-promise1-promise2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-node-端运行结果-timer1-timer2-promise1-promise2"}},[t._v("#")]),t._v(" 2. Node 端运行结果："),a("code",[t._v("timer1=>timer2=>promise1=>promise2")])]),t._v(" "),a("p",[t._v("浏览器端的处理过程如下：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/14.gif"),width:"100%",height:"100%"}}),t._v(" "),a("h3",{attrs:{id:"_3-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[t._v("#")]),t._v(" 3. 总结")]),t._v(" "),a("p",[t._v("浏览器和 Node 环境下，microtask 任务队列的执行时机不同")]),t._v(" "),a("ol",[a("li",[t._v("Node 端，microtask 在事件循环的各个阶段之间执行")]),t._v(" "),a("li",[t._v("浏览器端，microtask 在事件循环的 macrotask 执行完之后执行")])])])}),[],!1,null,null,null);s.default=e.exports}}]);