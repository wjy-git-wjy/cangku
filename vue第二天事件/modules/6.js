//引入vue
import Vue from 'vue';

import '../sass/2.scss'

//构建应用
let app = new Vue({
    el: '#app',
    data: {
        bg: 'red',
        color: ['black', 'black', 'black'],
        cursor: ['pointer', 'pointer', 'pointer']
    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {
        imgclick(idx) {
            let arr = ['black', 'black', 'black'];
            arr[idx] = 'red'
            this.color = arr;
            if (idx == 0) {
                this.cursor = ['pointer', 'pointer', 'pointer'];
            } else if (idx == 1) {
                this.cursor = ['not-allowed', 'pointer', 'pointer'];
            } else {
                this.cursor = ['not-allowed', 'not-allowed', 'pointer'];
            }
        }

    }
})

console.log(app);