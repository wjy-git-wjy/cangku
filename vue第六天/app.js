//引入express
let express = require('express');
//引入ejs
let ejs = require('ejs');

//构建应用
let app = new express();
//更改ejs文件后缀为html
app.engine('.html', ejs.__express);
//静态化
app.use('/dist/', express.static('./dist'))


//用户请求
app.get('*', (req, res) => {
    //无论什么请求，都给他渲染一个页面
    res.render('../4.html')
})


//监听端口
app.listen(80, () => {
    console.log('服务器运行了~~');
})