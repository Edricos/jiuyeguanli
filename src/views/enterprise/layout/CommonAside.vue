<template>
    <el-menu
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
    >
        <!--    标题展示-->
        <h3 v-show="!isCollapse">企业后台管理系统</h3>
        <h3 v-show="isCollapse">后台</h3>
        <!--    主菜单———没有子菜单 -->
        <el-menu-item
                :index="item.path"
                v-for="item in noChildren"
                :key="item.path"
                @click="clickMenu(item)"
        >
            <i :class="'el-icon-' + item.icon"></i>
<!--            <i :class="item.icon"></i>-->
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <!--      主菜单———有子菜单的情况-->
        <!--    <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.path">-->
        <!--      <template slot="title">-->
        <!--        <i :class="'el-icon-' + item.icon"></i>-->
        <!--        <span slot="title">{{ item.label }}</span>-->
        <!--      </template>-->
        <!--      <el-menu-item-group>-->
        <!--        <el-menu-item-->
        <!--          :index="subItem.path"-->
        <!--          v-for="(subItem, subIndex) in item.children"-->
        <!--          :key="subIndex"-->
        <!--          @click="clickMenu(item)"-->
        <!--        >-->
        <!--          <i :class="'el-icon-' + subItem.icon"></i>-->
        <!--          <span slot="title">{{ subItem.label }}</span>-->
        <!--        </el-menu-item>-->
        <!--      </el-menu-item-group>-->
        <!--    </el-submenu>-->
    </el-menu>
</template>

<script>
export default {
  data() {
    return {
      Link:false,
      Collapse:false,
      menu: [
        {
          // path: "/enterprise",
          name: "home-enterprise",
          label: "首页",
          icon: "s-home",
        },
        {
          // path: "/recruits",
          name: "recruit-enterprise",
          label: "发布招聘",
          icon: "s-promotion",
        },
        {
              // path: "/history",
              name: "history-enterprise",
              label: "审核过程",
              icon: "reading",
        },
        {
          // path: "/resume",
          name: "resume-enterprise",
          label: "收集简历",
          icon: "notebook-2",
        },
          {
              // path: "/result",
              name: "result-enterprise",
              label: "录取结果",
              icon: "user",
          },
          {
              // path: "/sign",
              name: "user",
              label: "发起签约",
              icon: "edit-outline",
          }
      ],
    };
  },
  methods: {
    clickMenu(item) {
       if(item.label==='发起签约'){
           location.href="https://account.chsi.com.cn/passport/login?service=https%3A%2F%2Fwq.ncss.cn%2Fcorp%2Fj_spring_cas_security_check"
       }else {
           this.$router.push({ name: item.name });
       }
    },
  },
  computed: {
    //没有子级菜单情况
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    //有子菜单的情况
    // hasChildren() {
    //   return this.menu.filter((item) => item.children);
    // },
    isCollapse() {
      return this.Collapse;
    },
  },
};
</script>

<style scoped>
.el-menu {
  height: 100%;
  border: none;
}

h3 {
  color: #ffffff;
  text-align: center;
  line-height: 48px;
}

.el-menu-vertical-demo {
  width: 200px;
  height: 100%;
}
</style>