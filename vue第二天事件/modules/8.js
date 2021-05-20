//引入vue
import Vue from 'vue';

import '../sass/2.scss'

//构建应用
let app = new Vue({
    el: '#app',
    data: {
        obj: {
            name: '后裔',
            jineng: '大鸟',
            zhanwei: '射手'
        },
        news: ["1国家卫健委派出专家组前往安徽", "2以军方致电加沙居民称导弹将炸你家", "3安徽确诊病例曾2次停留北京", "4网红主播在酒店水壶内撒尿", "5救援队断水驴友却烧水泡茶", "6民政部公布12个涉嫌非法社会组织", "7钟南山:全球通过疫苗免疫需2到3年", "8女子被婆家虐打致死公婆丈夫获刑", "9安徽合肥一地调整为中风险", "10钟南山晒自己接种新冠疫苗现场图"]
    },
    //method专门定义方法的，不仅仅科以給事件使用
    methods: {
        togo() {
            this.flag = (this.flag + 1) > 5 ? 1 : this.flag + 1
        }
    }
})

console.log(app);