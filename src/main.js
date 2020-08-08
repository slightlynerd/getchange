import Vue from 'vue'
import './plugins/axios'
import VueMeta from 'vue-meta'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import store from './store'

// import layout files
import Dashboard from './layouts/dashboard.vue'
import Auth from './layouts/auth.vue'

Vue.component('dashboard-layout', Dashboard)
Vue.component('auth-layout', Auth)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
