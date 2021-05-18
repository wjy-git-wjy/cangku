//引入vue
import Vue from 'vue';

//定义自定义组件
const sy102 = Vue.extend({
    //模板
    template: '#tpl',
    //子组件数据
    data() {
        //返回值就是数据
        return {
            title: '爆裂gei八蛋',
            name: '刺客13'
        }
    }
})


// 第二个组件
const sy101 = Vue.extend({
    template: `
    <h1>sy101</h1>
    `,
})



//构建应用
let app = new Vue({
    el: '#app',
    data: {
        title: '此刻五六七',
        flag: true,
        com: 'sy102'
    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {
        togo() {
            this.com = this.com == 'sy101' ? 'sy102' : 'sy101'
        }
    },
    //局部注册
    components: {
        sy102,
        sy101
    }

})

console.log(app);