//引入vue
import Vue from 'vue';
//全局生命指令
// Vue.directive('bmHtml', {
//     //绑定指令
//     bind(el, binding, vnode) {
//         // console.log(arguments);
//         // console.log(1);
//         el.innerHTML = binding.value
//     },
//     //页面渲染
//     inserted(el, binding, vnode) {
//         console.log(arguments);
//         // console.log(2);
//     },
//     //更新数据
//     update(el, binding, vnode) {
//         console.log(arguments);
//         // console.log(3);
//         el.innerHTML = binding.value
//     },
//     //更新视图
//     componentUpdated(el, binding, vnode) {
//         console.log(arguments);
//         // console.log(4);
//     },
//     //解绑
//     unbind(el, binding, vnode) {
//         console.log(arguments);
//         // console.log(5);
//     }
// })



//构建应用
let app = new Vue({
    el: '#app',
    data: {
        title: '<i>大头儿子小头爸爸</i>'
    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {
        togo() {

        }
    },
    //局部定义指令
    directives: {
        // bmHtml: {
        //     //但是这个指令中的 方法都是一样的，我们用下面的函数代替他们
        //     bind(el, binding) {
        //         // console.log(9999);
        //         el.innerHTML = binding.value
        //     },
        //     update(el, binding) {
        //         el.innerHTML = binding.value
        //     }
        // },
        //函数
        bmHtml(el, binding) {
            el.innerHTML = binding.value
        }
    }
})

// console.log(app);