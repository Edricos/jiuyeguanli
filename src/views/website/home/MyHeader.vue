<template>
  <div class="my-header">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
    >

        <el-menu-item index="0" style="width:340px;font-size:21px;letter-spacing:5px; text-align:left;">
            <img :src="logo" class="user" />
            大学生就业服务协会
        </el-menu-item>


<!--                <el-menu-item index="60" style="float:right;width:80px">-->
<!--                    <div>-->
<!--                        &lt;!&ndash;          <el-tooltip content="消息中心" effect="dark" placement="bottom">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <img :src="Message" class="user-avatar" />&ndash;&gt;-->
<!--                        &lt;!&ndash;          </el-tooltip>&ndash;&gt;-->
<!--                    </div>-->
<!--                </el-menu-item>-->

        <!--        登录-->
        <el-menu-item index="60" style="float:right;" @click="login" >
            <i class="el-icon-s-custom"/>
            登录
        </el-menu-item>

        <!--        搜索-->
        <el-menu-item index="50" style="float:right;">
            <i class="el-icon-search" />
            <el-input v-model="keyWord" size="mini" placeholder="搜索" style="width:220px;"/>
        </el-menu-item>

        <!--        老师导航栏-->
        <el-submenu index="4" style="float:right;">
            <template slot="title">老师</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
            <el-menu-item index="4-4">选项4</el-menu-item>
        </el-submenu>

        <!--        雇主导航栏-->
        <el-submenu index="3" style="float:right;">
            <template slot="title">雇主</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
            <el-menu-item index="3-4">选项4</el-menu-item>
        </el-submenu>

        <!--        学生导航栏-->
        <el-submenu index="2" style="float:right;">
            <template slot="title">学生</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
        </el-submenu>

        <el-menu-item index="1" style="float:right;">首页</el-menu-item>

    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        keyWord: '',
        logo: require("@/assets/logo.jpg")

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath)
      },
        login(){
          this.$router.push('/login')
            // window.location = "http://47.100.38.130:8082/toLogin";
        }
    }
  }
</script>
<style lang="css" scoped>
    .my-header{
        width: 100%;
    }
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
</style>

