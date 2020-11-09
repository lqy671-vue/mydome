import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Category = () => import('../views/category/Category')

//安装插件
Vue.use(VueRouter)

const routes = [
  //配置映射关系
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  }
]

//创建路由对象
const router = new VueRouter({
  routes,
  mode:'history'
})

//导出路由
export default router
