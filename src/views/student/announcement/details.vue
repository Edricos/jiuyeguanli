<template>
    <div class="main">
<!--        标题-->
        <div style="margin: 0 auto;text-align: center;"><h3>{{form.title}}</h3></div>
<!--        文件信息-->
        <div style="margin: 0 auto;text-align: center;width: 50%;float: right">
            <div style="float: left">
                <span style="color: #8c939d">
                    作者：{{form.announcer}}
                </span>
            </div>
            <div style="float: right;margin-right: 26%">
                <span style="color: #8c939d">
                    {{form.time}}
                </span>
            </div>
        </div>
<!--        内容-->
        <br>
        <br>
        <div style="width: 80%;margin: 0 auto">
            <p>
                {{form.content}}
            </p>
        </div>
        <br>
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
                form: {
                    title: '',
                    announcer:"",
                    content:'',
                    category:"",
                    time:'',
                },
                changeId:{
                    id:0
                }
            }
        },
        methods: {
            onSubmitApprove() {
                //    提交审核信息
                // post('/admin/addNews',this.form)
                //    返回上一页
                const this_=this
                setTimeout(function (){
                    this_.$router.back()
                }, 300);
            },
            onSubmitRefuse() {
                const this_=this
                post('/admin/delNotice',this.changeId)
                setTimeout(function (){
                    this_.$router.back()
                    // window.location.reload();
                }, 300);

            },
            cancel(){
                this.$router.back()
            },
        },
        mounted(){
            const this_=this
            this.changeId.id=this.$route.params.id
            //添加表单数据,向服务器请求数据
            const accounts=post('/index/aNotice',this.changeId)
            accounts.then(
                function (res){
                    this_.form=res
                }
            )
        }
    }
</script>

<style scoped>
    .main{
        width: 80%;
        margin: 0 auto;
        border: 1px solid #ddd;
        /*border: red solid;*/
        border-radius: 2px;
        padding: 0px;
    }
</style>