import Vue from 'vue';

//引入路由
import Router from 'vue-router';

//引入scss
import '../scss/6.scss'

//安装路由
Vue.use(Router);

//创建组件
let first = { template: '#first' }
let second = {
    template: '#second',
    props: ['xxoo'],
    created() {
        console.log(this.xxoo);
        console.log(this);
    }

}
let third = {
    template: '#third',
    props: ['fullPath', 'query']
}



//创建路由规则
let routes = [
    //静态路由
    {
        path: '/first',
        component: first,
        name: 'first',
    },
    //动态路由
    {
        path: '/second/:xxoo',
        component: second,
        name: 'second',
        props: true
    },
    //静态路由
    {
        path: '/third',
        component: third,
        name: 'third',
        props(route) {
            let { fullPath, query } = route;
            return { fullPath, query }
        }
    },
    //重定向
    { path: '/second', redirect: '/second/laji' },
    //默认路由
    { path: '*', component: { template: '<h1>我是默认路由</h1>' } }
]

//创建路由对象
let router = new Router({
    routes,
})

//创建vue实例化对象
let app = new Vue({
    //注册路由
    router,
    //视图
    el: '#app',
    //模型
    data: {

    }
})


// //全局的路由守卫
router.beforeEach((to, from, next) => {
    next()
})