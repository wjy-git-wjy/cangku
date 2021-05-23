<template>
    <div id="app">
        <h1>我是app{{msg}}</h1>
        <child></child>
    </div>
</template>



<script>
import Vue from 'vue';
//实现异步加载(实际上并没有变成两个文件，还是一个文件)
Vue.component('child',()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            template:'<b>我是settimeout信息</b>'
        })
    },2000)
}))

//引入child
import child from './child'
export default {
    data(){
        return {
            msg:222222
        }
    },

}
</script>

<style>

</style>