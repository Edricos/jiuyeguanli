<template>
    <div style="margin-top: 20px">
        <el-form ref="form" :model="form" label-width="130px">
            <el-form-item label="姓名">
                <el-input v-model="form.stu.name"></el-input>
            </el-form-item>
            <el-form-item label="学校">
                <el-input v-model="form.stu.school"></el-input>
            </el-form-item>
            <el-form-item label="学院">
                <el-input v-model="form.stu.college"></el-input>
            </el-form-item>
            <el-form-item label="年级">
                <el-input v-model="form.stu.grade"></el-input>
            </el-form-item>
            <el-form-item label="专业">
                <el-input v-model="form.stu.major"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
                <el-input v-model="form.stu.birth"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="form.stu.sex"></el-input>
            </el-form-item>
            <el-form-item label="个人简介">
                <el-input type="textarea" v-model="form.stu.resume"></el-input>
            </el-form-item>

            <el-form-item label="评语">
                <el-input type="textarea" v-model="form.reply"></el-input>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmitApprove">{{submit1}}</el-button>
                <el-button type="primary" @click="onSubmitRefuse">{{submit2}}</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
        <br><br><br><br><br>
    </div>
</template>
<script>
    import {post} from "../../../utils/request";
    export default {
        data() {
            return {
                form: {},
                submit1:'通过',
                submit2:'不通过',
                changeId:{
                    id:0,
                    reply:''
                }
            }
        },
        methods: {
            onSubmitApprove() {
                //    提交审核信息
                const this_=this
                this.changeId.id=this.form.id
                this.changeId.reply=this.form.reply
                post('/inc/passIn',this.changeId)
                //    返回上一页
                setTimeout(function (){
                    this_.$router.back()
                }, 300);
            },
            onSubmitRefuse(){
                const this_=this
                this.changeId.id=this.form.id
                this.changeId.reply=this.form.reply
                post('/inc/refuseIn',this.changeId)

                setTimeout(function (){
                    this_.$router.back()
                }, 300);
            },
            cancel(){
                this.$router.back()
            },
        },
        mounted(){
            const this_=this
            this.changeId.id=this.$route.params.id
            //请求数据
            const content=post('/inc/aInterviewstu',this.changeId)
            content.then(
                function (res){
                    this_.form=res
                }
            )
        }
    }
</script>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>