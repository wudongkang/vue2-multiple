<template>
  <div class="banner">
    <div class="mm">
      <p class="banner-web"></p>
      <p class="banner-wenan"></p>
      <div class="banner-wenzi">
        智能数字化药店系统｜专业互联网+医院SAAS服务 <br>
        数字化药厂服务平台+多渠道销售路径｜智能社群服务｜精准营销方案
      </div>
      <el-button class="banner-welcome">
        欢迎入驻
      </el-button>
      <p class="banner-foot"></p>
    </div>
    <!-- <div class="banner-img"> -->
    <!-- <img src="../assets/image/banner.png" /> -->
    <!-- </div> -->
    <!-- banner 图片上的字和router关联 -->
    <!-- <div class="banner-title">
      <p>{{title}}</p>
    </div> -->
  </div>
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
  data() {
    return {};
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
    background-image: url(../assets/image/banner.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .banner-web {
      width: 100%;
      height: 484px;
      background: url("../assets/image/圆圈1.png") no-repeat;
      // background-size: 70%;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1;
    }
    .banner-wenan {
      width: 1200px;
      height: 484px;
      background: url("../assets/image/文案.svg") no-repeat;
      position: absolute;
      top: 25%;
      left: 50%;
      margin-left: -600px;
      z-index: 2;
    }
    .banner-wenzi {
      width: 1200px;
      height: 484px;
      position: absolute;
      top: 56%;
      left: 50%;
      font-size: 24px;
      line-height: 48px;
      margin-left: -600px;
      font-family: 苹方-简 细体;
      z-index: 2;
    }
    .banner-welcome {
      width: 188px;
      height: 48px;
      position: absolute;
      top: 77%;
      left: 50%;
      margin-left: -600px;
      font-size: 24px;
      background: #ff8a58;
      border-radius: 8px;
      color: #fff;
      font-family: 苹方-简 细体;
      z-index: 2;
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
  .banner-img img {
    width: 100%;
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
</style>
