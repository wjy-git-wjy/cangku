<template>
    <div id="app">
        <h1>我是app{{msg}}</h1>
        <child></child>
    </div>
</template>



<script>

//引入child
import child from './child'
export default {
    data(){
        return {
            msg:222222
        }
    },
    //局部注册组件
    components:{child}

}
</script>

<style>

</style>