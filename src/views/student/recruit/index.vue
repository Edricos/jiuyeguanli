<template>
    <div style="width: 80%;margin: 0 auto">
        <el-table
                :data="tableData.filter(data => data.classification=='线上'&&(!search ||
            JSON.stringify(data).toLowerCase().includes(search.toLowerCase())))"
                style="width: 100%"
                @row-dblclick="dbSelected">
            <!--        序号-->
            <el-table-column
                    label="序号"
                    type="index">
            </el-table-column>
            <el-table-column
                    label="单位全称"
                    prop="comname"
                    :show-overflow-tooltip='true'>
            </el-table-column>
            <el-table-column
                    label="标题"
                    prop="title"
                    :show-overflow-tooltip='true'>
            </el-table-column>
            <el-table-column
                    label="负责人"
                    prop="principal"
                    :show-overflow-tooltip='true'>
            </el-table-column>
            <el-table-column
                    label="电话"
                    prop="tel">
            </el-table-column>
            <el-table-column
                    label="发布时间"
                    prop="ctime">
            </el-table-column>
            <el-table-column
                    label="公司简介"
                    prop="intro"
                    :show-overflow-tooltip='true'>
            </el-table-column>

            <el-table-column>
                <!--            定义输入框-->
                <template slot="header">
                    操作
                </template>
                <!--            定义按钮-->
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="success"
                            @click="handleApprove(scope.$index, scope.row)">详情</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="apply(scope.$index, scope.row)">申请</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br><br><br><br><br>
    </div>
</template>

<script>
import {post} from "../../../utils/request";

export default {

    data() {
        return {
            tableData: [],
            ruleForm: {
                id:0,
                note:''
            },
            search: '',
            ids:[],
        }
    },
    methods: {
        handleApprove(index,row) {
            this.ruleForm.id=row.id
            //提交审核结果
            post('/admin/passPreach',this.ruleForm)
            //    刷新
            setTimeout(function (){
                window.location.reload();
            }, 300);
        },

        apply(index, row) {

            this.ruleForm.id=row.id
            //提交审核结果
            post('/stu/applyInterview',this.ruleForm)
            //    刷新
            setTimeout(function (){
                window.location.reload();
            }, 300);
        },

        clear() {
            this.search = '';
            const search=document.getElementById('sousuo');
            search.value='';
        },
        // 双击表格是查看详情，跳转页面
        dbSelected(row){
            this.$router.push({
                name: 'details-recruit-teacher',
                params:{id: row.id}
            })
        }
    },
    mounted(){
        //请求数据
        const this_=this
        const account=post('/admin/loadPreach')
        account.then(
            function (res){
                this_.tableData=res
            }
        )
        const account2=post('/stu/loadMyInPid')
        account2.then(
            function (res){
                this_.ids=res
            }
        )
    }


}
</script>

<style scoped>
    input {
        width: 140px;
        height: 15px;
        font-size: 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 5px;
    }
    input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }

</style>