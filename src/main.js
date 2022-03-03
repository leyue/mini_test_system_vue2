import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyModal from './plugin'
import VueI18n from 'vue-i18n'

const i18n = VueI18n.createI18n({
  locale: 'cn',
  messages: {
    cn: {
      message: {
        hello: '你好世界'
      }
    },
    en: {
      message: {
        hello: 'hello world'
      }
    }
  }
})

Vue.config.productionTip = false
Vue.use(MyModal)
Vue.use(VueI18n)
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')

// console.log(process.env.NODE_ENV)

// if ('serviceWorker' in navigator) {
//   console.log('support sw')
//   // 使用窗口加载事件保持页面加载性能
//   window.addEventListener('load', () => {
//     console.log('load sw.js')
//     let swjs = process.env.NODE_ENV == 'development' ? 'sw.js' : 'sw.js'
//     navigator.serviceWorker
//       .register(swjs)
//       .then((reg) => {
//         console.log('load success !!!')
//         console.log(reg)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   })
// }
