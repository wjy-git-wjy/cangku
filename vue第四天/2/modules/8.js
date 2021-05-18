//引入vue
import Vue from 'vue';


// 第二个组件
const sy101 = Vue.extend({
    // 接收消息
    props: {
        name: [String, Number],

    },

    template: `
        <div>
        <h1>{{name}}</h1>
        <input type="" v-model="name">
        </div>
    `,
    data() {
        return {
            lj: '小飞机',
        }
    }


})



//构建应用
let app = new Vue({
    el: '#app',
    data: {
        title: '刺客五六七',
        flag: true,
        com: 'sy101'
    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {

    },
    //局部注册
    components: {
        sy101
    }

})

console.log(app);