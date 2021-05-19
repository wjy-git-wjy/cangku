import Vue from 'vue';

//声明自定义组件
const child = Vue.extend({
    //接收数据
    props: ['demo'],
    //模板
    template: '#tpl',
    //数据
    data() {
        return {
            title: '子组件1:海贼王'
        }
    },
    //创建完成
    created() {
        this.demo(this.title)
    },
    //数据监测
    watch: {
        title() {
            this.demo(this.title)
        }
    }
})

//声明自定义组件
const son = Vue.extend({
    //接收数据
    props: ['flag'],
    //模板
    template: '#tmd',
    //数据
    data() {
        return {
            title: '子组件2:山贼王'
        }
    },
    //创建完成
    created() {

    },
    //数据监测
    watch: {
        flag() {
            this.title = this.flag
        }
    }
})

let app = new Vue({
    //视图
    el: '#app',
    //模型
    data: {
        title: '父组件的内容'
    },
    //方法
    methods: {
        xxoo(msg) {
            this.title = msg;
        }
    },
    //局部注册自定义组件
    components: {
        child,
        son
    }
})