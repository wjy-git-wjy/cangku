//创建服务器
const express = require('express');
//引入ejs
const ejs = require('ejs');
//引入fs模块
const fs = require('fs');
//构建应用
const app = express();

//引入服务器渲染器
const { createBundleRenderer } = require('vue-server-renderer');
//引入json文件
const bundle = require('./bundle/vue-ssr-server-bundle.json');

//创建渲染器.传递数据
const render = createBundleRenderer(bundle, {
    //设置html模板------编译后的文件
    template: fs.readFileSync('./view/index.html', 'utf-8')
})

//更改ejs后缀
app.engine('.html', ejs.__express);
//静态化目录
app.use('/static/', express.static('./static'))
    //渲染页面
app.get('*', (req, res) => {

    //放置一个对象，可以传数据
    render.renderToString({
            hobby: '我是爱好',
            title: '<b>i  love  miss</b>'
        })
        .then(html => res.end(html))
        .catch(err => console.log(222, err))
})



//端口
app.listen(3000, () => {
    console.log('服务器运行了');
})