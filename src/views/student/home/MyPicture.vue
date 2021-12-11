<template>
    <el-carousel :interval="3000" arrow="hover" height="400px">
        <el-carousel-item v-for="item,index in img" :key="index">
            <el-image :src="item.url" style="width: 100%;height: 100%"></el-image>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        data() {
            return {
                img: [
                    {
                        url:require('@/assets/学校1.png')
                    },
                    {
                        url:require('@/assets/学校2.png')
                    },
                    {
                        url:require('@/assets/学校3.png')
                    },
                    {
                        url:require('@/assets/学校4.png')
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>