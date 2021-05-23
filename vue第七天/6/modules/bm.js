//这是自定义插件

//引入axios
import axios from 'axios';

export default {
    install(Vue, ...args) {
        //第一个参数为Vue
        //添加一个属性
        Vue.classname = 'sy111',
            //增加一个指令
            Vue.directive('bm', () => {
                console.log('99999999999999999999999999999');
            });
        //增加过滤器
        Vue.filter('bm', () => {
            return '辣鸡-过滤器'
        })
        Vue.prototype.$http = axios
    }
}