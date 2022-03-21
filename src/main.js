import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import { date, currency } from './methods/filters'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}
app.use(router)
app.use(VueAxios, axios) // 順序不能顛倒
app.mount('#app')
