import Vue from 'vue';

//定义组件类
const child1 = Vue.extend({
    props: ['gm1'],

    //模板
    template: "#tpl1",
    data() {
        return {
            title: '雷神'
        }
    },
    //组件创建完毕
    created() {
        console.log(this);
        this.gm1(this.title)
    },
    //检测数据
    watch: {
        title() {
            this.gm1(this.title)
        }
    },

})


//第二个子组件
const child2 = Vue.extend({
    props: ['msg'],
    //模板
    template: "#tpl2",
    data() {
        return {
            title: ''
        }
    },
    watch: {
        msg() {
            this.title = this.msg
        }
    }

})




let app = new Vue({
    el: '#app',
    data: {
        title: '啊哈哈'
    },
    //局部注册组件
    components: {
        child1,
        child2
    },
    methods: {
        demo(value) {
            this.title = value
        }
    }
})