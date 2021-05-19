import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        msg: 0
    },
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
    //组件创建完毕
    created() {

    },
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
    created() {},

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

console.log('app---------', app);