import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login(state){
      state.isLogin = true
    },
    logout(state){
      state.isLogin = false
    }
  },
  actions: {
    // 参数1 是vuex传递的上下文 context:{ commit, dispatch, state}
    // 模拟登录api调用,1分钟以后 如果用户名是admin 则调用成功
  },
  modules: {
  }
})
