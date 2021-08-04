//引入vue
import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用页面
import index from '../pages/index/index.vue'
import allNews from '../pages/index/amain/allNews/index.vue'
import share from '../pages/index/amain/share/index.vue'
import good from '../pages/index/amain/good/index.vue'
//定义routes路由的集合，数组类型
const routes = [
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {
    path: '/',name: 'index',
    component: index,
    children:[
      {
        path:'',
        component:allNews
      },
      {
        path:'share',
        component:share
      },
      {
        path:'good',
        component:good
      }
    ]
  },
  // {path: '/about',name: 'About',component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  {path:'',redirect:"index"},//可以配置重定向
  //{path:"",component:Home}//或者重新写个路径为空的路由
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//抛出这个这个实例对象方便外部读取以及访问
export default router
