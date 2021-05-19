import Vue from 'vue';

//1、引入路由
import Router from 'vue-router'
// console.log(Router);

//安装路由
Vue.use(Router);

//3、定义组件
let firse = {
    template: '#first',
    created() {
        // console.log('first', this);
    }
}
let second = {
    props: ['name', 'id', 'fullPath', 'sex', 'hash'],
    template: '#second',
    created() {
        console.log('second', name);
    }
}
let third = { template: '<h1>footer</h1>' }


//4、创建路由规则
//是一个数组，里面每一个是一个规则
const routes = [
    //静态路由
    { path: '/first', component: firse, name: 'first' },
    //动态路由 （规则path后面带 :）
    {
        path: '/second:xxoo',
        component: second,
        name: 'second',
        props(route) {
            console.log(arguments);
            return {
                name: route.name,
                id: route.params.id,
                fullPath: route.fullPath,
                sex: route.query.sex,
                hash: route.hash
            }
        }
    },
    //静态路由
    { path: '/third', component: third, name: 'third' },
    //路由重定向
    // { path: '/second', redirect: '/second/xxoo?name=zhangsan&sex=nv#top' },
    //默认路由
    { path: '*', component: { template: '<h1>laji</h1>' } }
]

//5、创建路由
const router = new Router({ routes })

let app = new Vue({
    //6、注册路由
    router,
    el: '#app',
    data: {


    },
})

// console.log(app);