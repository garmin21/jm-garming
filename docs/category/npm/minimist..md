---
title: 2-21 minimist轻量级的命令行参数解析引擎
date: '2023-02-21'
categories:
    - npm
tags:
    - npm
---

```js
// test.js
var args = require('minimist')(process.argv.slice(2))
console.log(args.hello)
```

```c
$ node test.js --hello=world
// world
$ node test.js --hello world
// world
$ node test.js --hello
// true 注意：不是空字符串而是true
```
