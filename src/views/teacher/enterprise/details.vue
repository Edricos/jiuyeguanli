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
            <el-form-item label="行业类型">
                <el-input v-model="form.trades"></el-input>
            </el-form-item>
            <el-form-item label="企业规模">
                <el-input v-model="form.scale"></el-input>
            </el-form-item>
            <el-form-item label="企业地址">
                <el-input v-model="form.addr"></el-input>
            </el-form-item>
            <el-form-item label="企业简介">
                <el-input type="textarea" v-model="form.intro"></el-input>
            </el-form-item>
            <el-form-item label="营业执照">
                <el-input type="textarea" v-model="form.bl"></el-input>
            </el-form-item>


            <el-form-item label="审核备注">
                <el-input type="textarea" v-model="form.note"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmitApprove">{{submit1}}</el-button>
                <el-button type="primary" @click="onSubmitRefuse">{{submit2}}</el-button>
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
                    bl:'',   //营业执照
                    note:'',        //备注
                    trades:'',      //行业类型
                    scale:'',       //行业规模
                    email:'',       //电子邮件
                    addr:'',
                    id:0            //企业id
                },
                submit1:'审核通过',
                submit2:'审核不通过',
                changeId:{
                    id:0
                }
            }
        },
        methods: {
            onSubmitApprove() {
                const this_=this
                //    提交审核信息
                post('/admin/activeCompany',this.form)
                //    刷新
                setTimeout(function (){
                    this_.$router.back();
                }, 300);
            },
            onSubmitRefuse() {
                const this_=this
                //    提交审核信息
                post('/admin/refuseCompany',this.form)
                //    刷新
                setTimeout(function (){
                    this_.$router.back();
                }, 300);
            },
            cancel(){
                this.$router.back()
            },
        },
        mounted(){
            const this_=this
            this.changeId.id=this.$route.params.id
            const account=post('/admin/loadACompany',this.changeId)
            account.then(
                function (res){
                    this_.form=res
                }
            )
        }
    }
</script>