// 模板
<template>
    <div>
        <h1>hello this is {{name}} 111111111</h1>
    </div>
</template>
// 脚本
<script>
export default {
    // 定义数据的方式和组件相同
    data() {
        return {
            name: 'Sy101',
            sex: 'nan'
        }
    },
    created() {
        console.log('this is sy102-created');
    }
}
</script>
// 样式
<style lang="scss" scoped>
    $color: purple;
    h1 {
        color: $color;
        &:hover {
            color: rgb(40, 231, 126);
        }
    }
</style>