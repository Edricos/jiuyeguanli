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
                        <el-form-item style="margin-left: 0px;margin-bottom: 0px;" prop="code">
                            <div class="el-row" span="24">
                                <div class="el-col el-col-16">
                                    <el-input
                                            type="text"
                                            maxlength="4"
                                            placeholder='请输入验证码'
                                            prefix-icon="el-icon-position"
                                            v-model="ruleForm.code"
                                            clearable
                                            autocomplete="off"
                                    ></el-input>
                                </div>
<!--                                验证码-->
                                <div class="el-col el-col-8">
                                    <div class="login-code" @click="refreshCode">
                                        <SIdentify :identifyCode="identifyCode" class="login-code-img"></SIdentify>
                                    </div>
                                </div>
                            </div>
                            <div style="padding: 0;margin: 0;font-size: 3px;height:10px;line-height:10px">
                                <p v-show="showCode" style="color: red">验证码有误</p>
                            </div>
                        </el-form-item>

                        <el-form-item style="margin: 20px 0px 0">
                            <div style="padding: 0;margin-bottom: 3px;font-size: 3px;height:10px;line-height:10px">
                                <p v-show="showError" style="color: red">用户名或密码错误！</p>
                            </div>
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
import SIdentify from "@/utils/identify";   //验证码组件
import { mapMutations } from 'vuex';        //处理token

export default {
    name: 'Login',
    components: {
        SIdentify: SIdentify
    },
    data() {
      return{
          userToken:'',         //存储token
          showCode:false,       //展示验证码错误
          showError:false,
          quotationsList,
          quotations: {},
          identifyCode:"",      //真实验证码
          identifyCodes:'abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',     //验证码库
          submit: {
              loading: false,
          },
          ruleForm: {
              username: '',
              password: '',
              code:''
          },
          time: {
              txt: '',
              fun: null,
          },
      }
    },
    methods: {
        //添加token方法
        ...mapMutations(['changeLoginStudent','changeLoginTeacher','changeLoginEnterprise']),
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
            //验证验证码是否正确
            if(this.identifyCode.toUpperCase()!=this.ruleForm.code.toUpperCase()){
                this.showCode=true
                return
            }else {
                this.showCode=false
            }
            // 提交表单数据
            const this_=this
             const account=post('/user/login',this.ruleForm)
             account.then(
                 function (res){
                     // this_.userToken = 'Bearer ' + res.data.data.body.token;
                     // // 将用户token保存到vuex中
                     // this_.changeLogin({ Authorization: this_.userToken });


                     if(res.account.classs=='inc'){
                         console.log('企业端')
                         this_.userToken=res.token
                         this_.changeLoginEnterprise({ AuthorizationEnterprise: this_.userToken });
                         this_.$router.push("/enterprise")
                     }else if(res.account.classs=='admin'){
                         console.log('教师端')
                         this_.userToken=res.token
                         this_.changeLoginTeacher({ AuthorizationTeacher: this_.userToken });
                         this_.$router.push("/teacher")
                     }else if(res.account.classs=='stu'){
                         console.log('学生端')
                         this_.userToken=res.token
                         this_.changeLoginStudent({ AuthorizationStudent: this_.userToken });
                         this_.$router.push("/student")
                     }else {
                         console.log('账号密码错误')
                         this_.showError=true
                         return
                     }
                 }
             )

        },
        //注册
        registers(){
            this.$router.push('/register')
        },
        //验证码
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                    ];
            }
        },
    },

    created() {
        this.initTime();
    },
    mounted() {
        this.initRandomQuotations();
        //验证码
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
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
