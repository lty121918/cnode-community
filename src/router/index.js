//引入vue
import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用页面
import index from '../pages/index/index.vue'
//定义routes路由的集合，数组类型
const routes = [
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {
    path: '/',
    // name: 'index',
    component: index,
    redirect: '/topic',
    children:[
      {
        path: '/topic',
        // name: 'topic',
        component: () => import("../pages/index/amain/index.vue")
      },
      {
        path:'/topic/:id',//动态路由
        name:'detail',
        component: () => import('../pages/detail/index.vue'),
        props:true //开启props传参，把id传到子组件中去
      },
      {
        path:'/user/:loginname',//动态路由
        name:'user',
        component: () => import('../pages/userDetail/index.vue'),
        props:true //开启props传参，把id传到子组件中去
      },
    ]
  },
  {path: '/login',name: 'Login',component: () => import('../pages/login/index.vue')},
  {path: '/api',name: 'Api',component: () => import('../pages/apiPage/index.vue')},

  // {
  //   path:'/userdetail/:loginname',
  //   component:()=> import('../pages/userDetail/index.vue'),
  //   props:true //开启props传参，把id传到子组件中去
  // }


  // {path:'*',redirect:"index"},//可以配置重定向
  //{path:"",component:Home}//或者重新写个路径为空的路由
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

//抛出这个这个实例对象方便外部读取以及访问
export default router
