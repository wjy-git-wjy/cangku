//引入组件间通信的插件
import Vuex, { Store } from 'vuex';

//引入vue
import Vue from 'vue'

//安装vuex
Vue.use(Vuex)

// 暴露实例化对象store
export default new Store({
    //数据
    state: {
        title: '火影'
    }
})