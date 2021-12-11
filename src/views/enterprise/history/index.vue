<template>
    <el-table
            :data="tableData.filter(data => !search ||
            JSON.stringify(data).toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
<!--        序号-->
        <el-table-column
                label="序号"
                type="index">
        </el-table-column>
        <el-table-column
                label="标题"
                prop="title">
        </el-table-column>
        <el-table-column
                label="时间"
                prop="time">
        </el-table-column>
        <el-table-column
                label="地点"
                prop="addr">
        </el-table-column>
        <el-table-column
                label="状态"
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
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import {post} from "../../../utils/request";

export default {

    data() {
        return {
            tableData: [
                {
                    title: '舞动青春',
                    time: '2021年10月20日',
                    addr: '',
                    status: '待审核',
                    id:1
                },
                {
                    title: '舞动青春2',
                    time: '2021年10月21日',
                    addr: '',
                    status: '待审核',
                    id:2
                },
                {
                    title: '梦想启航，激情飞扬',
                    time: '2021年10月2日',
                    addr: '大活B100',
                    status: '审核完成',
                    id:3
                },
                {
                    title: 'viow————大杭州',
                    time: '2021年10月3日',
                    addr: '大活B205',
                    status: '审核完成',
                    id:4
                }],
            ruleForm: {
                id:10
            },
            search: ''
        }
    },
    methods: {
        handleEdit(index,row) {
            this.$router.push({
                name: 'recruit-enterprise',
                params:{id: row.id}
            });
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        clear() {
            this.search = '';
            const search=document.getElementById('sousuo');
            search.value='';
        }
    },
    mounted(){
        // post('/inc/preApply',this.ruleForm).
        const this_=this
        const account=post('/inc/preApply',this.ruleForm)
        account.then(
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