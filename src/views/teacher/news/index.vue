<template>
    <div>
        <div style="margin-top: 6px;">
            <el-button
                    icon="el-icon-plus"
                    size="small"
                    @click="addNews"
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
                    prop="title">
            </el-table-column>
            <el-table-column
                    label="类别"
                    prop="category">
            </el-table-column>
            <el-table-column
                    label="发布人"
                    prop="writer">
            </el-table-column>
            <el-table-column
                    label="发布时间"
                    prop="time">
            </el-table-column>
            <el-table-column
                    label="内容"
                    prop="content">
            </el-table-column>

            <el-table-column
                    align="right">
                <!--            定义输入框-->
                <template slot="header">
                    <input id="sousuo" v-model="search" placeholder="输入关键字搜索"/>
                    <i class="el-icon-delete" style="margin-left: 1px" @click="clear"></i>
                </template>
                <!--            定义按钮-->
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">详情</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
            tableData: [
                ],
            ruleForm: {
                id:10
            },
            search: ''
        }
    },
    methods: {
        handleEdit(index,row) {
            this.$router.push({
                name: 'details-news-teacher',
                params:{id: row.id}
            })
        },
        handleDelete(index, row) {
            this.ruleForm.id=row.id
            post('/admin/delNews',this.ruleForm)
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
            //row为表单数据
            this.$router.push({
                name: 'details-news-teacher',
                params:{id: row.id}
            })
        },
        addNews(){
            this.$router.push('/teacher/news/addNews')
        }
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