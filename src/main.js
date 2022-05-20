import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueLoading from './components/LoadingComponent.vue'
import App from './App.vue'
import router from './router'
import { date, currency } from './methods/filters'

import $httpMessageState from './methods/pushMessageState.js'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}
app.config.globalProperties.$httpMessageState = $httpMessageState

app.use(router)
app.use(VueAxios, axios) // 順序不能顛倒
app.component('Loading', VueLoading)
app.mount('#app')
