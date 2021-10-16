import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import index from '../pages/index/index.vue'

const routes = [{
    path: '',
    component: () => import("../pages/index/index.vue"),
     redirect: '/topic',
  },
  {
    path: '/topic',
    component: () => import("../pages/index/index.vue")
  },
  {
    path: '/topic/:id', //动态路由
    name: 'detail',
    component: () => import('../pages/detail/index.vue'),
    props: true //开启props传参，把id传到子组件中去
  },
  {
    path: '/user/:loginname', //动态路由
    name: 'user',
    component: () => import('../pages/userDetail/index.vue'),
    props: true //开启props传参，把id传到子组件中去
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login/index.vue')
  }, 
  {
    path: '/api',
    name: 'Api',
    component: () => import('../pages/apiPage/index.vue')
  },

]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//抛出这个这个实例对象方便外部读取以及访问
export default router