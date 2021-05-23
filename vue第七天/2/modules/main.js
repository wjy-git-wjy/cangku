//引入vue
import Vue from 'vue';

//引入app
import App from './App'
console.log(App);

//构建应用
const app = new Vue({

    //渲染
    render: h => h(App)
}).$mount('#app')