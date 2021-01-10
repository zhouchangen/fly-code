import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home/index')

Vue.use(VueRouter)

let pageRoutes = [
  // {  
  //   'path': '/',
  //   name:'logincheck',
  //   component: LoginCheck,
  //   alias: '/logincheck',
  //   meta: {
  //     title: '登录校验'
  //   }
  // },
  // {
  //   path: '/orderPay',
  //   name:'orderPay',
  //   component: Pay,
  //   meta: {
  //    isAuth: true,
  //    title:'订单支付'
  //   }
  // },
  {  
    'path': '/home',
    name:'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: '',
  routes: pageRoutes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '丰链云'
  next()
})

export default router
