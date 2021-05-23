//引入vue
import Vue from 'vue';
//引入axios
import axios from 'axios'
// console.log(axios);//是一个函数,作用是发送异步请求,axios实现了promise规范,因此我们可以用then、catch接受数据


//引入child
import child from './child'
//安装child
Vue.prototype.$http = axios

//构建应用
const app = new Vue({
    //注册自定义组件
    components: { child },
    //视图
    el: '#app',
    //模型
    data: {
        msg: ''
    },
    //创建完成
    created() {

        //发送ajax请求本地的文件
        this.$http('/data/xxoo.json')
            .then(({ data }) => {
                this.msg = data.name
                console.log(data);
            })
            .catch(err => console.log(err))
    }
})