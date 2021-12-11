<template>
<div class="content-box">
    <Category title="新闻热点" link="http://localhost:8080/#/student/news" class="category">
        <template >
            <ul>
                <li v-for="(g,index) in news" :key="index">{{g.title}}</li>
            </ul>
        </template>
    </Category>

    <Category title="通知公告" link="http://localhost:8080/#/student/announcement" class="category">
        <template>
            <ul>
                <li v-for="(g,index) in announcement" :key="index">{{g.title}}</li>
            </ul>
        </template>
    </Category>
    <Category title="招聘信息" link="http://localhost:8080/#/student/recruit" class="category">
        <template>
            <ul>
                <li v-for="(g,index) in recruit" :key="index">{{g.title}}</li>
            </ul>
        </template>
    </Category>
    <Category title="宣讲信息" link="http://localhost:8080/#/student/preach" class="category">
        <template>
            <ul>
                <li v-for="(g,index) in preach" :key="index">{{g.title}}</li>
            </ul>
        </template>
    </Category>
</div>
</template>
<script>
  import Category from './Category'
  import {post} from "../../../utils/request";
  export default {
    components:{
        Category
    },
    data() {
      return {
          news:[],
          announcement:[],
          recruit:[],
          preach:[]
      }
    },
    mounted(){
        const this_=this
        const news=post('/index/fiveNews')
        news.then(
            function (res){
                this_.news=res
            }
        )
        const announcement=post('/index/fiveNotice')
        announcement.then(
            function (res){
                this_.announcement=res
            }
        )
        const recruit=post('/index/fivePreach')
        recruit.then(
            function (res){
                this_.recruit=res
            }
        )
        const preach=post('/index/fivePreach')
        preach.then(
            function (res){
                this_.preach=res
            }
        )
    }
  }
</script>
<style lang="css" scoped>
.content-box{
    margin-top: 20px;
    margin-left: 7%;
}
.category{
    float: left;
    margin-left: 2%;
    /*margin: 0 auto;*/
}

</style>

