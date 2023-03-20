---
title: 3-20 报错
date: '2023-03-20'
categories:
    - Error
tags:
    - Error
publish: true
---

1. `prettier.config.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.`

因为你的项目被创建为 ES module。你可以看下 package.json，里面应该有 `type: module` 的项目。于是 .js 被默认为使用了 ES module 规范，如果自动生成的配置文件使用了 CommonJS，就会出错。.cjs 的 js 会告诉 node.js 它使用了 CommonJS 规范，所以就不会出错
