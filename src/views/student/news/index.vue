<template>
    <div class="main">
        <el-table
                :data="tableData.filter(data => {
                data.content=data.content.slice(0,6)
                return !search ||
            JSON.stringify(data).toLowerCase().includes(search.toLowerCase())})"
                style="width: 100%"
                @row-dblclick="dbSelected">
            <!--        序号-->
            <el-table-column
                    label="序号"
                    type="index">
            </el-table-column>
            <el-table-column
                    label="标题"
                    prop="title"
                    :show-overflow-tooltip='true'>
            </el-table-column>
            <el-table-column
                    label="类别"
                    prop="category"
                    :show-overflow-tooltip='true'>
            </el-table-column>
            <el-table-column
                    label="发布人"
                    prop="writer"
                    :show-overflow-tooltip='true'>
            </el-table-column>
            <el-table-column
                    label="发布时间"
                    prop="time">
            </el-table-column>
            <el-table-column
                    label="内容"
                    prop="content"
                    :show-overflow-tooltip='true'>
            </el-table-column>
        </el-table>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import {post} from "../../../utils/request";

export default {

    data() {
        return {
            tableData: [
                ],
            ruleForm: {
                id:10
            },
            search: ''
        }
    },
    methods: {
        dbSelected(row){
            //row为表单数据
            this.$router.push({
                name: 'details-news-student',
                params:{id: row.id}
            })
        },
    },
    mounted(){
        // post('/inc/preApply',this.ruleForm).
        const this_=this
        const account=post('/admin/allNews',this.ruleForm)
        account.then(
            function (res){
                this_.tableData=res
            }
        )
    }


}
</script>

<style scoped>
    .main{
        width: 80%;
        margin: 0 auto;
        /*border: 1px solid #ddd;*/
        border-radius: 2px;
        padding: 0px;
    }
    input {
        width: 160px;
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