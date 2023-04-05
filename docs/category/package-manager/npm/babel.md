---
title: 12-11 babel
date: "2022-12-11"
categories:
  - npm
tags:
  - npm
publish: true
---

<img :src="$withBase('/WechatIMG70.jpeg')" width="width:100%" height="100%" />

语法的转化，是需要配置插件进行转换的

<img :src="$withBase('/WechatIMG71.jpeg')" width="width:100%" height="100%" />

总结：
babel 是一个语法转化器，用于将一些高级的语法转化为 低级的语法，以至于让浏览器识别。

1. `@babel/core` babel 的核心包，负责 编译的工作
2. `@babel/cli` babel 的命令行执行工具
3. `@babel/preset-env` babel 的预设包，已经包含了所有语法转换的插件了

### babel 插件

1. `@babel/plugin-transform-arrow-functions` 转化箭头函数
2. ....等插件
