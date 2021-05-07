// 自己实现的 router

/*
  SPA 页面不能刷新
  1. hash
  2. h5的history api

  Url发生变化，要显示对应的内容:
  1.router-view : 核心思想是 占位容器
  2. 数据响应式

  得先实现一个 插件,
  需要实现install方法

  1. 实现插件 VueRouter 类
  2. 获取组件的内容 使用 this.$slots.default
*/

let Vue
// 1. 实现插件
class VueRouter{
  constructor(options){
    this.options = options
    // 数据响应式 , current 必须是响应式的，那么使用它的组件就会重新render,
    // 如何造一个响应式数据
    // 1. 借鸡生蛋  new Vue({data: {current:'/'}})
    // 2. Vue.util.defineReactive(obj,'current','/')
    Vue.util.defineReactive(this,'current',window.location.hash.slice(1) || '/')
    // this.current = window.location.hash.slice(1) || '/' // 设置默认值
    // 监听url变化
    window.addEventListener('hashchange',()=>{
      this.current = window.location.hash.slice(1)
    })
  }
}
// 2.插件要实现一个 install方法
VueRouter.install = function(_Vue){
  Vue = _Vue

  // 注册router实例
  // 通过全局混入: Vue.mixin({ berforeCreate})
  Vue.mixin({
    beforeCreate() {
      // 仅在根组件创建时 执行一次
      if(this.$options.router){
        // debugger
        Vue.prototype.$router = this.$options.router
      }
    },
  })
  // 注册 router-link和 router-view 组件
  Vue.component('router-view',{
    render(h){
      let component = null
      // 根据url (window.location.hash) 在routes中 获取到对应的component
      const {current,options} = this.$router
      const route = options.routes.find( route => route.path === current)
      if(route){
        component = route.component
      }
      return h(component)
      // return h('div','rotuer-view')
    }
  })
  Vue.component('router-link',{
    // template:`<a> router-link</a>`
    props:{
      to:{
        type:String,
        required:true
      }
    },
    render(h){
      // <a href='#/about'></a>
      return h('a', { attrs: { href:`#${this.to}`}},this.$slots.default)
    }
  })
}


export default VueRouter

