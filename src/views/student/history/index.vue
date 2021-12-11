<template>
    <div style="width: 80%;margin: 0 auto">
        <el-table
                :data="tableData.filter(data => data)">
            <!--        序号-->
            <el-table-column
                    label="序号"
                    type="index">
            </el-table-column>
            <el-table-column
                    label="单位全称"
                    prop="comname">
            </el-table-column>
            <el-table-column
                    label="标题"
                    prop="preachname">
            </el-table-column>
            <el-table-column
                    label="招聘时间"
                    prop="time">
            </el-table-column>
            <el-table-column
                    label="招聘地点"
                    prop="addr">
            </el-table-column>
            <el-table-column
                    label="状态"
                    prop="status">
            </el-table-column>

<!--            <el-table-column>-->
<!--                &lt;!&ndash;            定义输入框&ndash;&gt;-->
<!--                <template slot="header">-->
<!--                   操作-->
<!--                </template>-->
<!--                &lt;!&ndash;            定义按钮&ndash;&gt;-->
<!--                <template slot-scope="scope">-->

<!--                    <el-button-->
<!--                            size="mini"-->
<!--                            type="danger"-->
<!--                            @click="handleDelete(scope.$index, scope.row)">撤回</el-button>-->
<!--                </template>-->
<!--            </el-table-column>-->
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
            search: ''
        }
    },

    mounted(){
        //请求数据
        const this_=this
        const account=post('/stu/loadMyInterview')
        account.then(
            function (res){
                this_.tableData=res
                console.log(this_.tableData)
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