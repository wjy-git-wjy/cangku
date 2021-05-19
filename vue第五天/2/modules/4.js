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


})


let app = new Vue({
    el: '#app',
    data: {
        title: '啊哈哈'
    },
    //局部注册组件
    components: {
        child1,
    },

})