<template>
  <el-container>
    <el-main>
      <!-- Main content -->
      <div class="box">
        <p class="station_title">申请入驻信息</p>
        <!-- <el-form :inline="false"
                 ref="form"
                 :model="form"
                 :rules="rules"
                 label-width="150px"
                 style="width:880px"
                 class="demo-form-inline">
          <el-form-item label="联系人"
                        prop="name">
            <el-input v-model="form.name"
                      class="input"
                      clearable
                      placeholder="请输入联系人姓名"
                      maxlength="100"
                      type="text"></el-input>
          </el-form-item>
        </el-form> -->
        <el-form
          :model="form"
          ref="form"
          label-width="130px"
          :inline="false"
          size="normal"
          :rules="rules"
          class="demo-form-inline"
        >
          <el-form-item
            prop="contacter"
            label="联系人"
          >
            <el-input
              placeholder="请输入您的姓名"
              v-model="form.contacter"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="mobile"
            label="手机号"
          >
            <el-input
              placeholder="请输入您的手机号"
              v-model="form.mobile"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="选择行业"
            prop="industry"
          >
            <el-select
              v-model="form.industry"
              placeholder="请选择您的行业"
            >
              <el-option
                v-for="(item,index) in this.industryData"
                :key="index"
                :label="item.name"
                :value="item.uuid"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="选择等级"
            prop="classifylevel"
          >
            <el-radio-group v-model="form.classifylevel">
              <el-radio label="1">省级（一级）</el-radio>
              <el-radio label="2">地级（二级）</el-radio>
              <el-radio label="3">区县（三级）</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="选择分类"
            class="cation"
            prop="classify1st"
          >
            <el-radio-group>
              <el-select
                v-model="form.classify1st"
                placeholder="省"
                @change="provinceChange"
              >
                <el-option
                  v-for=" items in areaInfo"
                  :key="items.uuid"
                  :label="items.name"
                  :value="items.uuid"
                ></el-option>
              </el-select>
              <el-select
                v-model="form.classify2nd"
                placeholder="市"
                v-show="form.classifylevel == 'classify2nd' || form.classifylevel == 'classify3rd'"
                @change="cityChange"
              >
                <el-option
                  v-for="item in cityData"
                  :key="item.uuid"
                  :label="item.name"
                  :value="item.uuid"
                ></el-option>

              </el-select>
              <el-select
                v-model="form.classify3rd"
                placeholder="区/县"
                v-show="form.classifylevel == 'classify3rd' "
                @change="countryChange"
              >
                <el-option
                  v-for="item in countryData"
                  :key="item.uuid"
                  :label="item.name"
                  :value="item.uuid"
                ></el-option>
              </el-select>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            prop="legalPerson"
            label="法人姓名"
          >
            <el-input
              placeholder="请输入法人姓名"
              v-model="form.legalPerson"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="legalPersonIdCard"
            label="法人身份证号"
          >
            <el-input
              placeholder="请输入法人的身份证号"
              v-model="form.legalPersonIdCard"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="el-button-ruzhu"
              @click="onSubmit('form')"
            >申请入驻</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>

</template>

<script>
export default {
  data() {
    return {
      form: {
        // 姓名
        contacter: "",
        // 手机
        mobile: "",
        // 行业
        industry: "",
        // 等级
        classifylevel: "1",
        type: [],
        // 省
        classify1st: "",
        // 市
        classify2nd: "",
        // 县
        classify3rd: "",
        desc: "",
        // 法人姓名
        legalPerson: "",
        // 身份证号
        legalPersonIdCard: "",
      },
      rules: {
        contacter: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机格式有误",
            trigger: "blur",
          },
        ],
        industry: [
          { required: true, message: "请选择行业", trigger: "change" },
        ],
        classifylevel: [
          { required: true, message: "请选择行业", trigger: "change" },
        ],
        classify1st: [
          { required: true, message: "请选择省份", trigger: "change" },
        ],
      },
      // 省下拉数据
      areaInfo: [],
      // 市下拉数据
      cityData: [],
      // 县下拉数据
      countryData: [],
      // 行业数据
      industryData: [],
    };
  },
  created() {
    // this.areaInfo = areaInfo;
    // console.log();
    // 获取行业信息
    this.$http.get("appRegister/getListIndustry").then((res) => {
      this.industryData = res.data.data;
      console.log(this.industryData);
    });
    // 获取省市区信息
    this.$http.get("appRegister/getRegionByParentId").then((res) => {
      console.log(res);
      this.areaInfo = res.data.data;
    });
  },
  mounted() {},
  methods: {
    onSubmit(form) {
      // todo
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$http.post("appRegister", this.form).then((res) => {
            if (res.data.resp_code == 0) {
              // 重置表单
              this.$refs[form].resetFields();
              this.$alert(
                "您的信息提交成功正在审核中，稍后有客服联系您及时查收邮件。",
                "您的信息，已提交成功",
                {
                  // roundButton: true,
                  center: true,
                  confirmButtonText: "确定",
                }
              );
            } else if (res.data.resp_code == 1) {
              this.$message.error(res.data.resp_msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    provinceChange(e) {
      console.log(e);
      // 获取市区信息
      new Promise(() => {
        this.$http
          .get("appRegister/getRegionByParentId?parentId=" + e)
          .then((res) => {
            console.log(res.data.data);
            this.cityData = res.data.data;
          });
      });
      this.form.classify2nd = "";
      this.form.classify3rd = "";
    },
    cityChange(e) {
      // 获取区县信息
      new Promise(() => {
        this.$http
          .get("appRegister/getRegionByParentId?parentId=" + e)
          .then((res) => {
            console.log(res.data.data);
            this.countryData = res.data.data;
          });
      });
      this.form.classify3rd = "";
    },
    countryChange(e) {
      // todo
      console.log(e);
    },
    // 上传文件移除钩子
    handleRemove() {},
    // 上传文件钩子
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
  },
};
</script>

<style lang="scss" >
.el-container {
  .el-main {
    background: #fafafa;
    .box {
      margin-top: 30px;
      background: #ffffff;
      height: 1040px;
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 30px;
      .station_title {
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #1f2229;
        line-height: 28px;
        text-align: center;
        margin-top: 38px;
        padding-top: 74px;
        padding-bottom: 48px;
      }
      .el-form {
        width: 60%;
        margin: 0 auto;
        .cation {
          .el-col {
            padding: 10px;
          }
        }
        .el-icon-circle-plus {
          font-size: 63px;
          line-height: 110px;
        }
        .card {
          position: absolute;
          left: 13px;
          top: 40px;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #c9c9ca;
        }
        .el-radio-group {
          .el-select {
            width: 160px;
            margin-right: 20px;
          }
        }
        .el-button-ruzhu {
          width: 178px;
          height: 74px;
          background: linear-gradient(287deg, #ff8a58 0%, #ff7255 100%);
          border-radius: 8px;
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 30px;
          padding: 0;
          margin: 0;
          border: none;
        }
        .el-button-ruzhu:hover {
          background: linear-gradient(287deg, #ff8a58 0%, #ff7255 100%);
          // border-radius: 8px;
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 30px;
          border: none;
        }
      }
    }
  }
}
.el-upload--picture-card {
  position: relative;
  width: 190px;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 190px;
}

.el-message-box {
  .el-button {
    width: 108px;
    height: 44px;
    background: #0cdaa4;
    border: none;
    border-radius: 4px;
  }
}
</style>
