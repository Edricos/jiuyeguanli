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

        <el-menu-item  @click="home" index="0" style="width:340px;font-size:21px;letter-spacing:5px; text-align:left;">
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
        <el-menu-item index="60" style="float:right;" >
<!--            <i class="el-icon-s-custom"/>-->
<!--            登录-->
            <el-dropdown trigger="click" size="mini">
                <span class="el-dropdown-link">
                  <img :src="userImg" class="user" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="info">个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="history">预约记录</el-dropdown-item>
                    <el-dropdown-item @click.native="exit">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>

        <!--        搜索-->
        <el-menu-item index="50" style="float:right;">
            <i class="el-icon-search" />
            <el-input v-model="keyWord" size="mini" placeholder="搜索" style="width:220px;"/>
        </el-menu-item>

        <el-menu-item index="4" @click="preach" style="float:right;">宣讲信息</el-menu-item>
        <el-menu-item index="3" @click="recruit" style="float:right;">招聘信息</el-menu-item>
        <el-menu-item index="2" @click="announcement" style="float:right;">通知公告</el-menu-item>
        <el-menu-item index="5" @click="news" style="float:right;">热点新闻</el-menu-item>
        <el-menu-item index="1" @click="home" style="float:right;">首页</el-menu-item>

    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        keyWord: '',
        logo: require("@/assets/logo.jpg"),
          userImg:require("@/assets/user.png")

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath)
      },
        announcement(){
          this.$router.push('/student/announcement')
        },
        home(){
            this.$router.push('/student')
            window.location.reload();
        },
        preach(){
            this.$router.push('/student/preach')
        },
        recruit(){
            this.$router.push('/student/recruit')
        },
        news(){
            this.$router.push('/student/news')
        },
      info(){
          this.$router.push('/student/info')
      },

        history(){
            this.$router.push('/student/history')
        },
        exit(){
          window.localStorage.removeItem('AuthorizationStudent');
          this.$router.push('/')
        }

    }
  }
</script>
<style lang="css" scoped>
    .my-header{
        width: 100%;
        margin-bottom: 9px;
    }
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
</style>

