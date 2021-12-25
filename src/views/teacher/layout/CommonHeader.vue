<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <el-breadcrumb>
<!--        回到首页时需要刷新页面-->
        <el-breadcrumb-item :to="{ path: '/teacher' }">首页</el-breadcrumb-item>
          <!--        没有发挥作用-->
<!--        <el-breadcrumb-item :to="current.path" v-if="current">-->
<!--          {{current.label}}-->
<!--        </el-breadcrumb-item>-->
      </el-breadcrumb>
    </div>
    <div>
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            userImg: require("@/assets/user.png"),
        }
    },
    methods: {
      handleMenu() {
      this.$store.commit("collapseMenu");
    },
        exit(){
            window.localStorage.removeItem('AuthorizationTeacher');
            this.$router.push('/')
        }
  }
}
</script>

<style scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.l-content {
  display: flex;
  align-items: center;

}

.el-button {
    margin-right: 20px;
}

.user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
}

</style>