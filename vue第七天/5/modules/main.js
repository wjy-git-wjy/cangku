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
        console.log('this is  mixin');
    }
})


//构建应用
const app = new Vue({

    //渲染
    render: h => h(App)
}).$mount('#app')