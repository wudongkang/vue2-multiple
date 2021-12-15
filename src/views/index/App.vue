<template>
  <div id="app">
    <el-container id="home">
      <el-header
        class="posi"
        :class="{scroll : isScroll}"
      >
        <sellHead :meauStats="meauStats"></sellHead>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <sellFooter></sellFooter>
    </el-container>
  </div>
</template>


<script>
import sellFooter from "./components/Footer";
import sellHead from "./components/Head";
export default {
  components: {
    sellHead,
    sellFooter,
  },
  data() {
    return {
      router: true,
      defaultActive: "home",
      isShow: false,
      isScroll: false,
      // 传给head菜单的值
      meauStats: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      // this.isShow = this.defaultActive != key;
      document.getElementById(key).scrollIntoView();
    },
    /**
     * @desc 滚动事件
     */
    handleScroll() {
      let scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop == 0) {
        this.isScroll = false;
        this.meauStats = "home";
      } else if (
        scrollTop > 0 &&
        scrollTop < document.getElementById("main-two").offsetTop
      ) {
        this.isScroll = true;
      } else if (
        scrollTop > document.getElementById("main-two").offsetTop &&
        scrollTop < document.getElementById("main-three").offsetTop
      ) {
        this.meauStats = "main-two";
        this.isScroll = true;
      } else if (
        scrollTop > document.getElementById("main-three").offsetTop &&
        scrollTop < document.getElementById("main-four").offsetTop
      ) {
        this.meauStats = "main-three";
        this.isScroll = true;
      } else if (
        scrollTop > document.getElementById("main-four").offsetTop &&
        scrollTop < document.getElementById("main-four").offsetTop + 150
      ) {
        this.meauStats = "main-four";
        this.isScroll = true;
      } else if (
        scrollTop >
        document.getElementById("main-five").offsetTop - 200
      ) {
        this.meauStats = "main-five";
        this.isScroll = true;
      }
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
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
    max-width: 1200px;
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
.el-main {
  padding: 0 !important;
  // width: 1450;
}
.footer {
  width: 100%;
  height: 216px;
  overflow: hidden;
  background-color: #14679f;
  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
</style>
