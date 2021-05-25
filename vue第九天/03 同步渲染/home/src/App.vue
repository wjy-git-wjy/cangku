<template>
    <div id="app">
        <h1>my vue</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
//实现组件挂载
//引入home、about组件
import Home from '@/views/Home'
import About from '@/views/About'
export default {
    //注册组件
    components:{
        Home,
        About
    }
}
</script>

