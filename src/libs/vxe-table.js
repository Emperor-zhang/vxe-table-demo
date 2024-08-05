import Vue from 'vue'
import XEUtils from 'xe-utils'
import 'vxe-table/lib/style.css'
import {
  // 全局实例对象
  VXETable,

  // 可选表格模块
  VxeTableFilterModule,
  VxeTableEditModule,
  VxeTableMenuModule,
  VxeTableExportModule,
  VxeTableKeyboardModule,
  VxeTableValidatorModule,
  VxeTableCustomModule,

  // 可选组件
  VxeIcon,
  VxeTable,
  VxeColumn,
  VxeColgroup,
  VxeGrid,
  VxeTooltip,
  VxeToolbar,
  VxePager,
  VxeForm,
  VxeFormItem,
  VxeFormGather,
  VxeCheckbox,
  VxeCheckboxGroup,
  VxeRadio,
  VxeRadioGroup,
  VxeRadioButton,
  VxeSwitch,
  VxeInput,
  VxeSelect,
  VxeOptgroup,
  VxeOption,
  VxeTextarea,
  VxeButton,
  VxeButtonGroup,
  VxeModal,
  VxeList,
  VxePulldown
} from 'vxe-table'

// 导入默认的语言
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

// 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
VXETable.setConfig({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
})

// 可选表格模块
Vue.use(VxeTableFilterModule)
Vue.use(VxeTableEditModule)
Vue.use(VxeTableMenuModule)
Vue.use(VxeTableExportModule)
Vue.use(VxeTableKeyboardModule)
Vue.use(VxeTableValidatorModule)
Vue.use(VxeTableCustomModule)

// 可选组件
Vue.use(VxeIcon)
  Vue.use(VxeTable)
  Vue.use(VxeColumn)
  Vue.use(VxeColgroup)
  Vue.use(VxeGrid)
  Vue.use(VxeTooltip)
  Vue.use(VxeToolbar)
  Vue.use(VxePager)
  Vue.use(VxeForm)
  Vue.use(VxeFormItem)
  Vue.use(VxeFormGather)
  Vue.use(VxeCheckbox)
  Vue.use(VxeCheckboxGroup)
  Vue.use(VxeRadio)
  Vue.use(VxeRadioGroup)
  Vue.use(VxeRadioButton)
  Vue.use(VxeSwitch)
  Vue.use(VxeInput)
  Vue.use(VxeSelect)
  Vue.use(VxeOptgroup)
  Vue.use(VxeOption)
  Vue.use(VxeTextarea)
  Vue.use(VxeButton)
  Vue.use(VxeButtonGroup)
  Vue.use(VxeModal)
  Vue.use(VxeList)
  Vue.use(VxePulldown)