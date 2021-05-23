//引入vue
import Vue from 'vue';
//引入axios
import axios from 'axios'
// console.log(axios);//是一个函数,作用是发送异步请求,axios实现了promise规范,因此我们可以用then、catch接受数据



//创建自定义组件
const child = Vue.extend({
    //模板
    template: `
    <h1 style="color:purple">我是自定义组件child</h1>
    `,
    //数据
})

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
        //发送ajax请求 (get请求)可以携带query数据
        axios.get('/data/data.json?msg=gethelp&hobby=sleep&eat=apple', {
                //设置query数据,这个query数据不会覆盖上面的的query数据，是追加到后面
                params: {
                    drink: 'juse',
                    cake: 'chocket',
                    eat: '222'
                }
            })
            .then(({ data }) => {
                this.msg = data.name
            })
            .catch(err => console.log(err))



        //发送axios的post请求
        axios.post('/data/data.json?msg=posthelp', { truemsg: 'body体中的数据', status: '成功' }, {
                params: {
                    name: 111,
                    sex: 'nv'
                }
            })
            //成功的消息
            .then(res => console.log(res))
            //失败的消息
            .catch(err => console.log(err))
    }
})