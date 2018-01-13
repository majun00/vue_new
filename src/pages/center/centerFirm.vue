<template>
  <div>
    <!--机构认证S-->
    <div class="center_main">
      <div class="center_main_head">
        <div class="min">
          <div class="img"></div>
          <div class="text">
            <h2>您还未进行机构认证，请填写以下信息进行认证。</h2>
            <p>机构认证：用以提升账号安全以及信任等级，认证之后不能进行修改</p>
          </div>
        </div>
      </div>
      <div class="center_main_cet">
        <div class="heads">
          <h3>机构信息</h3>
        </div>
        <div>
          <label>机构名称：
            <i>*</i>
          </label>
          <input v-model="i_name" type="text">
        </div>
        <div>
          <label>机构类型：
            <i>*</i>
          </label>
          <input v-model="i_type" type="text">
        </div>
        <div class="select-group">
          <label>所在行业：
            <i>*</i>
          </label>
          <select v-model="i_industry">
            <option>建筑建材</option>
            <option>医药卫生</option>
            <option>水利水电</option>
            <option>交通运输</option>
            <option>信息产业</option>
          </select>
        </div>
        <div>
          <label>组织机构代码证：
            <i>*</i>
          </label>
          <input v-model="i_code" type="text">
        </div>
        <div>
          <label>法定代表人：
            <i>*</i>
          </label>
          <input v-model="i_legal" type="text">

        </div>
        <div>
          <label>注册资本：
            <i>*</i>
          </label>
          <input v-model="i_registe" type="text">
        </div>
        <div>
          <label>成立日期：
            <i>*</i>
          </label>
          <input v-model="i_time" type="text">
        </div>
        <div>
          <label>营业期限：
            <i>*</i>
          </label>
          <input v-model="i_limit" type="text">
        </div>
        <div class="textarea-group">
          <label>经营范围：
            <i>*</i>
          </label>
          <textarea v-model="i_range"></textarea>
        </div>
        <div class="select-group">
          <label>公司地址：
            <i>*</i>
          </label>
          <div class="setsite-inputbox clearfix">
            <area-select :level='2' type='text' v-model="addresses"></area-select>
            <textarea class="input-box textarea-box" v-model="address" placeholder="填写详细地址"></textarea>
          </div>
        </div>
        <div>
          <label>公司电话：
            <i>*</i>
          </label>
          <input v-model="i_phone" type="text">
        </div>
        <div class="file-group">
          <label>上传营业执照：
            <i>*</i>
          </label>
          <div class="upload">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <s>照片支持jpg、gif、bmp、png格式，图片最大不超过2M。</s>
          </div>
        </div>
        <div>
          <a href="javascript:;" class="am-btn am-btn-primary upbtn" v-on:click="post">上传</a>
          <p v-if="showTip" v-text="tip" style="width:100%;text-align: center;font-size: 12px;color:red;margin-top:5px"></p>
        </div>
      </div>
    </div>
    <!--机构认证E-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tip: "",
      showTip: false,
      uid: "19",
      imageUrl: "",
      i_name: "",
      i_type: "",
      i_industry: "医药卫生",
      i_code: "",
      i_legal: "",
      i_registe: "",
      i_time: "",
      i_limit: "",
      i_range: "",
      // i_province: "省",
      // i_city: "市",
      // i_county: "县",
      i_phone: "",
      address: "",
      addresses: []
    };
  },
  computed: {
    // i_addr() {
    //   return this.addresses.join("") + this.address;
    // }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(file)
      console.log(this.imageUrl)
    },
    beforeAvatarUpload(file) {
      const loading = this.$loading({
        lock: true,
        text: "正在上传中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    //发送请求
    post() {
      let data = {
        uid: this.uid,
        i_name: this.i_name,
        i_type: this.i_type,
        i_industry: this.i_industry,
        i_code: this.i_code,
        i_legal: this.i_legal,
        i_registe: this.i_registe,
        i_time: this.i_time,
        i_limit: this.i_limit,
        i_range: this.i_range,
        i_province: this.addresses[0],
        i_city: this.addresses[1],
        i_county: this.addresses[2],
        i_addr: this.address,
        i_phone: this.i_phone,
        img3: this.imageUrl
      };
      console.log(data);
      this.axios.post("/url/api/account/institution", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "机构认证审核提交成功,等待审核"
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
<style scoped src="../../assets/css/center_bindfirm.css"></style>
<style scoped lang="scss">
.setsite-inputbox {
  display: inline-block;
  vertical-align: top;
  margin-top: -10px;
  margin-left: -10px;
  textarea {
    margin-left: 10px;
    height: 50px;
  }
}

.select-group {
  margin-top: 20px;
}

.upload {
  margin-left: 206px;
  s {
    margin-left: 0;
  }
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
