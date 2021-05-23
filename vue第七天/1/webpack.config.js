module.exports = {
    resolve: {
        // 扩展名
        // extensions: ['.js', '.scss', '.es', '.css', '.less'],
        extensions: ['.js', '.es'],
        // 配置别名
        alias: {
            //     // 注意此时的 '/'为E盘
            // vue$: '/node_modules/vue/dist/vue.js'
            vue$: '/node_modules/vue/dist/vue.js'
        }
    },
    //入口
    entry: {
        "1": "./modules/1.js",
        "2": "./modules/2.js",
        "3": "./modules/3.js",
        "4": "./modules/4.js",
        "5": "./modules/5.js",
    },
    // 出口
    output: {
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
            }
        ]
    },
    mode: 'development'
}