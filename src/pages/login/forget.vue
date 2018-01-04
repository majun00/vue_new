<template>
  <div>
    <!--头部-->
    <app-head></app-head>

    <div class="section" style="height:auto;border-top:0;">
      <div class="container">
        <div style="padding-left: 200px" class="forget">
          <div class="tain">
            <h2 class="lock">忘记密码</h2>
          </div>
          <form class="" action="" method="post">
            <div class="box">
              <ul class="box-ul">
                <li class="li_first">
                  <label>
                    <i>*</i>
                    <span>验证方式</span>
                  </label>
                  <input v-model="type" class="user_phone" type="radio" name="user_type" value="0" checked/>手机验证&nbsp;&nbsp;&nbsp;
                  <input v-model="type" class="user_email" type="radio" name="user_type" value="1">邮箱验证
                </li>

                <li v-if="type==0" class="forget_phone">
                  <label>
                    <i>*</i>
                    <span>手机号码</span>
                  </label>
                  <input v-model="phone" type="text" class="mobile list_tel" name="email" placeholder="请输入11位手机号码" value="" maxlength="11"
                  />
                  <span>请输入您注册使用的手机号</span>
                  <div class="tips"></div>
                </li>

                <li v-if="type==1" class="forget_email">
                  <label>
                    <i>*</i>
                    <span>邮箱地址</span>
                  </label>
                  <input v-model="email" type="text" placeholder="请输入正确格式的邮箱地址" value="" />
                  <span>请输入您绑定的邮箱地址</span>
                  <div class="tips"></div>
                </li>

                <li v-if="type==0">
                  <label>
                    <i>*</i>
                    <span>验证码</span>
                  </label>
                  <input v-model="code" type="text" name="verify" placeholder="请输入手机验证码">
                  <span>
                    <a v-text="showPin" @click="getPin" href="javascript:;" :class="{gray:isActive}" class="button active" style="line-height: 2;"></a>
                  </span>
                </li>

                <li v-if="type==1">
                  <label>
                    <i>*</i>
                    <span>验证码</span>
                  </label>
                  <input type="text" name="verify" placeholder="请输入邮箱验证码">
                  <span>
                    <a v-text="showPin1" @click="getEmailPin" href="javascript:;" :class="{gray:isActive1}" class="button active" style="line-height: 2;"></a>
                  </span>
                </li>

                <li>
                  <label>
                    <i>*</i>
                    <span>新密码</span>
                  </label>
                  <input v-model="new_pwd" id="password" class="input-style pwd_change list_pwd" size="30" maxlength="30" name="password" type="password"
                    placeholder="密码" />
                  <span>请输入由字母和数字组成的6-18个字符</span>
                  <div id="level" class="pw-strength">
                    <div class="pw-bar"></div>
                    <div class="pw-bar-on"></div>
                    <div class="pw-txt">
                      <span>弱</span>
                      <span>中</span>
                      <span>强</span>
                    </div>
                  </div>
                </li>
                <!--                         <li class="color_change">
                                    <span class="password_border1"></span>
                                    <span class="password_border2"></span>
                                    <span class="password_border3"></span>
                                </li> -->
                <li>
                  <label>
                    <i>*</i>
                    <span>确认新密码</span>
                  </label>
                  <input v-model="rnew_pwd" id="spassword" class="input-style list_spwd" size="30" maxlength="30" name="password" type="password"
                    placeholder="确认密码" />
                  <span>请再次输入密码，两次必须相同</span>
                </li>
                <li>
                  <movebox></movebox>
                </li>

                <li v-if="type==0" style="margin-bottom:40px;">
                  <input @click="forget_phone"  type="submit" value="确 认" class="btn" style="float:none" />
                  <p v-if="showTip" v-text="tip" style="width:618px;text-align: center;font-size: 12px;color:red;margin-top:5px"></p>
                </li>

                <li v-if="type==1" style="margin-bottom:40px;">
                  <input @click="forget_email" type="submit" value="确 认" class="btn" style="float:none" />
                  <p v-if="showTip" v-text="tip" style="width:618px;text-align: center;font-size: 12px;color:red;margin-top:5px"></p>
                </li>

                <!--                         <li>
                                                            <label>
                                                                <i>*</i>
                                                                <span>手机号：</span>
                                                            </label>
                                                            <input type="text" class="mobile" name="mobile" placeholder="请输入11位手机号码" value="" maxlength="11"/><span></span>
                                                            <div class="tips"></div>
                                                        </li>
                                                         <li>
                                                            <label>
                                                                <i>*</i>
                                                                <span>单位名称：</span>
                                                            </label>
                                                            <input type="text"  name="nickname" placeholder="请输入单位名称" value="" maxlength="11"/><span>须验证，注册后不可更改</span>
                                                            <div class="tips"></div>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <i>*</i>
                                                                <span>请设置登录密码：</span>
                                                            </label>
                                                            <input id="password" class="input-style" size="30" maxlength="30" name="password" type="password" placeholder="密码"/>
                                                            <span>6-18个字符，请使用字母加数字的组合密码不能单独使用字母、数字或字符</span>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <i>*</i>
                                                                <span>验证码：</span>
                                                            </label>
                                                           <input type="text" name="verify" placeholder="验证码" style="width:252px;">
                                                                    {:sp_verifycode_img('length=4&font_size=14&width=100&height=34&charset=1234567890&use_noise=1&use_curve=0')}
                                                        </li>
                                                        <li style="margin-left:154px;">
                                                            <input type="checkbox" class="xieyi" checked>
                                                            我已同意服务条款
                                                        </li>
                                                        <li style="margin-bottom:40px;">
                                                            <input type="submit" value="提交注册" class="btn"/>
                                                        </li> -->
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppHead from "../../components/AppHead.vue";
import movebox from "../../components/movebox";

export default {
  components: {
    AppHead,
    movebox
  },
  data() {
    return {
      type: 0,
      tip: "",
      showTip: false,
      showPin: "获取验证码",
      showPin1: "获取验证码",
      pin: "",
      isActive: false,
      isActive1: false,
      phone: "",
      email: "",
      code: "",
      new_pwd: "",
      rnew_pwd: ""
    };
  },
  mounted() {
    //接受协议
    $("#agree i").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass();
        $(".pleaseAgree").show();
      } else {
        $(this).addClass("active");
        $(".pleaseAgree").hide();
      }
    });

    //协议判断
    $(".btn").on("click", function() {
      if ($("#agree i").hasClass("active") == false) {
        $(".pleaseAgree").show();
        return false;
      }
    });

    /*对input进行判断*/
    $(".list_uname").blur(function() {
      if ($(this).val().length == 0) {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("请输入企业或实验室名称");
        $(this)
          .next("span")
          .css("color", "red");
      } else if ($(this).val().length > 0 && $(this).val().length < 4) {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("长度只能在4-20个字符之间");
        $(this)
          .next("span")
          .css("color", "red");
      } else if ($(this).val().length >= 4 && !isNaN($(this).val())) {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("用户名不能为纯数字");
        $(this)
          .next("span")
          .css("color", "red");
      } else {
        $(this)
          .next("span")
          .text(" √ ");
        $(this)
          .next("span")
          .addClass("greenTrue");
      }
    });
    /*密码*/
    $(".list_pwd").blur(function() {
      if ($(this).val().length == 0) {
        $(this)
          .next("span")
          .text("请输入由字母和数字组成的6-18个字符");
        $(this)
          .next("span")
          .css("color", "red");
        $(this)
          .next("span")
          .removeClass("greenTrue");
      } else if ($(this).val().length > 0 && $(this).val().length < 6) {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("长度只能在6-20个字符之间");
        $(this)
          .next("span")
          .css("color", "red");
      } else {
        $(this)
          .next("span")
          .text(" √ ");
        $(this)
          .next("span")
          .addClass("greenTrue");
      }
    });
    //	确认密码
    $(".list_spwd").blur(function() {
      if ($(this).val().length == 0) {
        $(this)
          .next("span")
          .text("请与原密码保持一致");
        $(this)
          .next("span")
          .css("color", "red");
        $(this)
          .next("span")
          .removeClass("greenTrue");
      } else if ($(this).val() != $(".list_pwd").val()) {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("两次密码不匹配");
        $(this)
          .next("span")
          .css("color", "red");
      } else {
        $(this)
          .next("span")
          .text(" √ ");
        $(this)
          .next("span")
          .addClass("greenTrue");
      }
    });
    //	手机号
    $(".list_tel").blur(function() {
      if ($(this).val().length == 0) {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("请输入正确格式的手机号");
        $(this)
          .next("span")
          .css("color", "red");
      } else if (
        $(this)
          .val()
          .match(/^(13[0-9]|14[57]|15[0-9]|17[0-9]|18[0-9])\d{8}$/)
      ) {
        $(this)
          .next("span")
          .text(" √ ");
        $(this)
          .next("span")
          .addClass("greenTrue");
      } else {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("手机号格式不正确");
        $(this)
          .next("span")
          .css("color", "red");
      }
    });

    $(".list_phone").blur(function() {
      if ($(this).val().length == 0) {
        $(this)
          .next("span")
          .text("请输入正确格式的固话或手机");
        $(this)
          .next("span")
          .css("color", "red");
        $(this)
          .next("span")
          .removeClass("greenTrue");
      } else if (
        $(this)
          .val()
          .match(/^((0\d{2,3}-\d{7,8})|(1[35784]\d{9}))$/)
      ) {
        $(this)
          .next("span")
          .text(" √ ");
        $(this)
          .next("span")
          .addClass("greenTrue");
      } else {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("固定电话或手机号格式不正确");
        $(this)
          .next("span")
          .css("color", "red");
      }
    });

    $(".list_idc").blur(function() {
      if ($(this).val().length == 0) {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("请输入正确格式的身份证号码");
        $(this)
          .next("span")
          .css("color", "red");
      } else if (
        $(this)
          .val()
          .match(
            /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
          )
      ) {
        $(this)
          .next("span")
          .text(" √ ");
        $(this)
          .next("span")
          .addClass("greenTrue");
      } else {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("身份证号码格式不正确");
        $(this)
          .next("span")
          .css("color", "red");
      }
    });

    $(".list_society").blur(function() {
      if ($(this).val().length == 0) {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("请输入正确的统一社会信用代码");
        $(this)
          .next("span")
          .css("color", "red");
      } else if (
        $(this)
          .val()
          .match(/[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/)
      ) {
        $(this)
          .next("span")
          .text(" √ ");
        $(this)
          .next("span")
          .addClass("greenTrue");
      } else {
        $(this)
          .next("span")
          .removeClass("greenTrue");
        $(this)
          .next("span")
          .text("统一社会信用代码格式不正确");
        $(this)
          .next("span")
          .css("color", "red");
      }
    });

    //验证码
    $("#password").keyup(function() {
      var strongRegex = new RegExp(
        "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
        "g"
      );
      var mediumRegex = new RegExp(
        "^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
        "g"
      );
      var enoughRegex = new RegExp("(?=.{6,}).*", "g");

      if (false == enoughRegex.test($(this).val())) {
        $("#level").removeClass("pw-weak");
        $("#level").removeClass("pw-medium");
        $("#level").removeClass("pw-strong");
        $("#level").addClass(" pw-defule");
        //密码小于六位的时候，密码强度图片都为灰色
      } else if (strongRegex.test($(this).val())) {
        $("#level").removeClass("pw-weak");
        $("#level").removeClass("pw-medium");
        $("#level").removeClass("pw-strong");
        $("#level").addClass(" pw-strong");
        //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强
      } else if (mediumRegex.test($(this).val())) {
        $("#level").removeClass("pw-weak");
        $("#level").removeClass("pw-medium");
        $("#level").removeClass("pw-strong");
        $("#level").addClass(" pw-medium");
        //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
      } else {
        $("#level").removeClass("pw-weak");
        $("#level").removeClass("pw-medium");
        $("#level").removeClass("pw-strong");
        $("#level").addClass("pw-weak");
        //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的
      }
      return true;
    });
  },
  methods: {
    getPin() {
      let num = 59;
      clearInterval(setsund);
      let setsund = setInterval(() => {
        this.showPin = num + "s后重新发送";
        this.isActive = true;
        num--;
        if (num < 0) {
          clearInterval(setsund);
          this.showPin = "获取验证码";
          this.isActive = false;
        }
      }, 1000);

      if (this.showPin == "获取验证码") {
        this.axios
          .get(`/url/api/user/sendsms?phone=${this.phone}`)
          .then(res => {
            console.log(res);
          });
      }
    },
    getEmailPin() {
      let num = 59;
      clearInterval(setsund);
      let setsund = setInterval(() => {
        this.showPin1 = num + "s后重新发送";
        this.isActive1 = true;
        num--;
        if (num < 0) {
          clearInterval(setsund);
          this.showPin1 = "获取验证码";
          this.isActive1 = false;
        }
      }, 1000);

      if (this.showPin == "获取验证码") {
        console.log(this.email)
        this.axios
          .get(`/url/api/user/getEmailVerify?email=${this.email}`)
          .then(res => {
            console.log(res);
          });
      }
    },
    forget_phone() {
      let data = {
        phone: this.phone,
        new_pwd: this.new_pwd,
        rnew_pwd: this.rnew_pwd,
        code: this.code
      };
      console.log(data);
      this.axios.post("/url/api/user/updatePaswd", data).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$router.push("/login");
        } else {
          this.tip = res.data.msg;
          this.showTip = true;
        }
      });
      //   if (this.newuname == "" || this.newPW == "") {
      //     this.tip = "请输入用户名和密码";
      //   } else {
      //     let date = { username: this.newuname, password: this.newPW };
      //     this.axios.post(api, data).then(res => {
      //       if (res.data == "ok") {
      //         this.username = "";
      //         this.password = "";
      //         this.$router.push("/login");
      //       }
      //     });
      //   }
    },
    forget_email() {
      let data = {
        email: this.email,
        new_pwd: this.new_pwd,
        rnew_pwd: this.rnew_pwd,
        code: this.code
      };
      console.log(data);
      this.axios.post("/url/api/user/updatePwd", data).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$router.push("/login");
        } else {
          this.tip = res.data.msg;
          this.showTip = true;
        }
      });
      //   if (this.newuname == "" || this.newPW == "") {
      //     this.tip = "请输入用户名和密码";
      //   } else {
      //     let date = { username: this.newuname, password: this.newPW };
      //     this.axios.post(api, data).then(res => {
      //       if (res.data == "ok") {
      //         this.username = "";
      //         this.password = "";
      //         this.$router.push("/login");
      //       }
      //     });
      //   }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../../assets/scss/forget.scss"></style>
<style scoped lang="scss">

</style>
