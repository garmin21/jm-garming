(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{596:function(t,s,n){"use strict";n.r(s);var a=n(10),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * https://segmentfault.com/a/1190000017814119\n * 快速排序：原理：找基准值，将小于 基准值 的集合放 左边 将大于 基准值 的集合放右边，再次递归执行前面找 基准值 的动作，直到 集合小于 2 的时候停止\n * 独特之处在于，其速度，取决于选择的基准值\n */")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式一: 找基准值，拆分两边的集合")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缺点：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 首先我们每次执行都会使用到两个数组空间，产生空间复杂度。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. concat操作会对数组进行一次拷贝，而它的复杂度也会是O(n)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. 对大量数据的排序来说相对会比较慢")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("quicksort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" array\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pivot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" leftArr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rightArr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pivot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            rightArr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pivot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            leftArr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            pivot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pivot\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("quicksort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftArr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pivot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("quicksort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightArr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(quicksort(result))")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function quicksort(array, i = 0, j = array.length-1) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     if(i > j) return;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     let pivot = array[i]; // 基准值")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     let start = i;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     let end = j;")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     while (start !== end) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         while (!(array[end] < pivot) && end > start) end--;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         while (!(array[start] > pivot) && end > start) start++;")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         if(array[start] > array[end]) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             let tmp = array[start]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             array[start] = array[end]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             array[end] = tmp;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         } else if(array[start] === array[end]) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             let tmp = array[start];")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             array[start] = pivot;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             array[i] = tmp")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             break;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         }")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     i = start;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     j = end;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     console.log(i, j)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     quicksort(array, 0, i - 1)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quicksort(result)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(result)")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * pivot 6\n *      0 !== 9\n *          8 >= 6 && 9 > 0\n *              j--  : 8\n *\n *          6 <= 6 && 8 > 0\n *              i++  : 1\n * j: 8 i: 1\n *\n */")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);