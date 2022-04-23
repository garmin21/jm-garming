---
title: async-validator
date: 2022-4-23
tags:
  - npm
---

### async-validator

element-ui 所使用的校验库：https://github.com/yiminghe/async-validator

例子：

```ts
import Schema from "async-validator";
// 规则描述对象
const descriptor = {
  name: {
    type: "string",
    required: true,
    validator: (rule, value) => value === "muji",
  },
  age: {
    type: "number",
    asyncValidator: (rule, value) => {
      return new Promise((resolve, reject) => {
        if (value < 18) {
          reject("too young"); // reject with error message
        } else {
          resolve();
        }
      });
    },
  },
};
const validator = new Schema(descriptor);

// 校验方法
// errors 错误对象
// fields
validator.validate({ name: "muji" }, (errors, fields) => {
  if (errors) {
    // validation failed, errors is an array of all errors
    // fields is an object keyed by field name with an array of
    // errors per field
    return handleErrors(errors, fields);
  }
  // validation passed
});

// promise usage
validator
  .validate({ name: "muji", age: 16 })
  .then(() => {
    // validation passed or without error message
  })
  .catch(({ errors, fields }) => {
    return handleErrors(errors, fields);
  });
```
