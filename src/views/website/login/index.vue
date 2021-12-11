<template>
    <div class="login">
<!--        登录页面-->
        <div class="login-weaper">
<!--            登录左边页面-->
            <div class="login-left">
<!--                时间-->
                <div class="login-time">{{ time.txt }}</div>
                <div class="login-left-box">
                    <div>
                        <div class="logo">就业管理系统</div>
                        <h2 class="title">@梦想启航</h2>
                        <div class="msg">
                            <div class="msg-author">
                                <span>{{ quotations.name }}</span>
                                <span>{{ quotations.comeFrom }}</span>
                            </div>
                            <div class="msg-txt">{{ quotations.content }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="login-right">
                <div class="login-main">
<!--                    标题-->
                    <h4 class="login-title">就业管理系统</h4>
<!--                    表单-->
                    <el-form class="el-form login-form">
                        <el-form-item style="margin-left: 0px" prop="userName">
                            <el-input
                                    type="text"
                                    placeholder='用户名: admin'
                                    prefix-icon="el-icon-user"
                                    v-model="ruleForm.username"
                                    clearable
                                    autocomplete="off"
                            >
                            </el-input>
                        </el-form-item>
                        <el-form-item style="margin-left: 0px" prop="password">
                            <el-input
                                    type="password"
                                    placeholder='密码: 123456'
                                    prefix-icon="el-icon-lock"
                                    v-model="ruleForm.password"
                                    autocomplete="off"
                                    :show-password="true"
                            >
                            </el-input>
                        </el-form-item>
                        <el-form-item style="margin-left: 0px" prop="code">
                            <div class="el-row" span="24">
                                <div class="el-col el-col-16">
                                    <el-input
                                            type="text"
                                            maxlength="4"
                                            placeholder='请输入验证码'
                                            prefix-icon="el-icon-position"
                                            clearable
                                            autocomplete="off"
                                    ></el-input>
                                </div>
                                <div class="el-col el-col-8">
                                    <div class="login-code">
                                        <span class="login-code-img">1234</span>
                                    </div>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item style="margin: 40px 0px 0">
                            <el-button type="primary" class="login-submit" @click="submitForm" :loading="submit.loading">
                                <span>登 录</span>
                            </el-button>
                        </el-form-item>
                    </el-form>
<!--                    注册链接-->
                    <div class="login-menu">
                        <a href="javascript:;" @click="registers">用人单位注册</a>
                        <a href="javascript:;">忘记密码</a>
                    </div>
                </div>
            </div>
        </div>
<!--        粒子效果-->
        <div class="vue-particles">
            <vue-particles color="#dedede" shapeType="star" linesColor="#dedede" hoverMode="grab" clickMode="push" style="height: 100%"></vue-particles>
        </div>
    </div>
</template>

<script>
import { formatDate } from '@/utils/formatTime';
import { quotationsList } from './mock';
import {post} from "../../../utils/request";

export default {
  name: 'Login',
    data() {
      return{
          quotationsList,
          quotations: {},
          submit: {
              loading: false,
          },
          ruleForm: {
              username: 'qiye',
              password: '123',
          },
          // code: '1234',
          time: {
              txt: '',
              fun: null,
          },
      }
    },
    methods: {
        // 随机语录
        initRandomQuotations() {
            this.quotations = this.quotationsList[Math.floor(Math.random() * this.quotationsList.length)];
        },
        // 初始化左上角时间显示
        initTime() {
            this.time.txt = formatDate(new Date(), 'YYYY-mm-dd HH:MM:SS WWW QQQQ');
            this.time.fun = setInterval(() => {
                this.time.txt = formatDate(new Date(), 'YYYY-mm-dd HH:MM:SS WWW QQQQ');
            }, 1000);
        },
        // 登录按钮点击
         submitForm() {
            const this_=this
             const account=post('/user/login',this.ruleForm)
             account.then(
                 function (res){
                     if(res.classs=='undefined'){
                         alert("信息错误")
                         this_.$router.push("/login")
                     }
                     else if(res.classs=='inc'){
                         this_.$router.push("/enterprise")
                     }else if(res.classs=='admin'){
                         this_.$router.push("/teacher")
                     }else if(res.classs=='stu'){
                         this_.$router.push("/student")
                     }else {
                         alert("信息错误")
                         this_.$router.push("/login")
                     }
                     // console.log(res)
                 }
             )
        },


        registers(){
            this.$router.push('/register')
        }
    },

    created() {
        this.initTime();
    },
    mounted() {
        this.initRandomQuotations();
    },
    destroyed() {
        clearInterval(this.time.fun);
    }
}
</script>

<style scoped>
    .login {
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        /*position: relative;*/
    }
    .vue-particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(ellipse at top left, rgba(105, 155, 200, 1) 0%, rgba(181, 197, 216, 1) 57%);
    }
    .login-weaper {
        margin: 120px auto;
        height: 500px;
        display: flex;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        border: none;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }
    .login-left {
        width: 460px;
        padding: 20px;
        font-size: 16px;
        text-align:left;
        color: #fff;
        position: relative;
        background-color: rgba(64, 158, 255, 0.8);
        display: flex;
        flex-direction: column;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .login-time {
        width: 100%;
        color: #fff;
        opacity: 0.9;
        font-size: 14px;
        overflow: hidden;
    }
    .login-left-box {
        flex: 1;
        overflow: hidden;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        padding: 80px 45px;
    }
    .logo {
        font-size: 22px;
        margin-bottom: 15px;
    }
    .title {
        color: #fff;
        font-weight: 300;
        letter-spacing: 2px;
        font-size: 16px;
    }
    .msg {
        color: #fff;
        font-size: 13px;
        margin-top: 35px;
    }
    .msg-author {
        opacity: 0.6;

    }
    span:last-of-type {
        margin-left: 15px;
    }
    .msg-txt {
        margin-top: 15px;
        line-height: 22px;
    }
    .login-right {
        width: 460px;
        padding: 20px;
        position: relative;
        align-items: center;
        display: flex;
        background-color: rgba(255, 255, 255, 1);
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .login-main {
        margin: 0 auto;
        width: 70%;
    }
    .login-title {
        color: #333;
        margin-bottom: 40px;
        font-weight: 500;
        font-size: 22px;
        text-align: center;
        letter-spacing: 4px;
    }

    .login-form {
        margin: 10px 0;}

    i {
        color: #333;
    }
    .el-form-item {
        margin-bottom: 20px !important;}
    .login-code {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0 0 0 10px;
        user-select: none;}
    .login-code-img {
        margin-top: 2px;
        width: 100px;
        height: 38px;
        border: 1px solid #dcdfe6;
        color: #333;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 5px;
        line-height: 38px;
        text-indent: 5px;
        text-align: center;
        cursor: pointer;
        transition: all ease 0.2s;
        border-radius: 4px;}
    .login-code-img hover {
         border-color: #c0c4cc;
         transition: all ease 0.2s;
     }
    .login-submit {
        width: 100%;
        height: 45px;
        letter-spacing: 2px;
        font-weight: 300;
    }
    .login-menu {
        margin-top: 30px;
        width: 100%;
        text-align: left;}
    a {
        color: #999;
        font-size: 12px;
        margin: 0 8px;
        text-decoration: none;}
    a:hover {
         color: #1e9fff;
         text-decoration: underline;
     }
</style>
