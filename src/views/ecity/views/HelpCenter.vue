<template>
  <div class="helpBox">
    <p class="helpBox_title">热门问题</p>
    <el-tabs
      v-model="activeName"
      tab-position="left"
      stretch
      @tab-click="handleClick"
    >
      <template v-for="(items,indexs) in tabList">
        <el-tab-pane
          :label=items.label
          :name=indexs.toString()
          :key="indexs"
        >
          <div
            v-for="(item,index) in items.children"
            :key="index"
            class="tab_right"
          >
            <p class="tab_right_title">{{item.title}}</p>
            <div class="tab_right_content">
              <p class="tab_right_headings">{{item.headings}}</p>
              <div
                v-for="(i,x) in item.content"
                :key="x"
                class="tab_right_problem"
              >
                <p>{{i.problem}}</p>
                <p>{{i.answer}}</p>
              </div>
              <img
                :src="item.img_url"
                alt=""
              >
            </div>
          </div>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "0",
      tabList: [
        {
          label: "招商入驻",
            children: [
            {
              title: "商家在线入驻有哪些注意事项？",
              headings: "注意事项：",
              content: [
                {
                  problem:
                    "1.如果我已在官网提交信息，啥时候审核通过 分配合伙人后台？",
                  answer:
                    "如果您已经提交信息，耐心等待审核1-2工作日，客服会打电话或者邮件通知您。",
                },
              ],
              img_url: require("../assets/images/help.png"),
            },
          ],
          img_url: require("../assets/images/背景3.png"),
        },
        {
          label: "合作模式",
          children: [
            // {
            //   title: "商家在线入驻有哪些注意事项？",
            //   headings: "注意事项：",
            //   content: [
            //     {
            //       problem:
            //         "1.如果我已在官网提交信息，啥时候审核通过 分配合伙人后台？",
            //       answer:
            //         "如果您已经提交信息，耐心等待审核1-2工作日，客服会打电话或者邮件通知您。",
            //     },
            //   ],
            //   img_url: require("../assets/images/help.png"),
            // },
          ],
        },
        {
          label: "平台分账规则",
          children: [
            // {
            //   title: "商家在线入驻有哪些注意事项？",
            //   headings: "注意事项：",
            //   content: [
            //     {
            //       problem:
            //         "1.如果我已在官网提交信息，啥时候审核通过 分配合伙人后台？",
            //       answer:
            //         "如果您已经提交信息，耐心等待审核1-2工作日，客服会打电话或者邮件通知您。",
            //     },
            //   ],
            //   img_url: require("../assets/images/背景3.png"),
            // },
          ],
        },
        {
          label: "运营技巧",
          children: [
            // {
            //   title: "商家在线入驻有哪些注意事项？",
            //   headings: "注意事项：",
            //   content: [
            //     {
            //       problem:
            //         "1.如果我已在官网提交信息，啥时候审核通过 分配合伙人后台？",
            //       answer:
            //         "如果您已经提交信息，耐心等待审核1-2工作日，客服会打电话或者邮件通知您。",
            //     },
            //   ],
            //   img_url: require("../assets/images/背景3.png"),
            // },
          ],
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss">
.helpBox {
  width: 1200px;
  padding: 38px 0;
  margin: 0 auto;
  .helpBox_title {
    width: 186px;
    padding: 20px 20px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 20px;
    background: #fafafa;
  }
  .helpBox .el-tabs__active-bar {
    background-color: transparent;
  }
  .el-tabs--left .el-tabs__item.is-left {
    text-align: left;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 40px;
  }
  .el-tabs--left .el-tabs__item.is-active {
    color: #28dda5;
  }
  .el-tabs--left .el-tabs__header {
    width: 226px;
    height: 652px;
    background: #fafafa;
  }
  .el-tabs--left .el-tabs__nav-wrap.is-left::after,
  .el-tabs--left .el-tabs__nav-wrap.is-right::after,
  .el-tabs--right .el-tabs__nav-wrap.is-left::after,
  .el-tabs--right .el-tabs__nav-wrap.is-right::after {
    height: 0px;
  }
  .el-tabs .tab_right {
    margin-top: 56px;
    margin-left: 56px;
    .tab_right_title {
      font-size: 22px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #21272e;
      line-height: 22px;
      border-bottom: 1px solid #d8d8d8;
      padding-bottom: 38px;
    }
    .tab_right_content {
      padding-top: 38px;
      .tab_right_headings {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 20px;
      }
      .tab_right_problem {
        p {
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #7b7b7b;
          line-height: 20px;
          margin-top: 34px;
        }
      }
      img {
        width: 100%;
        height: 172px;
        margin-top: 34px;
      }
    }
  }
  .el-tabs .tab_right:nth-child(1) {
    margin-top: 0px;
  }
}
</style>
