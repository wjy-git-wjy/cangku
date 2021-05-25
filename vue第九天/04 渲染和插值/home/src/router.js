//引入路由
import Router from 'vue-router';

//引入vue
import Vue from 'vue';

//引入两个组件
import Home from '@/views/Home'
import About from '@/views/About'

//安装路由
Vue.use(Router);

//定义路由规则
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]

//实例化路由对象
const router = new Router({
    routes
})

//暴露接口
export default router;