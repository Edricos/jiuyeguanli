<template>
    <el-row class="home" :gutter="10">
<!--        左侧-->
        <el-col :span="8" style="margin-top: 20px">
<!--            管理员信息-->
            <el-card shadow="hover" style="padding: 0px">
                <div class="user" >
                    <img :src="userImg" />
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2021-12-4</span></p>
                    <p>上次登录地点：<span>南昌</span></p>
                </div>
            </el-card>
<!--            饼状图————统计简历收集情况 -->
            <el-card style="margin:20px 0px 0px; height: 312px;">
                <MyPie></MyPie>
            </el-card>
        </el-col>
        <!-- 右侧 -->
        <el-col :span="16" style="margin-top: 20px;margin-left: 0px;">
            <div class="num">
                <el-card
                        shadow="hover"
                        v-for="item in countData"
                        :key="item.name"
                        :body-style="{ display: 'flex', padding: 0 }"
                        class="cards"
                >
                    <i
                            class="icon"
                            :class="`el-icon-${item.icon}`"
                            :style="{ background: item.color }"
                    ></i>
                    <div class="detail">
                        <p class="num">{{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <!-- 审核状态 -->
            <el-card shadow="hover" style="height: 212px;margin-bottom: 20px;padding: 0">
                <div class="circle" style="margin-left: 8%">待提交</div>
                <div class="circle">审核中</div>
                <div class="circle">审核通过</div>
            </el-card>
            <!-- 线性图表 -->
            <el-card shadow="hover" style="height: 312px">
                <MyBar></MyBar>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    // 引入可视化图表组件
    import MyBar from './MyBar'
    import MyPie from './MyPie'
    import MyLine from './MyLine'
    export default {
        //注册可视化图表组件
        components:{
            MyBar,
            MyPie,
            MyLine
        },
        data() {
            return {
                userImg: require("@/assets/user.png"),
                //左下角图表
                tableData: [],

                countData: [
                    {
                        name: "签约总数",
                        value: 1024,
                        icon: "tickets",
                        color: "#5ab1ef",
                    },
                    {
                        name: "收集简历数",
                        value: 2468,
                        icon: "star-on",
                        color: "#ffb980",
                    },
                    {
                        name: "总访问量",
                        value: 6666,
                        icon: "success",
                        color: "#2ec7c9",
                    },
                ],

            };
        },
    };
</script>

<style scoped>
    .user {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }

    .name {
        font-size: 32px;
        margin-bottom: 10px;
    }
    .access {
        color: #999999;
    }

    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;
    }
    span {
        color: #666666;
        margin-left: 60px;
    }


    .cards {
        width: 32%;
        margin-bottom: 20px;
    }
    .icon {
        font-size: 30px;
        width: 80px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }
    .detail {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 24px;
        margin: 0 auto;
        padding: 0;
    }
    .txt {
        font-size: 24px;
        text-align: center;
        color: #999999;
        margin: 0 auto;
        padding: 0;
    }


    .graph {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    .circle{
        width:100px;
        height:100px;
        border-radius:50px;
        /*border:solid rgb(100,100,100) 1px;*/
        float: left;
        margin-right: 18%;
        margin-top: 35px;
        text-align: center;
        line-height: 100px;
        background: #b7b10e;
        color:white;
    }

</style>