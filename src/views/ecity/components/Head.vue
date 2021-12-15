<template>
  <div class="nest">
    <div class="logo">
      <img
        src="../assets/images/logo.svg"
        alt
      />
      <!-- <svg class="banner-wenan"></svg> -->
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-demo "
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="home">
        首页
      </el-menu-item>
      <el-menu-item index="main-two">
        入驻攻略
      </el-menu-item>
      <el-menu-item index="main-four">
        公司简介
      </el-menu-item>
      <el-menu-item index="main-five">
        关于我们
      </el-menu-item>
      <!-- <el-menu-item @click="jump"> -->
      <el-menu-item index="main-six">
        <!-- 路由跳转 -->
        帮助中心
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    meauStats: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      defaultActive: "home",
      isScroll: false,
    };
  },
  watch: {
    meauStats: function (olnew) {
      console.log(olnew);
      this.defaultActive = olnew;
    },
    $route: {
      immediate: true, // 一旦监听到路由的变化立即执行
      handler(to, from) {
        // 回调函数，两个参数，to：当前的组件，from：上一个组件
        // this.activeMenu = to.path; // 给activeMenu重新赋值为当前组件的路由地址
        console.log(to.name);
        console.log(from);
        if (to.name == "help") {
          this.defaultActive = "main-six";
        }
      },
    },
  },
  mounted() {
    console.log(this.meauStats);
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      let handle = new Promise((reslove) => {
        if ("main-six" == key) {
          this.$router.push("/help");
        } else {
          this.$router.push("/");
        }
        reslove("跳转成功");
      });
      handle.then((data) => {
        console.log(data);
        if ("main-six" == key) {
          //
        } else {
          document.getElementById(key).scrollIntoView();
        }
      });
    },
    //新窗口打开新窗口跳转路由
    jump() {
      let routeData = this.$router.resolve({
        name: "help",
        router: "help",
        query: { species: "" },
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style lang="scss">
.scroll {
  background: rgba(0, 0, 0, 0.8) !important;
}
.posi {
  position: fixed;
  top: 0px;
  z-index: 100;
  height: 667px;
  background-image: linear-gradient(transparent);

  .nest {
    z-index: 10000;
    height: 60px;
    margin: auto;
    display: flex;
    // justify-content: ;
    align-content: center;
    max-width: 70%;
  }
  .el-menu-demo {
    background: none;
  }
}
.el-header {
  width: 100%;
  margin: 0 auto;
  .logo {
    // width: 160px;
    padding: 10px;
    img {
      line-height: 60px;
    }
  }

  .el-menu--horizontal > .el-menu-item {
    color: #fff;
  }
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background: none;
    color: #fff;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
    color: #fff;
  }
  .el-menu .is-active::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 8px;
    left: calc(50% - 7px);
    width: 14px;
    height: 4px;
    background: #fff;
    border-radius: 5px;
  }
}
</style>
