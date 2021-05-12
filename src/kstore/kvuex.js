
// 实现Store
let Vue
class Store{
  constructor(options){
    this._mutations = options.mutations // 保存mutations的值
    this._actions = options.actions // 保存mutations的值
    // this.options = options
    // 响应式处理的数据
    // this.state = new Vue({
    //   data: options.state,
    // })
    this._vm = new Vue({
      data:{
        // 添加$$ ，Vue就不会代理
        $$state:options.state
      },
    })
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }
  get state(){
    return this._vm._data.$$state;
  }
  set state(v){
    console.log('请使用replaceState 重置状态',v)
  }
  // 修改状态， commit('add',payload)
  commit(type,payload){
    // 1、根据type获取mutation
   const mutation = this._mutations[type]
   if(!mutation){
     console.log('mutation不存在')
     return
    }
    mutation(this.state,payload)
  }
  // dispatch('add',payload)
  dispatch(type,payload){
    const action = this._actions[type]
    if(!action){
      console.log('action不存在')
      return
    }
    action(this,payload) // 防止this不是 当前的 vue实例，所以在constructor 中bind this
  }
}

function install(_Vue){
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if(this.$options.store){
        console.log('this.$options',this.$options)
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}
// 现在导出的是 vuex
export default {Store, install}