<template>
    <el-menu
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
    >
        <!--    标题展示-->
        <h3 v-show="!isCollapse">教师后台管理系统</h3>
        <h3 v-show="isCollapse">后台</h3>
        <!--    主菜单———没有子菜单 -->
        <el-menu-item
                :index="item.path"
                v-for="item in noChildren"
                :key="item.path"
                @click="clickMenu(item)"
        >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
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
          path: "/teacher",
          name: "home-teacher",
          label: "首页",
          icon: "s-home",
        },
        {
            path: "/teacher/enterprise",
          name: "enterprise-teacher",
          label: "单位审核",
          icon: "s-promotion",
        },
        {
            path: "/teacher/news",
              name: "news-teacher",
              label: "热点新闻",
              icon: "reading",
        },
        {
            path: "/teacher/announcement",
          name: "announcement-teacher",
          label: "公告发布",
          icon: "notebook-2",
        },
          {
              path: "/teacher/recruit",
              name: "recruit-teacher",
              label: "招聘发布",
              icon: "user",
          },
          {
              path: "/teacher/preach",
              name: "preach-teacher",
              label: "宣讲发布",
              icon: "edit-outline",
          },
          {
              path: "/teacher/sign",
              name: "sign-teacher",
              label: "签约信息",
              icon: "edit-outline",
          },
          {
              path: "/teacher/receipt",
              name: "receipt-teacher",
              label: "入校审批",
              icon: "edit-outline",
          },
          {
              path: "/teacher/jobFair",
              name: "jobFair-teacher",
              label: "招聘会发布",
              icon: "edit-outline",
          }
      ],
    };
  },
  methods: {
    clickMenu(item) {
      // this.$router.push({ name:'home-enterprise'});
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