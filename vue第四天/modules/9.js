//引入vue
import Vue from 'vue';


// 第二个组件
const sy101 = Vue.extend({
    template: `
        <div>
        <h1>{{title}}</h1>
        <input type="" v-model="title">
        </div>
    `,
    data() {
        return {
            address: '空岛',
            jineng: '1亿伏电能',
            title: '海贼王'
        }
    },
    //子组件创建完毕
    created() {
        //触发父组件的自定义事件
        this.$parent.$emit('kamida', this.title, '干了兄弟们')
    },

    //检测数据
    watch: {
        title(...args) {
            this.$parent.$emit('kamida', this.title);
        }
    }
})



//构建应用
let app = new Vue({
    el: '#app',
    data: {
        title: '刺客五六七',
        // flag: true,
        com: 'sy101'
    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {

    },
    //局部注册
    components: {
        sy101
    },

    //父组件创建完毕
    created() {
        //父组件自定义事件
        this.$on('kamida', (value) => {
            // console.log(value);
            this.title = value
        })
    }

})

// console.log(app);