import Vue from 'vue'
import App from './App'
import router from './router'
// Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import Vuex from 'vuex'
import store from './store/store'
Vue.use(Vuex)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueAreaLinkage from 'vue-area-linkage'
Vue.use(VueAreaLinkage)

import jQuery from 'jquery'

import moment from 'moment/moment'
Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY 年 MM 月 DD 日  HH : mm ';
  return moment.unix(value).format(formatString); // 这是时间戳转时间
});


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
