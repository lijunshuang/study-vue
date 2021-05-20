export default {
  namespaced:true,
  state: {
    isLogin: false,
    username:''
  },
  mutations: {
    login(state,username){
      state.isLogin = true
      state.username = username
    },
    logout(state){
      state.isLogin = false
      state.username = ''
    },
  },
  getters:{
    welcome: state => state.username + '欢迎回来'
  },
  actions: {
    // 参数1 是vuex传递的上下文 context:{ commit, dispatch, state}
    // 模拟登录api调用,1分钟以后 如果用户名是admin 则调用成功
    login({commit},username){
      return new Promise((resolve,reject) => {
        setTimeout(()=>{
          if(username == 'admin'){
            commit('login',username)
            resolve()
          }else{
            reject()
          }
        },1000)
      })
    },
    logout({commit}){
      commit('logout')
    }
  },
}