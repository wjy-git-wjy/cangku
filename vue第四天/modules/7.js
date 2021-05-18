//引入vue
import Vue from 'vue';

//定义自定义组件
const sy102 = Vue.extend({
    //模板
    template: '#tpl',
    //子组件数据
    data() {
        //返回值就是数据
        return {
            title: '爆裂gei八蛋',
            name: '刺客13'
        }
    },

    //钩子函数------生命周期

    //组件创建前，此时组件数据，事件等还没有被初始化。
    beforeCreate() {
        console.log('beforeCreate');
    },
    //组件创建后，此时组件已经初始化了数据和事件等。
    created() {
        console.log('created');
    },
    //组件构建前，此时组件确定了模板和容器元素。
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },

    //存在期
    //组件更新前，此时组件的数据已经更新，但是视图尚未更新
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    //组件更新后，此时组件的视图已经更新。
    updated() {
        console.log('update');
    },

    //销毁期
    // 组件销毁前，此时组件数据，事件等依然存在
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    //组件销毁后，此时数据监听器等已经被销毁了、
    destroyed() {
        console.log('destroyed');
    },

    //缓存期
    // 组件被激活（ 出现了）
    activated() {
        console.log('activated');
    },
    //组件被禁用（隐藏了）
    deactivated() {
        console.log('deactivated');
    }


})


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
            title: '小飞机'
        }
    }
})



//构建应用
let app = new Vue({
    el: '#app',
    data: {
        title: '此刻五六七',
        flag: true,
        com: 'sy102'
    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {
        togo() {
            this.com = this.com == 'sy101' ? 'sy102' : 'sy101'
        }
    },
    //局部注册
    components: {
        sy102,
        sy101
    }

})

console.log(app);