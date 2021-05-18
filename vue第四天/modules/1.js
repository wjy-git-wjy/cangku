import Vue from 'vue';

//定义组件类
const child = Vue.extend({
    //模板
    template: `
   <div>
        <h1 style="color:red">我是子组件:{{title}}</h1>
        <input type="text" v-model="title">
   </div>   
    `,
    data() {
        return {
            title: '雷神'
        }
    },
    //组件创建完毕
    created() {
        //绑定自定义事件
        this.$on('eve', (...args) => {
            console.log(args);
        });

        this.$emit('eve', this.title)
    },
    //检测数据
    watch: {
        title() {
            this.$emit('eve', this.title)
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        child: 'child',
        title: '啊哈哈'
    },
    //局部注册组件
    components: {
        child
    },
    methods: {
        demo(value) {
            this.title = value
        }
    }
})