<template>
  <el-container style="height:100%;">

    <el-aside width="auto">
        <!-- 侧边栏 -->
        <CommonAside></CommonAside>
    </el-aside>

    <el-container>
      <!-- 头部 -->
      <el-header>
        <common-header></common-header>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from './CommonAside.vue';
import CommonHeader from './CommonHeader.vue';
export default {
  components: { CommonAside, CommonHeader },};
</script>

<style scoped>

.el-header {
  /*原背景色*/
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>