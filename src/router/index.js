import Vue from 'vue'
// import Home from '../views/Home'
import VueRouter from 'vue-router';
import store from '../store'

Vue.use(VueRouter)
// 配置
const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      auth: true, // 需要守卫
      title:'登录'
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  // base:process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || ''
  if (to.meta.auth) {
    // 判断是否登录，如果没有登录 跳转到登录页
    if (store.isLogin) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  } else {
    next()
  }
})

// 全局守卫修改为：要求用户必须登录，否则只能去登录页
// router.beforeEach((to, from, next) => {
//   if (store.state.isLogin) {
//     if (to.path === '/login') {
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login?redirect=' + to.fullPath)
//     }
//   }
// })




export default router