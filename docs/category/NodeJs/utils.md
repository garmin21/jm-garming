---
title: 8-08 nodejs utils
date: "2022-08-08"
categories:
 - NodeJs
tags:
 - NodeJs
publish: true
---

### 1. 返回文件夹下所有文件路径

```js
const fs = require("fs");
const path = require("path");

function travel(basePath, callback) {
  fs.readdirSync(basePath).forEach((file) => {
    let filePath = path.join(basePath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // 如果是文件夹则递归继续
      travel(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

// 使用
let basePath = "./server"; // 可以是以盘名开头的绝对路径：'F:/server'

travel(basePath, function (filePath) {
  console.log(filePath);
});
```


### 2. 根据入参路径创建对应目录和文件

```js
const fs = require("fs");
const path = require("path");
// 生成可识别的完整路径
const toResolvePath = (...file) => path.resolve(process.cwd(), ...file);
const dirCreate = (targetPath, cb) => {
  if (fs.existsSync(targetPath)) {
    cb();
  } else {
    dirCreate(path.dirname(targetPath), () => {
      fs.mkdirSync(targetPath);
      cb();
    });
  }
};

// 创建目录
const generateDirectoryCreate = async (dirPath) => {
  return new Promise((resolve, reject) => {
    dirCreate(dirPath, resolve);
  });
};

// 创建文件
const generateFileCreate = async (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) {
        console.log(err.message);
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// 使用
const basePath = "../src/micro";
const resolvedPath = toResolvePath(basePath);

console.log(resolvedPath);
// 根据path创建目录
// generateDirectoryCreate(resolvedPath);

// 根据path创建文件
// generateFileCreate(toResolvePath(basePath, 'index.js'), `const generateFileCreate = ${generateFileCreate.toString()}`);
```
