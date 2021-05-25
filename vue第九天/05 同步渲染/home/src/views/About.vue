<template>
    <h1>我是about组件------------>{{msg}}</h1>
</template>

<script>
export default {
    data(){
        return{
            msg:'孩子王'
        }
    }
}
</script>

<style lang="scss" scoped>
/* 引入scss */
@import './base.scss';
h1{
    background-color: $bg;
    color: $color;
}
</style>