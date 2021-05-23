import Vue from 'vue';


//引入axios 
import axios from 'axios';

//引入child组件
import child from './child'

//全局挂载组件
Vue.component(
    'child', child
)

//创建vue实例化对象
let app = new Vue({
    //视图
    el: '#app',
    //模型
    data: {

    },

})