(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{651:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"常规"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常规"}},[t._v("#")]),t._v(" 常规")]),t._v(" "),s("h3",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" version")]),t._v(" "),s("p",[t._v("获取当前 vue 的版本")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" version "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[t._v("#")]),t._v(" nextTick()")]),t._v(" "),s("p",[t._v("等待下一次 DOM 更新刷新的工具方法。")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextTick "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM 还未更新")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'counter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM 此时已经更新")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'counter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("increment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ count }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"definecomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definecomponent"}},[t._v("#")]),t._v(" defineComponent")]),t._v(" "),s("p",[t._v("在定义 Vue 组件时提供类型提示的帮助函数。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ComponentOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ComponentOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setup'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ComponentConstructor\n")])])]),s("p",[t._v("获取组件实例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntype FooInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" InstanceType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"defineasynccomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defineasynccomponent"}},[t._v("#")]),t._v(" defineAsyncComponent")]),t._v(" "),s("p",[t._v("创建一个异步组件，")]),t._v(" "),s("p",[t._v("适用场景：某一个组件需要等待数据回来在进行显示")]),t._v(" "),s("p",[t._v("例子：骨架屏")]),t._v(" "),s("p",[t._v("特点：打包会帮助我们进行 分包 处理，减少的 js 大小，减少加载时间")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 简单使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" asyncSelect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineAsyncComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* select */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/select.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("https://blog.csdn.net/gpj065/article/details/117419752")])]),t._v(" "),s("blockquote",[s("p",[t._v("https://www.jianshu.com/p/ff9fde39e9b0")])]),t._v(" "),s("blockquote",[s("p",[t._v("https://juejin.cn/post/6912749734818447374")])]),t._v(" "),s("p",[t._v("加载远程组件方案")]),t._v(" "),s("blockquote",[s("p",[t._v("https://www.jianshu.com/p/7336055b0264")])]),t._v(" "),s("h3",{attrs:{id:"definecustomelement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definecustomelement"}},[t._v("#")]),t._v(" defineCustomElement()")]),t._v(" "),s("p",[t._v("使用 vue 来构建 原生自定义元素")]),t._v(" "),s("h2",{attrs:{id:"引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),s("h3",{attrs:{id:"createapp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createapp"}},[t._v("#")]),t._v(" createApp()")]),t._v(" "),s("p",[t._v("创建一个应用实例, 第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"createssrapp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createssrapp"}},[t._v("#")]),t._v(" createSSRApp()")]),t._v(" "),s("p",[t._v("创建一个 ssr 应用实例")]),t._v(" "),s("h3",{attrs:{id:"app-mount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-mount"}},[t._v("#")]),t._v(" app.mount()")]),t._v(" "),s("p",[t._v("将应用程序实例挂载在一个容器元素中。")]),t._v(" "),s("h3",{attrs:{id:"app-unmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-unmount"}},[t._v("#")]),t._v(" app.unmount()")]),t._v(" "),s("p",[t._v("将一个应用实例卸载，会触发这个组件树上所有的 卸载 钩子")]),t._v(" "),s("h3",{attrs:{id:"app-provide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-provide"}},[t._v("#")]),t._v(" app.provide()")]),t._v(" "),s("p",[t._v("注入，向当前 父级的 所有后代，注入 信息")]),t._v(" "),s("p",[t._v("返回应用实例本身，说明可以链式调用")]),t._v(" "),s("h3",{attrs:{id:"app-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-component"}},[t._v("#")]),t._v(" app.component()")]),t._v(" "),s("p",[t._v("注册全局组件")]),t._v(" "),s("h3",{attrs:{id:"app-directive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-directive"}},[t._v("#")]),t._v(" app.directive()")]),t._v(" "),s("p",[t._v("注册全局指令")]),t._v(" "),s("h3",{attrs:{id:"app-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-use"}},[t._v("#")]),t._v(" app.use()")]),t._v(" "),s("p",[t._v("安装一个插件")]),t._v(" "),s("h3",{attrs:{id:"app-mixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-mixin"}},[t._v("#")]),t._v(" app.mixin()")]),t._v(" "),s("p",[t._v("应用一个全局 mixin（适用于该应用程序的范围）")]),t._v(" "),s("h3",{attrs:{id:"app-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-version"}},[t._v("#")]),t._v(" app.version")]),t._v(" "),s("p",[t._v("返回当前的版本")]),t._v(" "),s("h3",{attrs:{id:"app-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-config"}},[t._v("#")]),t._v(" app.config")]),t._v(" "),s("p",[t._v("返回当前的应用配置")]),t._v(" "),s("h3",{attrs:{id:"app-config-errorhandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-config-errorhandler"}},[t._v("#")]),t._v(" app.config.errorHandler")]),t._v(" "),s("p",[t._v("全局监听，应用发生的报错")]),t._v(" "),s("h3",{attrs:{id:"app-config-warnhandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-config-warnhandler"}},[t._v("#")]),t._v(" app.config.warnHandler")]),t._v(" "),s("p",[t._v("全局监听应用运行时的警告")]),t._v(" "),s("h3",{attrs:{id:"app-config-performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-config-performance"}},[t._v("#")]),t._v(" app.config.performance")]),t._v(" "),s("p",[t._v("将此设置为 true 在浏览器开发工具性能/时间线面板中启用组件初始化、编译、渲染和修补性能跟踪。仅适用于开发模式和支持 performance.mark API 的浏览器。")]),t._v(" "),s("h3",{attrs:{id:"app-config-compileroptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-config-compileroptions"}},[t._v("#")]),t._v(" app.config.compilerOptions")]),t._v(" "),s("p",[t._v("设置应用的自定义配置，会影响到整个应用程序中所有组件，组件自己也可以配置覆盖其配置")]),t._v(" "),s("h3",{attrs:{id:"app-config-globalproperties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-config-globalproperties"}},[t._v("#")]),t._v(" app.config.globalProperties")]),t._v(" "),s("p",[t._v("注册全局属性的对象，可在应用程序内的任何组件实例上访问这些属性")]),t._v(" "),s("h3",{attrs:{id:"app-config-optionmergestrategies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-config-optionmergestrategies"}},[t._v("#")]),t._v(" app.config.optionMergeStrategies")]),t._v(" "),s("p",[t._v("没搞懂")]),t._v(" "),s("h2",{attrs:{id:"composition-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composition-api"}},[t._v("#")]),t._v(" Composition API")]),t._v(" "),s("h3",{attrs:{id:"setup-入口函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-入口函数"}},[t._v("#")]),t._v(" setup 入口函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attrs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" slots"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" emit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expose "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// props")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attrs 相当于 $attrs")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// slots 相当于 $slots")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expose 属性公开，可以将当前组件实例上的属性，和方法，公开")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"响应式工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式工具"}},[t._v("#")]),t._v(" 响应式工具")]),t._v(" "),s("h4",{attrs:{id:"isref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isref"}},[t._v("#")]),t._v(" isRef()")]),t._v(" "),s("p",[t._v("判断是否是一个 ref")]),t._v(" "),s("h4",{attrs:{id:"unref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unref"}},[t._v("#")]),t._v(" unref()")]),t._v(" "),s("p",[t._v("解构 ref , 如果是一个 ref 就得到 原始值，如果是 原始值 ，就返回 原始值")]),t._v(" "),s("h3",{attrs:{id:"toref-object-key-defaultvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toref-object-key-defaultvalue"}},[t._v("#")]),t._v(" toRef(object, key, defaultValue)")]),t._v(" "),s("p",[t._v("将对象的某一个 key 转为 ref, 也可以设置默认值")])])}),[],!1,null,null,null);a.default=e.exports}}]);