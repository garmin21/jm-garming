---
title: "讯康检中系统分科管理"
---

## 1. element-ui ^2.14.0 el-select blur 失去焦点事件有 bug

解决：**使用 focus 事件，将对 元素重新设置 blur 事件**

```vue
<template>
  <div class="cell-formatting">
    <el-select
      class="select-clear"
      v-model="info.observation_value"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder=""
      size="mini"
      ref="msgRef"
      :disabled="global_disable"
      @focus="onBlur('msgRef')"
    >
      <template>
        <el-option
          v-for="item in item_sign"
          :key="item.id"
          :is_risk="item.is_risk"
          :label="item.item_sign_name"
          :value="item.id"
        >
        </el-option>
      </template>
    </el-select>
  </div>
</template>

<script>
export default {
  methods: {
    onBlur(ref) {
      this.$refs[ref].$refs.input.blur = () => {
        const value = this.$refs[ref].$refs.input.value;
        value && this.info.observation_value.push(value);
      };
    },
  },
};
</script>
```

## 2. 如何让页面首次渲染不触发 watch ?

```vue
<script>
export default {
  mounted() {
    this.$watch("info.observation_value", function () {
      if (this.lijiaming_callback) {
        this.lijiaming_callback({ union_id: this.union_id });
      }
    });
  },
};
</script>
```

## 3. 将 el-table 的一个单元格，设计为自定义的组件，在传输数据的过程中，需要对单元格数据，进行修改，并且，拿到整个单元格每一条的数据，去发送请求

解决办法：**子组件按条件触发父组件的回调函数，在父组件中，获取子组件实例 vm，找到子组件 vm 上的数据，将数据克隆一份，将响应式对象变为普通对象，在对其修改属性值，最后发送请求**

```vue
<template>
  <el-table-column
    prop="item_info.item_default_result"
    label="体征结果"
    align="center"
    width="250px"
  >
    <template slot-scope="scope">
      <CellFormatting
        :item_info="getItem(scope.row.item_info)"
        :item_sign="scope.row.item_sign"
        :lijiaming_callback="handleCallback"
      />
    </template>
  </el-table-column>
</template>

<script>
export default {
  methods: {
    handleCallback(union_id) {
      // 计算 当前组合下所有的细项
      new Promise((reslove) => {
        const [vm] = this.$children;
        const table__body = vm.$children.find((item) =>
          item.$el.classList.contains("el-table__body")
        );
        const res = table__body.$children
          .filter((item) => typeof item.lijiaming_callback === "function")
          .map((item) => {
            // Vue responsive object. Modification is wrong. You must clone one
            let info = cloneDeep(item.info);
            if (info.observation_value.join) {
              info.observation_value = info.observation_value.join("");
            }
            return info;
          });
        reslove(res);
      }).then((res) => {
        this.$store.dispatch("division/post_match_diag_by_union", {
          order_id: this.order_id,
          exam_dept_id: this.examDeptId,
          union_id,
          item_list: JSON.stringify(res),
        });
      });
    },
  },
};
</script>
```
