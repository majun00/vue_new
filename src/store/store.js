import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null,
    userid: "",
    username: 'majun',
  },
  mutations: {
    saveUserid(state, data) {
      state.userid = data
    },
    saveToken(state, data) {
      state.token = data
    },
    removeToken(state, data) {
      state.token = null
    }
  }

})

export default store
