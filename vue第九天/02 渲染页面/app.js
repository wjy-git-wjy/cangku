//构建服务器
const express = require('express');

//构建应用
const app = new express();

//引入ejs
const ejs = require('ejs')

//引入fs模块
const fs = require('fs');

//引入vue.js模块
const vueApp = require('./vue');

//引入服务器端渲染器的插件
const { createRenderer } = require('vue-server-renderer')

//构建渲染器
const renderer = new createRenderer({
    //设置html模板
    template: fs.readFileSync('./views/vue.html', 'utf-8')
})

//更改ejs后缀
app.engine('.html', ejs.__express);


//渲染页面
app.get('/', (req, res) => {
    renderer.renderToString(vueApp)
        .then(html => res.end(html))
        .catch(err => console.log(err))
})


//监听端口
app.listen(3000, () => {
    console.log('3000端口号 "服务器" 运行了~');
})