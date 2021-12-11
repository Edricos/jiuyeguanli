<template>
    <div style="margin-top: 20px">
        <el-form ref="form" :model="form" label-width="130px">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="发布人">
                <el-input v-model="form.announcer"></el-input>
            </el-form-item>
            <el-form-item label="类别">
                <el-input v-model="form.category"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmitApprove">提交</el-button>
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
                    announcer:"",
                    content:'',
                    category:"",
                },
            }
        },
        methods: {
            onSubmitApprove() {
                const this_=this
                //    提交审核信息
                    post('/admin/addNotice',this.form)
                //    返回上一页
                setTimeout(function (){
                    this_.$router.back()
                }, 300);
            },

            cancel(){
                this.$router.back()
            },

        },


    }
</script>