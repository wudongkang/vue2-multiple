<template>
  <div class="nest">
    <div class="logo">
      <img
        src="../assets/image/logo.svg"
        alt
      />
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-demo "
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="main-two">欢迎入驻</el-menu-item>
      <el-menu-item index="main-three">商家服务</el-menu-item>
      <el-menu-item index="main-four">公司简介</el-menu-item>
      <el-menu-item index="main-five">关于我们</el-menu-item>
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
  },
  mounted() {
    console.log(this.meauStats);
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      document.getElementById(key).scrollIntoView();
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
  background-image: linear-gradient(
    to bottom,
    rgba(112, 143, 171, 1),
    transparent
  );

  .nest {
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
    width: 160px;
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
