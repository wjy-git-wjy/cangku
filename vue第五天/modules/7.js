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
const head1 = Vue.extend({
    //模板
    template: "#head",
    data() {
        return {
            title: '点一下增加5'
        }
    },
    //方法
    methods: {

    }

})
const main1 = Vue.extend({
    //模板
    template: "#main",
    data() {
        return {
            title: '点一下增加5'
        }
    },
    //方法
    methods: {

    }

})
const foot1 = Vue.extend({
    //模板
    template: "#foot",
    data() {
        return {
            title: '点一下增加5'
        }
    },
    //方法
    methods: {

    }

})





let app = new Vue({
    store,
    el: '#app',
    data: {
        child: 'head1',
    },
    //局部注册组件
    components: {
        head1,
        main1,
        foot1
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

let router = () => {
    app.child = location.hash.slice(1);
}


window.addEventListener('hashchange', router)

router()