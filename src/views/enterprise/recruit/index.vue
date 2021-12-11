<template>
    <div style="margin-top: 20px">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="招聘名称">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="负责人">
                <el-input v-model="form.principal"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="form.tel" :span="11"></el-input>
            </el-form-item>
            <el-form-item label="招聘简章">
                <el-input type="textarea" v-model="form.intro"></el-input>
            </el-form-item>
            <el-form-item label="招聘类型">
                <el-radio-group v-model="form.classification">
                    <el-radio label="线上" value="线上"></el-radio>
                    <el-radio label="线下" value="线下"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="宣讲时间" v-show="form.classification=='线下'">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.time" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="时间段">
                <el-radio-group v-model="form.time2">
                    <el-radio label='0'>9:30~11:30</el-radio>
                    <el-radio label='1'>14:30~16:30</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="校园大使" v-show="form.classification=='线下'">
                <el-radio-group v-model="form.envoyid">
                    <el-radio label='0'>需要</el-radio>
                    <el-radio label='-1'>不需要</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="面试间" v-show="form.classification=='线下'">
                <el-select v-model="form.interviewRoom" placeholder="请选择需求数量">
                    <el-option label="0 间" value="1"></el-option>
                    <el-option label="1 间" value="1"></el-option>
                    <el-option label="2 间" value="2"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{submit}}</el-button>
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
                    principal:'',   //负责人
                    tel:'',
                    classification:'',
                    time: '',
                    time2:'',           //默认上午
                    envoyid:'',       //校园大使
                    intro: '',       //招聘简章
                    comid:10,
                },
                submit:'提交申请',
                changeId:{
                    id:0
                }
            }
        },
        methods: {
            onSubmit() {
                if(this.submit=='提交申请'){
                    post('/inc/applyPreach',this.form)
                    this.$router.push('/enterprise/history')
                }else {
                    post('/inc/changePreach',this.form)
                    this.$router.back()
                }
            },
            cancel(){
                if(this.submit=='提交申请'){
                    this.$router.push('/enterprise')
                }else {
                    this.$router.push('/enterprise/history')
                }
            }
        },
        mounted(){
            const this_=this
            this.changeId.id=this.$route.params.id
            if(this.changeId.id!=undefined){
                this.submit='保存修改'
                //添加表单数据,向服务器请求数据
                const accounts=post('/inc/toChangePreach',this.changeId)
                accounts.then(
                    function (res){
                        console.log(res)
                        res.time2=res.time2.toString()
                        res.envoyid=res.envoyid.toString()
                        this_.form=res
                    }
                )
            }
        }
    }
</script>