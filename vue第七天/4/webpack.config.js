module.exports = {
    resolve: {
        // 扩展名
        // extensions: ['.js', '.scss', '.es', '.css', '.less'],
        extensions: ['.js', '.es', '.vue'],
        // 配置别名
        alias: {
            //     // 注意此时的 '/'为E盘
            // vue$: '/node_modules/vue/dist/vue.js'
            vue$: '/node_modules/vue/dist/vue.js'
        }
    },
    //入口
    entry: {
        "main": "./modules/main.js",
    },
    // 出口
    output: {
        // 输出目录改为当前目录
        path: __dirname,
        filename: "[name].js"
    },
    //配置
    module: {
        //规则
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            //scss
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            //vue
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    mode: 'development'
}