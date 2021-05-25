//引入vue
const Vue = require('vue');
//构建应用
const app = new Vue({
    template: `
    <div>
        <h1 @click="demo">我是vue.js ====={{msg}}</h1>
    </div>
    `,
    data: {
        msg: '辣鸡'
    },
    methods: {
        demo() {
            console.log('我是vue.js的方法,我被点击了');
        }
    }
})


//暴露app组件
module.exports = app