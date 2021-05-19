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
        addNum(state) {
            state.msg += 5
                // console.log(arguments);
        },
        reduceNum(state) {
            state.msg -= 2
        },
        resetNum(state) {
            state.msg = 0
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
        //key 		表示子组件的名称
        //value		就是子store对象
        child1: {
            state: {
                msg: 10000,
            },
            mutations: {
                addNum(state) {
                    state.msg += 50
                        // console.log(arguments);
                },
                reduceNum(state) {
                    state.msg -= 10
                },
                resetNum(state) {
                    state.msg = 0
                }
            },

        }
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


//第二个子组件
const child2 = Vue.extend({
    //模板
    template: "#tpl2",
    data() {
        return {
            num: 0
        }
    },
    watch: {
        msg() {}
    },

})




let app = new Vue({
    store,
    el: '#app',
    data: {
        title: 0
    },
    //局部注册组件
    components: {
        child1,
        child2
    },
    methods: {
        resetNum() {
            setTimeout(() => {
                this.$store.commit('resetNum')
            }, 2000)
        }
    },
    created() {

    },
})

// console.log('app---------', app);

//插件调用
store.subscribe((...args) => {
    console.log(...args);
})