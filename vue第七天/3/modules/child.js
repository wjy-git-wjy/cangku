//引入vue
import Vue from 'vue';



//创建自定义组件
export default Vue.extend({
    //模板
    template: `
    <h1 style="color:purple">我是自定义组件child</h1>
    `,
    //数据
    created() {
        console.log(this.$http);
    }
})