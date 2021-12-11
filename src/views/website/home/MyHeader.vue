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
        <el-menu-item @click="login" index="4" style="float:right;">
            老师
        </el-menu-item>
        <el-menu-item @click="login" index="" style="float:right;">
            企业
        </el-menu-item><el-menu-item @click="login" index="2" style="float:right;">
        学生
    </el-menu-item><el-menu-item @click="logins" index="1" style="float:right;">
        首页
    </el-menu-item>

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
        },
        logins(){
            window.location.reload();
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

