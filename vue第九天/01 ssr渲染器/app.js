//引用插件，服务器端引用渲染函数
const { createRenderer } = require('vue-server-renderer');

//引入vue
const Vue = require('vue');

//构建应用
const app = new Vue({
    template: `
    <div>
        <h1>我是vue的数据:{{msg}}</h1>
    </div>
    `,
    data: {
        msg: '干了兄弟们'
    }
})

//创建渲染器
const renderer = new createRenderer();

// console.log(renderer);

//将应用程序（组件）app传入到渲染器
renderer.renderToString(app)
    //他返回的是promise对象，因此我们可以连续大点
    .then(res => console.log(res))
    .catch(err => console.log(err))