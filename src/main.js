// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'
import './main.scss'
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'

Vue.use(Tooltip)
Vue.config.productionTip = false
Vue.component('icon', Icon)
// window.apiHostname = 'http://laravel-mysql-persistent-ensalamento.1d35.starter-us-east-1.openshiftapps.com'
window.apiHostname = 'http://52.205.160.150'
// window.apiHostname = 'http://localhost:8000'
window.colors = [
  'darkred',
  'darkblue',
  'teal',
  'darkgreen',
  'darkorange',
  'darkyellow'
]
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
