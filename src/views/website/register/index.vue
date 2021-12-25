<template>
    <div class="login">
<!--        注册页面-->
        <div class="login-weaper">
            <div class="login-right">
                <div class="login-main">
                    <!--                    标题-->
                    <h4 class="login-title">用人单位注册</h4>
                    <!--                    表单-->
                    <el-form  :model="ruleForm" :rules="rules" ref="ruleForm" @keyup.enter.native="submitForm('ruleForm')" class="el-form login-form">
<!--                        用户名-->
                        <el-form-item style="margin-left: 0px" prop="userName">
                            <el-input
                                    type="text"
                                    placeholder='用户名'
                                    prefix-icon="el-icon-user"
                                    v-model="ruleForm.userName"
                                    clearable
                                    autocomplete="off"
                            >
                            </el-input>
                        </el-form-item>
<!--                        输入密码-->
                        <el-form-item style="margin-left: 0px" prop="password">
                            <el-input
                                    type="password"
                                    placeholder='密码'
                                    prefix-icon="el-icon-lock"
                                    v-model="ruleForm.password"
                                    autocomplete="off"
                                    :show-password="true"
                            >
                            </el-input>
                        </el-form-item>
                        <span class="el-form-item__error" ref="tip2" style="display:none;color:#666;">密码安全等级：<span ref="level2"></span></span>
<!--                        再次输入密码-->
                        <el-form-item style="margin-left: 0px" prop="password2">
                            <el-input
                                    type="password"
                                    placeholder='确认密码'
                                    prefix-icon="el-icon-lock"
                                    v-model="ruleForm.password2"
                                    autocomplete="off"
                                    :show-password="true"
                            >
                            </el-input>
                        </el-form-item>
<!--                        验证码-->
                        <el-form-item style="margin-left: 0px" prop="code">
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
                        </el-form-item>

<!--                        注册按钮-->
                        <el-form-item style="margin: 0px">
                            <el-button type="primary" class="login-submit" @click="submitForm('ruleForm')">
                                <span>注 册</span>
                            </el-button>
                        </el-form-item>
                    </el-form>
                    <!--                    注册链接-->
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

import {post} from "../../../utils/request";
import SIdentify from "@/utils/identify";   //验证码组件

export default {

  name: 'Register',
    components: {
        SIdentify: SIdentify
    },
    data() {
        // //用户名输入规则
        // let validUsername = (rule, value, callback) => {
        //     alert(value)
        //     if(value === undefined || value === ''){
        //         callback(new Error('用户名不能为空！'));
        //     }
        // };

        //重复密码规则
        let validatePass2 = (rule, value, callback) => {
            if(value === ''){
                callback(new Error('请再次输入密码！'));
            }else if(value!==this.ruleForm.password){
                callback(new Error('两次密码不一致！'));
            }else {
                callback()
            }
        };
        //验证验证码
        let validCode = (rule, value, callback) => {

            if(value === undefined || value === ''){
                callback(new Error('请输入验证码！'));
            }else if(value.toLowerCase()!==this.identifyCode.toLowerCase()){
                callback(new Error('验证码不正确！'));
            }else {
                callback()
            }
        };
        //密码规则
        let validatePass = (rule, value, callback) => {
           if (value === '') {
               callback(new Error('请输入密码！'));
           }else {
               callback()
           }
        };

        return{
            identifyCode:"",      //真实验证码
            identifyCodes:'abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',     //验证码库
            state:false,
          //注册信息
            ruleForm:{
              userName:'',
              password:'',
              password2:'',
              telephone:'',
              code: '',
          },
          rules: {
              userName: [
                  { required: true, message:'请输入用户名！', trigger: ["blur",'change'] }
              ],
              password: [
                  { required: true, validator: validatePass, trigger: ["blur",'change'] }
              ],
              password2: [
                  { required: true, validator: validatePass2, trigger: ["blur",'change'] }
              ],
              code: [
                  { required: true, validator: validCode, trigger: ["blur",'change'] }
              ],
          },


      }
    },
    methods: {
        submitForm(ruleForm) {
            //提交表单时校验
            this.$refs[ruleForm].validate(valid => {
                if (valid) {
                    post('stu/change',this.ruleForm)
                } else {
                    //更新验证码
                    this.refreshCode()
                    return false
                }
            })
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
    mounted() {
        //验证码
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
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
