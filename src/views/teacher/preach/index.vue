<template>
    <div>
        <div style="margin-top: 6px;">
            <el-button
                    icon="el-icon-plus"
                    size="small"
                    @click="addTab(editableTabsValue)"
            >
                添加
            </el-button>
            <el-button
                    icon="el-icon-delete"
                    size="small"
                    @click="addTab(editableTabsValue)"
            >
                删除
            </el-button>
            <el-button
                    icon="el-icon-edit"
                    size="small"
                    @click="addTab(editableTabsValue)"
            >
                编辑
            </el-button>
            <el-button
                    icon="el-icon-search"
                    size="small"
                    @click="addTab(editableTabsValue)"
            >
                高级检索
            </el-button>
            <el-button
                    icon="el-icon-copy-document"
                    size="small"
                    @click="addTab(editableTabsValue)"
            >
                导出
            </el-button>
        </div>
        <el-table
                :data="tableData.filter(data => data.classification=='线下'&&(!search ||
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
                    label="负责人"
                    prop="principal"
                    :show-overflow-tooltip='true'>
            </el-table-column>
            <el-table-column
                    label="电话"
                    prop="tel">
            </el-table-column>
            <el-table-column
                    label="时间"
                    prop="time">
            </el-table-column>
            <el-table-column
                    label="地点"
                    prop="intro"
                    :show-overflow-tooltip='true'>
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
                    <i class="el-icon-delete" style="margin-left: 2px" @click="clear"></i>
                </template>
                <!--            定义按钮-->
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="success"
                            @click="handleApprove(scope.$index, scope.row)">同意</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
                </template>
            </el-table-column>
        </el-table>
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
        handleDelete(index, row) {
            this.ruleForm.id=row.id
            //提交审核结果
            post('/admin/refusePreach',this.ruleForm)
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
            console.log(row)
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