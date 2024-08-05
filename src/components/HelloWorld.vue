<template>
  <div>
    <vxe-grid v-bind="gridOptions1"> </vxe-grid>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      gridOptions1: {
        border: true,
        resizable: true,
        showOverflow: true,
        stripe: true,
        headerAlign: "center",
        height: 300,
        align: "left",
        keyboardConfig: {
          isDel: true,
          isEnter: true,
          isTab: true,
          isEdit: true,
          isArrow: true,
        },
        mouseConfig: { selected: true },
        rowConfig: {
          isCurrent: true,
          isHover: true,
        },
        editConfig: {
          // 是否启用
          enabled: true,
          //当点击非编辑列之后，是否自动清除单元格的激活状态
          // autoClear: false,
          // 设置触发编辑为手动模式
          trigger: "click",
          // 设置为整行编辑模式
          mode: "cell",
          // 显示修改状态和新增状态
          // showStatus: true,
          // 显示编辑图标
          showIcon: true,
          // 必填星号
          showAsterisk: false,
        },
        columns: [
          { type: "seq", width: 50 },
          { field: "name", title: "Name" },
          { field: "sex", title: "Sex", showHeaderOverflow: true },
          { field: "address", title: "Address", showOverflow: true },
        ],
        data: [
          {
            id: 10001,
            name: "Test1",
            nickname: "T1",
            role: "Develop",
            sex: "Man",
            age: 0,
            address: "Shenzhen",
          },
          {
            id: 10002,
            name: "Test2",
            nickname: "T2",
            role: "Test",
            sex: "Women",
            age: 22,
            address: "Guangzhou",
          },
          {
            id: 10003,
            name: "Test3",
            nickname: "T3",
            role: "PM",
            sex: "Man",
            age: 100,
            address: "Shanghai",
          },
          {
            id: 10004,
            name: "Test4",
            nickname: "T4",
            role: "Designer",
            sex: "Women",
            age: 70,
            address: "Shenzhen",
          },
          {
            id: 10005,
            name: "Test5",
            nickname: "T5",
            role: "Develop",
            sex: "Women",
            age: 10,
            address: "Shanghai",
          },
          {
            id: 10006,
            name: "Test6",
            nickname: "T6",
            role: "Designer",
            sex: "Women",
            age: 90,
            address: "Shenzhen",
          },
          {
            id: 10007,
            name: "Test7",
            nickname: "T7",
            role: "Test",
            sex: "Man",
            age: 5,
            address: "Shenzhen",
          },
          {
            id: 10008,
            name: "Test8",
            nickname: "T8",
            role: "Develop",
            sex: "Man",
            age: 80,
            address: "Shenzhen",
          },
        ],
      },
    };
  },
  methods: {},
  created() {},
  watch: {},
};
</script>
<style lang="scss" scoped></style>
