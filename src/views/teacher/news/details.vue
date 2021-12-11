<template>
    <div style="margin-top: 20px">
        <el-form ref="form" :model="form" label-width="130px">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="form.writer"></el-input>
            </el-form-item>
            <el-form-item label="类别">
                <el-input v-model="form.category"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmitApprove">保存并提交</el-button>
                <el-button type="primary" @click="onSubmitRefuse">删除</el-button>
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
                    title: '',
                    writer:"",
                    content:'',
                    category:"",
                },
                changeId:{
                    id:0
                }
            }
        },
        methods: {
            onSubmitApprove() {
                //    提交审核信息
                // post('/admin/addNews',this.form)
                //    返回上一页
                const this_=this
                setTimeout(function (){
                    this_.$router.back()
                }, 300);
            },
            onSubmitRefuse() {
                const this_=this
                post('/admin/delNews',this.changeId)
                setTimeout(function (){
                    this_.$router.back()
                    // window.location.reload();
                }, 300);

            },
            cancel(){
                this.$router.back()
            },
        },
        mounted(){
            const this_=this
            this.changeId.id=this.$route.params.id
            //添加表单数据,向服务器请求数据
            const accounts=post('/index/aNews',this.changeId)
            accounts.then(
                function (res){
                    this_.form=res
                }
            )
        }
    }
</script>