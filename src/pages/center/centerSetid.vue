<template>
  <div>
    <div class="center_main">
      <!--身份验证s-->
      <div class="main-top">
        <div class="main-top-hader">
          <div class="main-top-hader-l">
            <span class="l-span">
              <img src="../../assets/images/tishi.png">
            </span>
          </div>
          <div class="main-top-hader-r">
            <p class="main-top-hader-r-h headline">您还未进行身份认证，请填写以下信息进行验证。</p>
            <p class="main-top-hader-r-b moreline">实名认证：个人身份证，用以提升账号安全及信任等级，认证之后不能进行更改。</p>
          </div>
        </div>
        <div class="main-top-cent">
          <p class="headline main-top-cent-h">身份信息</p>
        </div>
      </div>
      <div class="main-bottom">
        <div class="main-bottom-inpbox">
          <div class="main-bottom-inpbox-l">
            <label class="input-label " for="">真实姓名：</label>
            <span class="input-span">*</span>
            <input v-model="userinfo.id_name" class="input-box right-box" type="text">
          </div>
          <div class="main-bottom-inpbox-r">
            <p class="moreline input-box-line">请填写身份证上姓名，它也是您在本站上使用的银行卡的开户姓名。</p>
          </div>
        </div>
        <div class="main-bottom-inpbox">
          <div class="main-bottom-inpbox-ll">
            <label class="input-label" for="">身份证号码：</label>
            <span class="input-span">*</span>
            <input v-model="userinfo.cart" class="input-box right-box id-box" type="text">
          </div>
        </div>
        <div class="main-bottom-inpbox file-inpbox upload-box">
          <div class="main-bottom-inpbox-l file-inpbox-l file-inpboxs">
            <label class="input-label file-input-label" for="">上传身份证：</label>
            <span class="input-span file-span">*</span>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove" multiple :limit="2" :on-exceed="enough">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" size="tiny">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <!-- <span class="file-input-bg file-input-bg-m">
              <input class="file-input" type="file">
            </span>
            <span class="file-input-bg">
              <input class="file-input" type="file">
            </span> -->
          </div>
        </div>
        <!-- <div class="main-bottom-inpbox resinbox">
          <p class="morelinemin resinbox-pos resinbox-pos-1">身份证正面照</p>
          <p class="morelinemin resinbox-pos">身份证反面照</p>
        </div> -->

      </div>
      <div class="main-showcar">
        <div class="main-bottom-inpbox-r file-inpbox-r file-inpboxs" style="background-color:#fff">
          <p class="moreline file-box-line">照片支持jpg、gif、bmp、png格式，图片最大不要超过2M。</p>
        </div>
        <div class="main-showcar-cent-1">
          <p class="moreline main-showcar-cent-head">身份证正面照</p>
          <p class="morelinemin main-showcar-cent-text">需要能看清姓名、身份证号等信息。</p>
          <img src="../../assets/images/timg (2).png">
          <p class="moreline main-showcar-sl">示例</p>
        </div>
        <div class="main-showcar-cent-2">
          <p class="moreline  main-showcar-cent-head">身份证反面照</p>
          <p class="morelinemin  main-showcar-cent-text">需要能看清有效日期等信息。</p>
          <img src="../../assets/images/timg (1).png">
          <p class="moreline main-showcar-sl main-showcar-sl-2">示例</p>
        </div>
      </div>
      <div class="main-btn">
        {{dialogImageUrl}}
        <a @click="save" class="savebtn" href="javascript:;">
          <p class="pp">保存</p>
        </a>
        <p v-if="showTip" v-text="tip" style="width:100%;text-align: center;font-size: 12px;color:red;margin-top:5px"></p>
      </div>
      <!--身份验证e-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tip: "",
      showTip: false,
      dialogImageUrl: "",
      dialogVisible: false,
      userinfo: {
        uid: "1",
        id_name: "",
        id_cart: "",
        img1: "img1",
        img2: "img2"
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    enough() {
      this.$message({
        showClose: true,
        message: "上传正反两面就够啦",
        type: "warning"
      });
    },
    save() {
      let data = this.userinfo;
      this.axios.post("/url/api/account/identity", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "实名认证审核提交成功,等待审核"
          });
          this.$router.push("/center");
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css" src="../../assets/css/verificationid.css"></style>
<style scoped lang="scss">

</style>
