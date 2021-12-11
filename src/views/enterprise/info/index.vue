<template>
    <div style="margin-top: 20px">
        <el-form ref="form" :model="form" label-width="130px">
            <el-form-item label="企业名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="社会统一信用代码">
                <el-input v-model="form.unicode"></el-input>
            </el-form-item>
            <el-form-item label="负责人">
                <el-input v-model="form.charger"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="form.tel"></el-input>
            </el-form-item>
            <el-form-item label="电子邮件">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="公司规模">
                <el-input v-model="form.scale"></el-input>
            </el-form-item>
            <el-form-item label="行业类型">
                <el-input v-model="form.trades"></el-input>
            </el-form-item>
            <el-form-item label="企业简介">
                <el-input type="textarea" v-model="form.intro"></el-input>
            </el-form-item>
            <el-form-item label="营业执照">
                <el-input type="textarea" v-model="form.bl"></el-input>
            </el-form-item>

            <el-form-item label="审核记录">
                <el-input type="textarea" v-on="form.note"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmitApprove">{{submit1}}</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {post} from "../../../utils/request";
    export default {
        data() {
            return {
                form: {
                    name: '',
                    unicode:'',
                    charger:'',     //负责人
                    tel:'',
                    intro:'',       //简介
                    bl:'',          //营业执照
                    note:'',        //备注
                    trades:'',      //行业类型
                    scale:'',       //行业规模
                    email:'',       //电子邮件

                },
                submit1:'保存并修改',
                imageUrl: '',
            }
        },
        methods: {
            onSubmitApprove() {
                //    提交审核信息
                post('inc/change',this.form)
                //    返回上一页
                this.$router.push('/enterprise')
            },
            cancel(){
                this.$router.back()
            },
            handleAvatarSuccess(res, file) {
                console.log('上传成功')
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                console.log('上传前')
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    console.log('jpg')
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    console.log('2M')
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        },
        mounted(){
            const this_=this
            const content=post('/inc/prechange')
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