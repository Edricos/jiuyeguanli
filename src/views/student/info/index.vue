<template>
    <div style="margin-top: 20px">
        <el-form ref="form" :model="form" label-width="130px">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="学校">
                <el-input v-model="form.school"></el-input>
            </el-form-item>
            <el-form-item label="学院">
                <el-input v-model="form.college"></el-input>
            </el-form-item>
            <el-form-item label="年级">
                <el-input v-model="form.grade"></el-input>
            </el-form-item>
            <el-form-item label="专业">
                <el-input v-model="form.major"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
                <el-input v-model="form.birth"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="form.sex"></el-input>
            </el-form-item>
            <el-form-item label="个人简介">
                <el-input type="textarea" v-model="form.resume"></el-input>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmitApprove">{{submit1}}</el-button>
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
                submit1:'保存并修改',
            }
        },
        methods: {
            onSubmitApprove() {
                //    提交审核信息
                post('stu/change',this.form)
                //    返回上一页
                this.$router.push('/student')
            },
            cancel(){
                this.$router.back()
            },
        },
        mounted(){
            const this_=this
            const content=post('/stu/preChange')
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