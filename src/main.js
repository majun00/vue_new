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

import jQuery from 'jquery'

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
