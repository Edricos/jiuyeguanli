<template>
    <div class="main">
        <el-container>
            <!--            表头-->
            <el-header>
                    <MyHeader></MyHeader>
            </el-header>

            <!--            内容-->
            <el-main>
                <MyPicture></MyPicture>
                <MyContent></MyContent>
            </el-main>

            <!--                页尾-->
<!--            <MyFooter></MyFooter>-->
            <el-footer>
                <MyFooter></MyFooter>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import { formatAxis } from '@/utils/formatTime';
    import MyHeader from './MyHeader';
    import MyPicture from './MyPicture';
    import MyContent from './MyContent';
    import MyFooter from './MyFooter';
    export default {
        name: 'Main',
        components:{
            MyHeader,
            MyPicture,
            MyContent,
            MyFooter,
        },
        computed: {
            // 获取当前时间
            currentTime() {
                return formatAxis(new Date());
            }
        }
    }
</script>

<style scoped>

    .el-header {
        border:solid 1px green;
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        text-align: center;
        background: #fff;
    }
    .el-main {
        /*background-color: #E9EEF3;*/
        /*color: #333;*/
        /*text-align: center;*/
        /*line-height: 300px;*/
        /*border:solid 1px black;*/
        width: 100%;
        padding: 0;
        /*background:url(../assets/学校2.png) no-repeat center top*/
    }
    .el-footer {
        /*border:solid 1px blue;*/
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }

</style>