<template>
    <el-row class="home" :gutter="10">
<!--        左侧-->
        <el-col :span="8" style="margin-top: 20px">
<!--            管理员信息-->
            <el-card shadow="hover" style="padding: 0px;margin-bottom: 20px">
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
<!--            <el-collapse v-model="activeNames" @change="handleChange">-->
<!--                <el-collapse-item title="代办任务" name="1" class="cards">-->
<!--                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>-->
<!--                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>-->
<!--                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>-->
<!--                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>-->

<!--                </el-collapse-item>-->
<!--            </el-collapse>-->
<!--            饼状图————统计简历收集情况 -->
            <el-card style="margin:20px 0px 0px; height: 312px;">
                <MyPie></MyPie>
            </el-card>
        </el-col>
        <!-- 右侧 -->
        <el-col :span="16" style="margin-top: 20px;margin-left: 0px;">

            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                <el-card>
                    <div>
                        <el-collapse-item title="单位" name="1" class="cards">
                            <div class="items">4777<br>总单位数</div>
                            <div class="items">785<br>本年度单位数</div>
                            <div class="items">4777<br>本年度岗位需求数</div>
                            <div class="items">500<br>本年度宣讲会数量</div>
                        </el-collapse-item>
                    </div>

                </el-card>
                <el-card>
                    <el-collapse-item title="学生" name="2" class="cards">
                        <div class="items">4491<br>毕业人数</div>
                        <div class="items">4448<br>激活人数</div>
                        <div class="items">4139<br>微信绑定人数</div>
                        <div class="items">3684<br>简历完成人数</div>

                </el-collapse-item>
                </el-card>
                <el-card>
                    <el-collapse-item title="代办事项" name="3" class="cards">
                        <div class="items">4<br><a href="http://localhost:8080/#/teacher/enterprise">单位审核</a></div>
                        <div class="items">3<br><a href="http://localhost:8080/#/teacher/recruit">招聘发布</a></div>
                        <div class="items">6<br><a href="http://localhost:8080/#/teacher/preach">宣讲审核</a></div>
                        <div class="items">8<br><a href="#">入校审批</a></div>

                </el-collapse-item>
                </el-card>
            </el-collapse>
            <!-- 线性图表 -->
            <el-card shadow="hover" style="height: 312px;margin-top:20px ">
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
                activeNames: ['1']

            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    };
</script>

<style scoped>
    .cards{
        /*margin-bottom: 10px;*/
        padding: 0;
        /*border: red solid;*/
    }
    .items{
        /*border: red solid;*/
        width: 20%;
        float: left;
        margin-left: 1%;
        margin-right: 4%;
        text-align:center
    }
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