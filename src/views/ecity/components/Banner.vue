<template>
  <el-container>
    <template>
      <div
        class="banner bann_img"
        v-if=" this.routerSatas == 'help' || this.routerSatas == 'stationed'"
      >
        <div class="banner_mask"></div>
        <div class="mm bann_img">
          <!-- <p class="banner-wenan"></p> -->
          <div class="banner-wenzi bann_wenzi">
            诚邀您与医城汇共同构建大健康生态
            <p class="bann_easy">让关爱和健康变得简单</p>
            <el-button class="banner-welcome bann_welcome">
              <router-link to="/stationed">
                欢迎入驻
              </router-link>
            </el-button>
          </div>
        </div>
      </div>

      <div
        class="banner"
        v-else
      >
        <div class="mm">
          <svg class="banner-wenan"></svg>
          <!-- <p ></p> -->
          <div class="banner-wenzi">
            医城汇一直欢迎正直、拥有优质品质与资源的合伙人朋友，加入医城汇大平台
          </div>
          <el-button class="banner-welcome">
            <router-link to="/stationed">
              欢迎入驻
            </router-link>
          </el-button>
          <p class="banner-foot"></p>
        </div>
      </div>
    </template>

  </el-container>
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "../assets/img/bgtop.jpg",
    },
  },
  watch: {
    $route: {
      immediate: true, // 一旦监听到路由的变化立即执行
      handler(to, from) {
        // 回调函数，两个参数，to：当前的组件，from：上一个组件
        console.log(to.name);
        console.log(from);
        this.routerSatas = to.name;
      },
    },
  },
  data() {
    return {
      routerSatas: "",
    };
  },
  mounted() {
    //
  },
  methods: {
    /**
     * @desc 滚动事件
     */
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 667px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  .mm {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: -10px;
    // filter: blur(10px);
    background-image: url("../assets/images/banner.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .banner-wenan {
      width: 100%;
      height: 484px;
      background: url("../assets/images/banner1.svg") no-repeat;
      background-position: center;
      z-index: 2;
    }
    .banner-wenzi {
      width: 100%;
      height: 484px;
      position: absolute;
      top: 50%;
      // left: 17%;
      text-align: center;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 32px;
      letter-spacing: 2px;
      z-index: 2;
    }
    .banner-welcome {
      width: 188px;
      height: 48px;
      position: absolute;
      left: 50%;
      top: 68%;
      margin-left: -94px;
      font-size: 24px;
      background: #ff8a58;
      border-radius: 8px;
      color: #fff;
      font-family: 苹方-简 细体;
      z-index: 2;
      border: none;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
    .banner-foot {
      width: 100%;
      height: 484px;
      background: url("../assets/image/圆圈2.png") no-repeat;
      background-position: right bottom;
      position: absolute;
      right: 0px;
      bottom: 0px;
      z-index: 1;
    }
  }
  img {
    position: absolute;
    //width: 1240px;
    height: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &-title {
    position: absolute;
    color: #fff;
    font-size: 45px;
    font-weight: 400;
    line-height: 300px;
    text-align: center;
    width: 100%;
  }
}
.banner {
  height: 568px;
  .bann_img {
    background-image: url("../assets/images/banner4.png");
    .bann_wenzi {
      width: 1200px;
      position: relative;
      margin: 0 auto;
      top: 35%;
      text-align: left;
      font-size: 48px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 67px;
    }
    .bann_easy {
      width: 1200px;
      position: absolute;
      margin: 0 auto;
      top: 20%;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 32px;
      letter-spacing: 2px;
    }
    .bann_welcome {
      left: 0;
      top: 35%;
      margin: 0;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .banner_mask {
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.2;
    z-index: 1;
    position: absolute;
  }
}

.router-link-exact-active {
  color: #fff;
  text-decoration: none;
}
</style>
