//引入vue
import Vue from 'vue';

//引入app
import App from './App'
// console.log(App);

//全局混合
Vue.mixin({
    data() {
        return {
            num: 9999,
            msg: 'mixin'
        }
    },
    created() {
        // console.log('this is  mixin');
    }
})



//安装自定义插件------都是vue家族系列-------所以我们使用use
import custom from './bm'


//安装
Vue.use(custom, 1, 2, 3, 5)


console.log(Vue.$http);
//构建应用
const app = new Vue({

    //渲染
    render: h => h(App)
}).$mount('#app')

console.log(app);