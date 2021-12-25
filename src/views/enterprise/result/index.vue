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
                label="姓名"
                prop="name"
                :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column
                label="学校"
                prop="school"
                :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column
                label="专业"
                prop="major"
                :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column
                label="录取时间"
                prop="time">
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
                        @click="handleEdit(scope.$index, scope.row)">详情</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">解约</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>

export default {

    data(){
        return{
            tableData:[
                {name:'张三',
                school:'南昌工程学院',
                major:'大数据',
                time:'2019-10-11'},
                {name:'李四',
                    school:'清华大学',
                    major:'自动化',
                    time:'2019-10-11'},
                {name:'王五',
                    school:'北京大学',
                    major:'计算机',
                    time:'2019-10-11'},
                {name:'麻子',
                    school:'南昌工程学院',
                    major:'自动化',
                    time:'2019-10-11'},],

            search: ''
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        clear() {
            this.search = '';
            const search=document.getElementById('sousuo');
            search.value='';
        }
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