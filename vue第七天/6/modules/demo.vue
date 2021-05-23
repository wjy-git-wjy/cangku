// 模板
<template>
    <div>this is demo data:{{name}}----{{sex}}</div>
</template>
// 脚本
<script>
import sy101 from './sy101';
export default {
    // 局部的混合
    mixins:[sy101,{
        data(){
            return {
                sex:'男'
            }
        }
    }],
    // 定义数据的方式和组件相同
    data() {
        return {
            sex: '女'
        }
    },
    created() {
        // console.log('this is demo-created');
    }
}
</script>
// 样式
<style>
    
</style>