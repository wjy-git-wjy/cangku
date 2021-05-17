//引入vue
import Vue from 'vue';

import '../sass/2.scss'

//构建应用
let app = new Vue({
    el: '#app',
    data: {
        flag: 1
    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {
        togo() {
            this.flag = (this.flag + 1) > 5 ? 1 : this.flag + 1
        }
    }
})

console.log(app);