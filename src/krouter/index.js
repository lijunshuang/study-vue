
import Vue from 'vue'
// import Home from '../views/Home'
// import VueRouter from 'vue-router';
import VueRouter from './k-router';

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
    component:()=>import('../views/About.vue')
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

export default router