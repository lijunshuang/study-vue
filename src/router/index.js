
import Vue from 'vue'
// import Home from '../views/Home'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
// 配置
const routes = [
  {
    path:'/',
    name:'home',
    component:()=>import('../views/Home.vue')
  },
  {
    path:'/about',
    name:'about',
    component:()=>import('../views/About.vue'),
    meta:{
      auth:true // 需要守卫
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login.vue')
  },
  {
    path:'*',
    name:'404',
    component:()=>import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode:'history',
  // base:process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    // 判断是否登录，如果没有登录 跳转到登录页
    if(window.isLogin){
      next()
    }else{
      next(`/login?redirect=${to.fullPath}`)
    }
  }else{
    next()
  }
})





export default router