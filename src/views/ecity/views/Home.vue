<template>
  <el-container>
    <el-header height="0"></el-header>
    <el-main>
      <div
        class="home"
        v-loading="loading"
        id="home"
      >
        <el-row>
          <p class="homeTitle">{{homeList.title}}</p>
          <el-col
            :span="8"
            v-for="(item,index) in homeList.list"
            :key="index"
          >
            <div
              class="grid-content bg-purple"
              :class="{clear_r:(index - 1 )% 3 ==1 }"
            >
              <div class="f_name">
                <img
                  :src="item.img_url"
                  alt=""
                >
                <p>
                  {{item.content}}
                </p>
              </div>
              <div
                class="home-right-img"
                :style="{ 'background': 'url(' + item.img_url1 + ') no-repeat'}"
              >

              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div
        class="main-two"
        id="main-two"
      >
        <p class="main-two-title">入驻攻略</p>
        <div class="main-two-top">
          <p class="main-two-top-left">入驻申请</p>
          <div class="main-two-top-right">
            <router-link to="/stationed">
              <el-button>申请入驻</el-button>
            </router-link>
            <p class="main-two-top-buzhou"></p>
          </div>
        </div>
        <div class="main-two-bottom">
          <p class="main-two-top-left">温馨提示</p>
          <div class="main-two-bottom-right">
            等待审核期间，请保持电话畅通，并关注邮件<span>BD@offengroup.com</span>，以便工作人员与您取得联系。
          </div>
        </div>
      </div>
      <div
        class="main-four"
        id="main-four"
      >
        <div class="main-four-content">
          <p>公司简介</p>
          <p>奥芬集团，有着奥芬生命学院的称号，旨在让生命之花开得更加绚丽芬芳，培养更多懂得健康知识的传播者 “让关爱和维护健康变得更简单”。 奥芬是专业的互联网+健康服务平台。奥芬商学院在奥芬集团的基础上培养和输出专业的 健康从业者，链接奥芬的全产业平台业务。包含培养营养健康师，营养管理师、心理管理师等，形成健康课题研究+健康 职业培训+健康与慢性病康复技术传播及服务+健康产品的全产业链服务模式</p>
        </div>
      </div>
      <div
        class="main-five"
        id="main-five"
      >
        <p class="main-five-title">关于我们</p>
        <el-row>
          <el-col :span="12">
            <div class="main-five-left">
              <div class="grid-content">
                <img
                  src="../assets/image/医健宝.png"
                  alt=""
                >
                <span>医健宝</span>
                <p>&nbsp;&nbsp;致力于重塑专科专病+慢病管理+多场景联动的新时代就医机制</p>
              </div>
            </div>
            <div class="main-five-left">
              <div class="main-five-banner">
                <div class="grid-content">
                  通过互联网+助力大家康产业进行数字转型，并建立产业生态，为大家健康行业提供人力资源、数据资源、技术资源等
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="main-five-right">
              <p class="main-five-right-img"></p>
              <p class="main-five-right-title">
                联系我们
              </p>
              <div class="main-five-right-content">
                <p>
                  <span>联系地址：</span>
                  <span>北京市朝阳区高碑店乡陈家林9号院 华腾世纪总部公园E1座302</span>
                </p>
                <p>
                  <span>合作邮箱：</span>
                  <span>yongle.cao@offengroup.com</span>
                </p>
                <p>
                  <span>联系电话：</span>
                  <span>186 1838 6330</span>
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div
        class="main-six"
        v-loading="loading"
      >
        <el-row>
          <p class="homeTitle">{{moreList.title}}</p>
          <el-col
            :span="8"
            v-for="(item,index) in moreList.list"
            :key="index"
          >
            <div
              class="grid-content bg-purple"
              :class="{clear_r:(index - 1 )% 3 ==1}"
              @mousemove="animate(index)"
              @mouseout="animateout(index)"
            >
              <div class="f_name">
                <img
                  :src="item.img_url"
                  alt=""
                  :class="{'animate__animated animate__pulse': animateSatas === index}"
                >
                <p class="mask"></p>
                <p v-bind:style="{ 'background': 'url(' + item.img_url1 + ') no-repeat center'}">
                  {{item.content}}
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      loading: false,
      homeList: {
        title: "我们的原则",
        list: [
          {
            content: "廉洁正直、公平合理的合作关系",
            img_url: require("../assets/images/num1.png"),
            img_url1: require("../assets/images/icon.png"),
          },
          {
            content: "互助互补、竞合共赢的双重受益合作模式",
            img_url: require("../assets/images/num2.png"),
            img_url1: require("../assets/images/icon2.png"),
          },
          {
            content: "致力于长期、战略性合作",
            img_url: require("../assets/images/num3.png"),
            img_url1: require("../assets/images/icon3.png"),
          },
        ],
      },
      moreList: {
        title: "更多问题，欢迎咨询",
        list: [
          {
            content: "入驻联系人信息",
            img_url: require("../assets/images/编组5.png"),
            img_url1: require("../assets/images/联系人信息.png"),
          },
          {
            content: "入驻流程详细说明",
            img_url: require("../assets/images/图.png"),
            img_url1: require("../assets/images/业务流程.png"),
          },
          {
            content: "入驻注意事项",
            img_url: require("../assets/images/蒙版.png"),
            img_url1: require("../assets/images/注意事项.png"),
          },
        ],
      },
      BusinessList: {
        title: "商家服务",
        list: [
          {
            name: "专业运营团队支撑",
            content: "拥有近100人、3年以上医药行业运营经验的团队。",
            img_url: require("../assets/image/1.png"),
          },
          {
            name: "安全的系统建设",
            content:
              "公司旗下11大平台，经过多年的建设和完善。已通过各种安全性测试。",
            img_url: require("../assets/image/2.png"),
          },
          {
            name: "完备的产业生态闭环",
            content:
              "多年医疗行业从业经验+市场经验，具有独到的产业生态闭、环模式。",
            img_url: require("../assets/image/3.png"),
          },
          {
            name: "优秀的技术团队",
            content: "集合各大互联网经营人士。",
            img_url: require("../assets/image/4.png"),
          },
          {
            name: "强大的合伙人推动机制",
            content:
              "邀请优秀的医药、医疗销售精英共同推动产业生态闭环的建设，也诚邀具有优秀业务能力的退队/个人的加入。",
            img_url: require("../assets/image/5.png"),
          },
        ],
      },
      animateSatas: "",
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 以id为筛选条件进行动画展示
    animate(e) {
      this.animateSatas = e;
    },
    animateout() {
      this.animateSatas = "";
    },
    // 以布尔值为筛选条件进行动画展示
    animateboll(e) {
      console.log(e);
      this.animateBoll = e;
    },
    animateoutboll() {
      this.animateBoll = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.el-main {
  width: 100%;
  background: #ffffff;
  .home {
    width: 1200px;
    height: 458px;
    // max-width: 1200px;
    margin: auto;
    position: relative;
    .main-banner-left {
      width: 391px;
      height: 457px;
      background: url("../assets/image/16Gene.png") no-repeat;
      // background-position:right bottom;
      position: absolute;
      top: 28%;
      left: -17%;
    }
    .main-banner-right {
      width: 292px;
      height: 324px;
      background: url("../assets/image/08Stethoscope.png") no-repeat;
      background-position: right bottom;
      position: absolute;
      right: -17%;
      bottom: 0%;
    }
    .homeTitle {
      text-align: center;
      font-size: 28px;
      margin: 74px 0 48px 0;
    }
    .lsat-row {
      margin-bottom: 74px;
    }
    .grid-content {
      height: 180px;
      background: #fff;
      padding: 46px 0 0 44px;
      margin-bottom: 10px;
      border-radius: 20px;
      margin-right: 20px;
      position: relative;
      border: 1px solid #e8e8e8;
      .f_name {
        img {
          display: inline-block;
          vertical-align: middle;
        }
        p {
          width: 140px;
          display: block;
          margin-top: 26px;
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #21272e;
          line-height: 30px;
        }
      }
      .home-right-img {
        width: 144px;
        height: 137px;
        // background: url("../assets/images/icon.png") no-repeat;
        position: absolute;
        right: 8px;
        top: 56px;
      }
      span {
        display: block;
        font-size: 14px;
        color: #7b7b7b;
        font-family: 苹方-简 常规体;
        margin-top: 10px;
      }
      .el-button {
        display: block;
        position: absolute;
        right: 0;
        background: none;
        color: #ff7255;
        border: none;
        bottom: 32px;
        padding: 0px;
        margin: 0px;
        margin-right: 30px;
      }
    }
  }
  .main-two {
    width: 100%;
    margin: 0 auto;
    height: 1402px;
    background: #fafafa;
    position: relative;
    .main-two-title {
      width: 112px;
      height: 28px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #1f2229;
      line-height: 28px;
      margin: 0 auto;
      padding: 78px 0 48px 0;
    }
    .main-two-top {
      width: 1200px;
      position: relative;
      margin: 0 auto;
      .main-two-top-left {
        width: 206px;
        height: 88px;
        display: inline-block;
        border-radius: 100px 0px 0px 100px;
        border: 2px solid #ff8a58;
        text-align: center;
        line-height: 88px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ff7255;
        margin-top: 27px;
        border-right: none;
      }
      .main-two-top-right {
        display: inline-block;
        width: 996px;
        height: 1022px;
        background: #ffffff;
        border-radius: 16px;
        position: absolute;
        .el-button {
          width: 178px;
          height: 74px;
          background: linear-gradient(287deg, #ff8a58 0%, #ff7255 100%);
          border-radius: 8px;
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 30px;
          position: absolute;
          right: 5%;
          top: 61px;
        }
      }
      .main-two-top-buzhou {
        height: 100%;
        background: url("../assets/images/buzhou.png") no-repeat;
        margin: 169px 0 0 85px;
      }
    }
    .main-two-bottom {
      width: 1200px;
      margin: 0 auto;
      margin-top: 940px;
      .main-two-top-left {
        width: 206px;
        height: 88px;
        display: inline-block;
        border-radius: 100px 0px 0px 100px;
        border: 2px solid #ff8a58;
        text-align: center;
        line-height: 88px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ff7255;
        margin-top: 27px;
        border-right: none;
      }
      .main-two-bottom-right {
        display: inline-block;
        width: 996px;
        height: 152px;
        background: #ffffff;
        border-radius: 16px;
        position: absolute;
        text-align: center;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #7b7b7b;
        line-height: 152px;
        span {
          font-weight: 600;
          color: #1f2229;
        }
      }
    }
  }
  .main-four {
    width: 100%;
    height: 259px;
    margin: 0 auto;
    background: url("../assets/image/背景3.png");
    // background-size: 100% 100%;
    padding-top: 75px;
    .main-four-content {
      width: 1200px;
      margin: 0 auto;
      p:nth-child(1) {
        // width: 112px;
        height: 28px;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 28px;
        margin: 0 auto;
        text-align: center;
      }
      p:nth-child(2) {
        // width: 975px;
        height: 144px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 36px;
        text-align: center;
        margin: 0 auto;
        margin-top: 24px;
      }
    }
  }
  .main-five {
    width: 100%;
    height: 462px;
    background: url("../assets/image/背景4.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 75px;
    .main-five-title {
      width: 112px;
      height: 28px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #20262e;
      line-height: 28px;
      margin: 0 auto;
    }
    .el-row {
      width: 1200px;
      margin: 0 auto;
      .el-col {
        // height: 152px;
        border-radius: 16px;
        margin-top: 48px;
        .main-five-left {
          height: 130px;
          background: #ffffff;
          border-radius: 16px;
          margin-right: 20px;
          padding: 22px 0 0 18px;
          img {
            display: inline-block;
            vertical-align: middle;
          }
          p {
            height: 16px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #7b7b7b;
            line-height: 16px;
          }
        }
        .main-five-left:nth-child(2) {
          padding: 0 0 0 29px;
          margin-top: 20px;
          height: 130px;
          .main-five-banner {
            background: url("../assets/image/配图.png") no-repeat right;
            height: 100%;
          }
          .grid-content {
            padding: 22px 0 0 0;
            width: 346px;
            height: 78px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #21272e;
            line-height: 26px;
            // &:hover {
            // }
          }
        }
        .main-five-right {
          height: 302px;
          background: #ffffff;
          border-radius: 16px;
          margin-right: 10px;
          position: relative;
          .main-five-right-title {
            width: 80px;
            height: 20px;
            font-size: 20px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #21272e;
            line-height: 20px;
            padding: 51px 0 26px 29px;
          }
          .main-five-right-img {
            width: 36%;
            height: 212px;
            position: absolute;
            right: 0px;
            bottom: 0px;
            background: url("../assets/image/元素1.png") no-repeat right;
          }
          .main-five-right-content {
            width: 357px;
            margin-left: 29px;
            border-top: 1px solid #efefef;
            p {
              margin-top: 15px;
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #7b7b7b;
              line-height: 28px;
            }
          }
        }
      }
    }
  }
  .main-six {
    width: 1200px;
    height: 458px;
    // max-width: 1200px;
    margin: auto;
    position: relative;
    .main-banner-left {
      width: 391px;
      height: 457px;
      background: url("../assets/image/16Gene.png") no-repeat;
      // background-position:right bottom;
      position: absolute;
      top: 28%;
      left: -17%;
    }
    .main-banner-right {
      width: 292px;
      height: 324px;
      background: url("../assets/image/08Stethoscope.png") no-repeat;
      background-position: right bottom;
      position: absolute;
      right: -17%;
      bottom: 0%;
    }
    .homeTitle {
      text-align: center;
      font-size: 28px;
      margin: 74px 0 48px 0;
    }
    .lsat-row {
      margin-bottom: 74px;
    }
    .grid-content {
      height: 226px;
      margin-bottom: 10px;
      border-radius: 20px;
      margin-right: 20px;
      position: relative;
      border: 1px solid #e8e8e8;
      // background: url("../assets/images/编组5.png");s
      overflow: hidden;
      &:hover {
        .mask {
          background: black;
          opacity: 0.2;
        }
      }
      .mask {
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.3;
        position: absolute;
        top: 0px !important;
        text-align: center;
        line-height: 336px;
      }
      .f_name {
        img {
          width: 100%;
          height: 226px;
          display: inline-block;
          vertical-align: middle;
        }
        p {
          width: 100%;
          height: 100%;
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 30px;
          position: absolute;
          top: 1px;
          text-align: center;
          line-height: 336px;
        }
      }
      span {
        display: block;
        font-size: 14px;
        color: #7b7b7b;
        font-family: 苹方-简 常规体;
        margin-top: 10px;
      }
      .el-button {
        display: block;
        position: absolute;
        right: 0;
        background: none;
        color: #ff7255;
        border: none;
        bottom: 32px;
        padding: 0px;
        margin: 0px;
        margin-right: 30px;
      }
    }
  }
}
</style>
