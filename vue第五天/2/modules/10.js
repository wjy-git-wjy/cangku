//                                                                                  实现        "子向父传,  父向子传"

//引入vue
import Vue from 'vue';

// 定义组件
const component1 = Vue.extend({
    props: {
        name: [Number, String]
    },
    //模板
    template: `
        <div>
            <!-- 子组件 -->
            <h1>{{name}}</h1>
            <input type="" v-model="name">
        </div>
    `,
    //数据
    data() {
        return {
            admin: '路飞'
        }
    },
    //创建完成
    created() {
        //触发自定义事件,并传参
        this.$parent.$emit('defa', this.admin)
    },
    //检测数据
    watch: {
        admin(value) {
            this.$parent.$emit('defa', this.admin);
        }
    }

})

//构建应用
let arr = new Vue({
    //视图
    el: '#app',
    data: {
        title: '雷神',
        child: 'component1',
        // admin: ''
    },
    //局部注册
    components: {
        component1
    },
    //创建完成
    created() {
        //绑定自定义事件
        this.$on('defa', (value) => {
            this.title = value
        })
    }
})