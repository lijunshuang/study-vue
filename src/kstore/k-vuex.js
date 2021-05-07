
// 实现Store
let Vue
class Store{
  constructor(options){
    this.options = options
    // 响应式处理的数据
    this.state = new Vue({
      data: options.state,
    })
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