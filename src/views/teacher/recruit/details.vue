<template>
    <div style="margin-top: 20px">
        <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label="企业全称">
                <el-input v-model="form.comname"></el-input>
            </el-form-item>
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

            <div v-show="form.classification=='线下'">
                <el-form-item label="宣讲时间" v-show="form.classification=='线下'">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.time" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="宣讲地点">
                    <el-input v-model="form.addr">s</el-input>
                </el-form-item>

                <el-form-item label="分配教室">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="b100">B100</el-checkbox>
                        <el-checkbox label="b101">B101</el-checkbox>
                        <el-checkbox label="b200">B200</el-checkbox>
                        <el-checkbox label="b205">B205</el-checkbox>
                        <el-checkbox label="b301" disabled>A301</el-checkbox>
                    </el-checkbox-group>
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

                <el-form-item label="分配面试间">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="b103">B103</el-checkbox>
                        <el-checkbox label="b104">B104</el-checkbox>
                        <el-checkbox label="b105">B105</el-checkbox>
                        <el-checkbox label="b106">B106</el-checkbox>
                        <el-checkbox label="b107">B107</el-checkbox>
                        <el-checkbox label="b108">B108</el-checkbox>
                        <el-checkbox label="b109">B109</el-checkbox>
                        <el-checkbox label="b100" disabled>B110</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </div>

            <el-form-item label="审核备注">
                <el-input type="textarea" v-model="form.note"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmitApprove">审核通过</el-button>
                <el-button type="primary" @click="onSubmitRefuse">审核不通过</el-button>
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
                    comname: '',
                    title:'',
                    principal:'',     //负责人
                    tel:'',
                    intro:'',
                    classification:"",
                    time:"",
                    addr:"",
                    envoyid:"",
                    interviewRoom:"",
                    note:"",

                },
                changeId:{
                    id:0
                },
                checkList: []
            }
        },
        methods: {
            onSubmitApprove() {
                const this_=this
                //    提交审核信息
                post('/admin/passPreach',this.form)
                //    刷新
                setTimeout(function (){
                    this_.$router.back();
                }, 300);
            },
            onSubmitRefuse() {
                const this_=this
                //    提交审核信息
                post('/admin/refusePreach',this.form)
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
            const account=post('/admin/loadAPreach',this.changeId)
            account.then(
                function (res){
                    res.envoyid=res.envoyid.toString()
                    this_.form=res
                }
            )
        }
    }
</script>