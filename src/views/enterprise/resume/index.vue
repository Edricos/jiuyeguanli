<template>
    <el-table
            :data="tableData.filter(data => !search ||
            JSON.stringify(data).toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
            @row-dblclick="dbSelected">
<!--        序号-->
        <el-table-column
                label="序号"
                type="index">
        </el-table-column>
        <el-table-column
                label="姓名"
                prop="stu.name"
                :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column
                label="学校"
                prop="stu.school"
                :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column
                label="专业"
                prop="stu.major"
                :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column
                label="自我简介"
                prop="stu.resume"
                :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column
                label="审核状态"
                prop="status">
        </el-table-column>

        <el-table-column
                align="right">
<!--            定义输入框-->
            <template slot="header">
                <input id="sousuo" v-model="search" placeholder="输入关键字搜索"/>
                <i class="el-icon-delete" style="margin-left: 10px" @click="clear"></i>
            </template>
<!--            定义按钮-->
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="success"
                        @click="handlePass(scope.$index, scope.row)">通过</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleRefuse(scope.$index, scope.row)">不通过</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>



<script>
    import {post} from "../../../utils/request";
export default {
    data(){
        return{
            tableData:[],
            search: ''
        }
    },
    methods: {
        handlePass(index, row) {
            post('/inc/passIn',{id:row.id})
            setTimeout(function (){
                window.location.reload();
            }, 300);
        },
        handleRefuse(index, row) {
            post('/inc/refuseIn',{id:row.id})
            setTimeout(function (){
                window.location.reload();
            }, 300);
        },
        clear() {
            this.search = '';
            const search=document.getElementById('sousuo');
            search.value='';
        },
        dbSelected(row){
            this.$router.push({
                name: 'details-resume-enterprise',
                params:{id: row.id}
            });
        }
    },
    mounted(){
        const this_=this
        //请求数据
        const content=post('/inc/laodMyInterview')
        content.then(
            function (res){
                this_.tableData=res
            }
        )
    }
}
</script>

<style scoped>
    input {
        width: 180px;
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