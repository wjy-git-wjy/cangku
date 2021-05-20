//引入vue
import Vue from 'vue';

//引入sass
import '../sass/1.scss'

//构建应用
let app = new Vue({
    el: '#app',
    data: {

    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {
        eat(...args) {
            console.log('我会吃饭');
            console.log(args);
        },
        say() {
            console.log('我会说话');
        }
    }
})

console.log(app);