<template>
    <div id="app">
        <h1>我是app{{msg}}</h1>
        <h1>我是app{{num}}</h1>
        <child></child>

        <demo></demo>
    </div>
</template>



<script>
import Vue from 'vue';


//引入child
import child from './child'
import demo from './demo';
export default {
    data(){
        return {
            msg:222222
        }
    },
    components:{child,demo},
    created(){
        // console.log('this is app');
        // console.log(this);
    }
}
</script>

<style>

</style>