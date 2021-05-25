//引入vue
import Vue from 'vue';

//引入App
import App from '@/App';

//引入路由
import router from '@/router'

//引入store
import store from '@/store'

//构建应用并暴露
export default new Vue({
    //注册组件
    router,
    store,
    //渲染
    render: h => h(App)
})