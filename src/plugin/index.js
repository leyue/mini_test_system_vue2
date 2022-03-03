import MyModal from './modal/index.vue'

// 按需引入
// MyModal.install = function (Vue) {
//   Vue.component(MyModal.name, MyModal)
// }

// export default MyModal

// 全部引入
export default {
  install: function (Vue) {
    Vue.component(MyModal.name, MyModal)
  }
}
