import Vue from 'vue';

import Vuex from 'vuex';
//引入插件
import logger from 'vuex/dist/logger'
// console.log(logger);

Vue.use(Vuex);

let store = new Vuex.Store({
    //配置插件
    plugins: [logger()],
    //数据
    state: {
        msg: 0
    },
    //同步消息
    mutations: {
        setNum(state, v) {
            state.msg = v
        }

    },
    //计算属性数据
    getters: {
        doubleNum(state) {
            return state.msg * 2
        }
    },
    //modules模块切割
    modules: {

    }

})




//定义组件类
const child1 = Vue.extend({
    //模板
    template: "#tpl1",
    data() {
        return {
            title: '点一下增加5'
        }
    },
    //方法
    methods: {
        // addNum() {
        //     this.$store.commit('addNum', 1, 3)
        //     console.log(this);
        // }
    }

})






let app = new Vue({
    store,
    el: '#app',
    data: {},
    //局部注册组件
    components: {
        child1,
    },

    created() {

    },
    computed: {
        num: {
            //获得
            get() {
                return this.$store.state.msg
            },
            //设置
            set(v) {
                this.$store.commit('setNum', v)
            }
        }
    }
})

// console.log('app---------', app);

//插件调用
store.subscribe((...args) => {
    console.log(...args);
})