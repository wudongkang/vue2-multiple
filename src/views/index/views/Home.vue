<template>
  <el-container>
    <banner />
    <el-header height="0"></el-header>
    <el-main>
      <div
        class="home"
        v-loading="loading"
        id="home"
      >
        <p class="main-banner-left"></p>
        <p class="main-banner-right"></p>
        <el-row>
          <p class="homeTitle">{{homeList.title}}</p>
          <el-col
            :span="8"
            v-for="(item,index) in homeList.list"
            :key="index"
          >
            <div
              class="grid-content bg-purple "
              :class="{clear_r:(index - 1 )% 3 ==1
              , ' animate__animated animate__pulse': animateSatas === index}"
              @mousemove="animate(index)"
              @mouseout="animateout(index)"
            >
              <div class="f_name">
                <img
                  :src="item.img_url"
                  alt=""
                >
                <p>
                  {{item.name}}
                </p>
              </div>
              <span>
                {{item.content}}
              </span>
              <el-button
                type="primary"
                :class="{'grid-contentHover' : animateSatas === index}"
              >立即入驻
                <i class="el-icon-arrow-right el-icon--right"></i>
              </el-button>
            </div>
          </el-col>
        </el-row>
        <el-row class="lsat-row">
          <p class="homeTitle">{{caseList.title}}</p>
          <el-col
            :span="8"
            v-for="(item,index) in caseList.list"
            :key="index"
          >
            <div
              class="grid-content bg-purple"
              :class="{clear_r:(index - 1 )% 3 ==1
              , ' animate__animated animate__pulse ': animateSatas === item.id}"
              @mousemove="animate(item.id)"
              @mouseout="animateout(item.id)"
            >
              <div class="f_name">
                <img
                  :src="item.img_url"
                  alt=""
                >
                <p>
                  {{item.name}}
                </p>
              </div>
              <span>
                {{item.content}}
              </span>
              <el-button
                type="primary"
                :class="{'grid-contentHover' : animateSatas === item.id}"
              >立即入驻
                <i class="el-icon-arrow-right el-icon--right"></i>
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div
        class="main-two"
        id="main-two"
      >
        <p class="main-two-banner-left"></p>
        <p class="main-two-banner-right"></p>
        <p class="main-two-title">
          共建搭建康大数据生态库
        </p>
        <el-row>
          <el-col :span="12">
            <div class="main-two-shell">
              <div class="grid-content">
                <p>医城汇合作</p>
                <p>医城汇大健康产业合作人
                  平台，促进整个搭建生态
                  建设。</p>
                <el-button
                  type="primary"
                  @click="jump"
                >立即入驻
                  <i class="el-icon-arrow-right el-icon--right"></i>
                </el-button>
              </div>
              <div
                class="main-two-img"
                id="animate_img2"
                :class="{ ' animate__animated animate__tada': animateBoll == 2}"
                @mousemove="animateboll(2)"
                @mouseout="animateoutboll(2)"
              >
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="main-two-shell">
              <div class="grid-content ">
                <p>医据汇合作</p>
                <p>
                  医据汇健康大数据系统，
                  促进医药、医疗体制的完
                  善与进步。</p>
                <el-button type="primary">立即入驻
                  <i class="el-icon-arrow-right el-icon--right"></i>
                </el-button>
              </div>
              <div
                class="main-two-img2"
                :class="{ ' animate__animated animate__tada': animateBoll === 1}"
                @mousemove="animateboll(1)"
                @mouseout="animateoutboll(1)"
              >
              </div>
            </div>
          </el-col>
        </el-row>
        <p class="main-two-Ftitle">
          诚邀您与医健宝共同构建大健康生态｜让关爱和健康变得简单
        </p>
      </div>
      <div
        class="main-three"
        id="main-three"
      >
        <p class="main-three-title">{{BusinessList.title}}</p>
        <el-row>
          <el-col
            :span="4"
            :offset="index > 0 ? 1 : 0"
            v-for="(item,index) in BusinessList.list"
            :key="index"
          >
            <div class="grid-content">
              <div class="main-three-img">
                <img
                  :src="item.img_url"
                  alt=""
                >
              </div>
              <p>{{item.name}}</p>
              <p>{{item.content}}</p>
            </div>
          </el-col>
        </el-row>
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
      <!-- <sellFooter></sellFooter> -->
    </el-main>
  </el-container>

</template>

<script>
import Banner from "../components/Banner";
export default {
  name: "HelloWorld",
  components: {
    Banner,
  },
  data() {
    return {
      loading: false,
      homeList: {
        title: "打造智能用药生态",
        list: [
          {
            name: "医联宝合作",
            content:
              "医联宝企业私欲流量运营平台，全面升级企业微信，精细化客户管理，高效社群运营，让管理和营销更简单！",
            img_url: require("../assets/image/医联宝.png"),
          },
          {
            name: "蜂巢合作",
            content:
              "蜂巢数字化智能药店管理系统，重构药店营销场景，上线+线下精准定位消费者、店内+店外实时触达、零售+服务强化消费体验。",
            img_url: require("../assets/image/蜂巢.png"),
          },
          {
            name: "药云仓合作",
            content:
              "药云仓商家入驻平台，直链消费者，通过数字精准经销，加快药品研发成果向生产力转化的步伐。",
            img_url: require("../assets/image/药云仓.png"),
          },
        ],
      },
      caseList: {
        title: "打造数字化医疗服务生态",
        list: [
          {
            name: "医院通合作",
            content:
              "医院通互联网医院系统，帮助医疗结构打破转筒医疗服务的时空距离，为患者提供无边界闭环医疗服务。",
            img_url: require("../assets/image/医院通.png"),
            id: 333,
          },
          {
            name: "医云通合作",
            content: "医云通医生在线职业服务平台，缩短医生与患者的距离。",
            img_url: require("../assets/image/医云通.png"),
            id: 444,
          },
          {
            name: "医盟通合作",
            content:
              "医盟通医生联盟论坛，推动中国医改纵深发展为使命，营造名医成长社会氛围，提升整体医疗服务水平。",
            img_url: require("../assets/image/医盟通.png"),
            id: 555,
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
      animateBoll: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    //新窗口打开新窗口跳转路由
    jump() {
      // let routeData = this.$router.resolve({
      //   name: "ecity",
      //   router: "ecity",
      //   // query: { species: "" },
      // });
      window.open("ecity.html", "_blank");
      // window.open(window.location.href + "/ecity.html#/", "_blank");
    },
    // 以id为筛选条件进行动画展示
    animate(e) {
      this.animateSatas = e;
      // animate__animated animate__bounce
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
  background: #f9f9f9;
  overflow: hidden;
  .home {
    max-width: 1200px;
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
    @-webkit-keyframes rotation {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }

    .main-banner-left {
      -webkit-transform: rotate(180deg);
      animation: rotation 45s linear infinite;
      -moz-animation: rotation 45s linear infinite;
      -webkit-animation: rotation 45s linear infinite;
      -o-animation: rotation 45s linear infinite;
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

    @-webkit-keyframes rotation {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(-360deg);
      }
    }

    .main-banner-right {
      -webkit-transform: rotate(180deg);
      animation: rotation 60s linear infinite;
      -moz-animation: rotation 60s linear infinite;
      -webkit-animation: rotation 60s linear infinite;
      -o-animation: rotation 60s linear infinite;
    }
    .homeTitle {
      text-align: center;
      margin: 74px;
      font-size: 28px;
    }
    .clear_r {
      background: red;
      margin-right: 0px;
    }
    .lsat-row {
      margin-bottom: 74px;
    }
    .grid-content {
      height: 188px;
      background: #fff;
      padding: 34px 20px;
      margin-bottom: 10px;
      border-radius: 20px;
      margin-right: 20px;
      position: relative;
      // 跑马灯

      .f_name {
        img {
          display: inline-block;
          vertical-align: middle;
        }
        p {
          display: inline-block;
          font-weight: 500;
          font-size: 20px;
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
    .grid-contentHover {
      cursor: pointer;
      /* transform属性 */
      transform: translate(10px, 0);
      // transform: translateZ();

      /* 第一个参数指定X轴的位移量,必填, 第二个参数指定Y轴的位移量,不必填 默认0*/
    }

    // .grid-content {
    //   // border: 1px solid #333;
    //   // outline: 1px solid #333;
    //   outline-offset: -1px;
    //   transition: all 0.3s linear;
    //   cursor: pointer;

    //   &:hover {
    //     // border: 1px solid transparent;
    //     outline: 1px solid transparent;
    //     background: linear-gradient(90deg, #e01414 50%, transparent 0) repeat-x,
    //       linear-gradient(90deg, #e01414 50%, transparent 0) repeat-x,
    //       linear-gradient(0deg, #e01414 50%, transparent 0) repeat-y,
    //       linear-gradient(0deg, #e01414 50%, transparent 0) repeat-y;
    //     background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
    //     background-position: 0 0, 0 100%, 0 0, 100% 0;
    //     animation: linearGradientMove 0.3s infinite linear;
    //   }
    // }
    // .grid-content:hover {
    //   cursor: pointer;
    //   /* transform属性 */
    //   transform: translate(0, -20px);
    //   /* 第一个参数指定X轴的位移量,必填, 第二个参数指定Y轴的位移量,不必填 默认0*/
    // }
  }
  .main-two {
    width: 100%;
    margin: 0 auto;
    height: 528px;
    background: #ffffff;
    position: relative;
    .main-two-title {
      width: 308px;
      height: 28px;
      margin: 0 auto;
      padding-top: 74px;
      text-align: center;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #1f2229;
      line-height: 28px;
    }
    .main-two-Ftitle {
      width: 648px;
      height: 24px;
      font-size: 24px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #919caa;
      line-height: 24px;
      margin: 0 auto;
      margin-top: 50px;
    }
    .main-two-banner-left {
      width: 555px;
      height: 492px;
      background: url("../assets/image/椭圆形.png") no-repeat;
      // background-position:right bottom;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .el-row {
      width: 1200px;
      margin: 0 auto;
      margin-top: 48px;
      .el-col {
        background: #ffffff;
        .main-two-shell {
          // width: 98%;
          // max-width: 590px;
          margin-left: 20px;
          height: 256px;
          box-shadow: 0px 0px 20px 0px rgba(221, 221, 221, 0.5);
          border-radius: 16px;
          overflow: hidden;
          .grid-content {
            width: 220px;
            margin-left: 33px;
            padding-top: 57px;
            float: left;
            position: absolute;
            p {
              height: 20px;
              font-size: 20px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #21272e;
              line-height: 20px;
            }
            p:nth-child(2) {
              margin-top: 21px;
              width: 154px;
              height: 66px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #7b7b7b;
              line-height: 22px;
            }
            .el-button {
              width: 64px;
              background: none;
              border: none;
              padding-left: 0;
              height: 16px;
              font-size: 16px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #ff7255;
              line-height: 16px;
            }
          }
          .main-two-img {
            height: 256px;
            background: url("../assets/image/配图1.png") no-repeat;
            background-position: center right;
            background-size: 100% 100%;
            width: 63%;
            float: right;
          }
          .main-two-img2 {
            height: 256px;
            background: url("../assets/image/配图2.png") no-repeat;
            background-position: center right;
            background-size: 100% 100%;
            width: 63%;
            float: right;
          }
        }
      }
    }
  }
  .main-three {
    height: 488px;
    background: url("../assets/image/背景2.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 74px;
    .main-three-title {
      width: 112px;
      height: 28px;
      margin: 0 auto;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 28px;
    }
    .el-row {
      width: 1200px;
      margin: 0 auto;
      margin-top: 48px;
      .grid-content {
        min-width: 220px;
        height: 326px;
        background: #fff;
        border-radius: 8px;
        .main-three-img {
          width: 100%;
          height: 156px;
          display: inline-block;
          border: none;
          img {
            width: 100%;
            height: 156px;
            display: inline-block;
            border: none;
          }

          // background: url('../assets/image/1.png') no-repeat;
        }
        p {
          // width: 100%;
          height: 20px;
          font-size: 20px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
          line-height: 20px;
          text-align: center;
          margin-top: 32px;
        }
        p:nth-child(3) {
          // width: 185px;
          height: 44px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #7b7b7b;
          line-height: 22px;
          margin: 16px 0 0 18px;
          text-align: left;
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
          padding: 0 0 0 18px;
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
}
</style>
