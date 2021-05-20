//引入vue
import Vue from 'vue';

//构建应用
let app = new Vue({
    el: '#app',
    data: {
        title: '此刻五六七',
        flag: true
    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {
        togo() {
            this.flag = !this.flag
        }
    },

    //局部指令
    directives: {
        bmShow(el, binding, vnode) {
            // console.log(arguments);
            if (binding.value) {
                el.style.display = ''
            } else {
                el.style.display = 'none'
            }
        }
    }
})

console.log(app);