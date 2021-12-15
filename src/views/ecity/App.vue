<template>
  <div id="app">
    <el-container id="home">
      <el-header
        id="main-six"
        class="posi"
        :class="{scroll : isScroll}"
      >
        <sellHead :meauStats="meauStats"></sellHead>
      </el-header>
      <el-main>
        <Banner />
        <router-view />
      </el-main>
      <sellFooter></sellFooter>
    </el-container>
  </div>
</template>


<script>
import Banner from "./components/Banner";
import sellFooter from "./components/Footer";
import sellHead from "./components/Head";
// import HomeVue from "./views/Home.vue";
export default {
  components: {
    sellHead,
    sellFooter,
    Banner,
  },
  data() {
    return {
      router: true,
      defaultActive: "home",
      isShow: false,
      isScroll: false,
      // 传给head菜单的值
      meauStats: "",
      // 判断是否help路由
      ishelp: false,
      isstationed: false,
    };
  },
  watch: {
    // 监控路由参数
    $route: {
      immediate: true, // 一旦监听到路由的变化立即执行
      handler(to) {
        // 回调函数，两个参数，to：当前的组件，from：上一个组件
        // this.activeMenu = to.path; // 给activeMenu重新赋值为当前组件的路由地址
        console.log(to.name);
        if (to.name == "help") {
          this.ishelp = true;
        } else {
          this.ishelp = false;
        }

        if (to.name == "stationed") {
          this.isstationed = true;
        } else {
          this.isstationed = false;
        }
      },
    },
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
      let two = document.getElementById("main-two");
      let four = document.getElementById("main-four");
      let five = document.getElementById("main-five");
      // console.log(scrollTop);
      // console.log(four);
      // console.log(two.offsetTop);
      if (this.ishelp || this.isstationed) {
        if (scrollTop == 0) {
          this.isScroll = false;
        } else {
          this.isScroll = true;
        }
      } else {
        if (scrollTop == 0) {
          this.meauStats = "home";
          this.isScroll = false;
        } else if (scrollTop > 0) {
          this.isScroll = true;
          if (scrollTop > two.offsetTop && scrollTop <= four.offsetTop - 1) {
            this.meauStats = "main-two";
          } else if (
            scrollTop > four.offsetTop &&
            scrollTop <= five.offsetTop - 1
          ) {
            this.meauStats = "main-four";
          } else if (scrollTop >= five.offsetTop - 1) {
            this.meauStats = "main-five";
          }
        }
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

  background-image: linear-gradient(transparent);

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
  z-index: 10000;
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
