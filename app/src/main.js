import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI, { Message } from 'element-ui'
import electron from 'electron'
// import 'element-ui/lib/theme-chalk/index.css'
import './style/theme/index.css'
const { remote } = require('electron')

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$electron = electron
Vue.prototype.remote = remote
Vue.prototype.msgBox = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
