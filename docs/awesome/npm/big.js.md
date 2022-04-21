---
title: big.js
date: 2022-4-21
tags:
  - npm
---

## 用法

::: tip
文档链接: <a href="http://mikemcl.github.io/big.js/legacy/v6.0.x.html#dp">http://mikemcl.github.io/big.js/legacy/v6.0.x.html#dp</a>
:::

```cmd
yarn add big.js @types/big.js
```

```ts
import { plus, minus, times, div } from "big.js";

// 加
const foo = new Big("1.222");
const bar = new Big("0.222");
const result = Number(foo.plus(bar).toString());

// 减
const foo = new Big("1.222");
const bar = new Big("0.222");
const result = Number(foo.minus(bar).toString());

// 乘
const foo = new Big("1.222");
const bar = new Big("0.222");
const result = Number(foo.times(bar).toString());

// 除
const foo = new Big("1.222");
const bar = new Big("0.222");
const result = Number(foo.div(bar).toString());
```

### 属性参数

```ts
Big.RM = 0; // 设置是否需要进行四舍五入, 全局设置，全局应用，局部设置局部应用
```

- 使用注意点
  - `new Big()` 传的必须是一个有值的字符串
