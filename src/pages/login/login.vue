<template>
  <div class="template_login">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="wrap">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/images/logo_o.png" alt="">
        </router-link>
      </div>
      <div class="box">
        <div data-am-widget="tabs" class="am-tabs am-tabs-d2 ologin">
          <div class="am-tabs-bd">
            <div class="am-tab-panel am-active">
              <tabs>
                <el-tab-pane label="密码登录" name="first">
                  <form>
                    <input v-model="username" type="text" class="form-control" placeholder="请输入常用手机号">
                    <input v-model="password" type="password" class="form-control" placeholder="请输入密码">
                    <p class="forget forget_change">
                      <router-link to="/forget" class="blue" style="margin-right:10px">忘记密码</router-link>
                    </p>
                    <div class="move_wrap">
                      <movebox></movebox>
                      <a href="javascript:;" @click="login" class="button active">登 录</a>
                      <p v-if="showTip" v-text="tip" style="text-align: center;font-size: 12px;color:red;margin-top:5px"></p>
                    </div>
                    <p class="forget">
                      <router-link to="/register" class="blue">立即注册</router-link>
                    </p>
                  </form>
                </el-tab-pane>

                <el-tab-pane label="验证码登录" name="second">
                  <form>
                    <input v-model="username" type="text" class="form-control" placeholder="请输入常用手机号">
                    <input v-model="pin" type="password" class="form-control" placeholder="请输入收到的验证码">
                    <p class="forget" style="margin-top:-43px">
                      <a @click="getPin" v-text="showPin" :class="{gray:isActive}" href="javascript:;" class="button active" style="width:100px;font-size:14px;height: 34px;line-height: 34px;"></a>
                    </p>
                    <div class="move_wrap">
                      <movebox></movebox>
                      <a href="javascript:;" @click="loginPin" class="button active">登 录</a>
                      <p v-if="showTip" v-text="tip" style="text-align: center;font-size: 12px;color:red;margin-top:5px"></p>
                    </div>
                    <p class="forget">
                      <router-link to="/register" class="blue">立即注册</router-link>
                    </p>
                  </form>
                </el-tab-pane>
              </tabs>
            </div>
          </div>
          <!--<ul class="am-tabs-nav am-cf">
                        <li class="am-active"><a href="[data-tab-panel-0]">密码登录</a></li>
                        <li class=""><a href="[data-tab-panel-1]">验证码登录</a></li>
                    </ul>
                    <div class="am-tabs-bd">
                        <div data-tab-panel-0 class="am-tab-panel am-active">
                            <form>
                                <input type="email" class="form-control" placeholder="请输入常用手机号/邮箱">
                                <input type="password" class="form-control" placeholder="请输入密码">
                                <p class="forget">
                                    <router-link to="/forget" class="blue">忘记密码</router-link>
                                </p>
                                <router-link to="/" class="button active">登录</router-link>
                            </form>
                        </div>
                        <div data-tab-panel-1 class="am-tab-panel ">
                            <form>
                                <input type="email" class="form-control" placeholder="请输入常用手机号/邮箱">
                                <input type="password" class="form-control" placeholder="请输入收到的验证码">
                                <p class="forget">
                                    <router-link to="/forget" class="blue">忘记密码</router-link>
                                </p>
                                <router-link to="/" class="button active">登录</router-link>

                            </form>
                        </div>
                    </div>-->
        </div>
        <!--                 <div class="register">
                    <p class="p1">还没有账号 :</p>
                    <p class="p2">
                        <router-link to="/signin">
                            <span class="text">立即注册</span>
                            <img class="icon" src="../../assets/images/right_arrow.png" alt="right_arrow">
                        </router-link>
                    </p> 
                </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "../../components/Tabs.vue";
import movebox from "@/components/movebox";
export default {
  components: {
    Tabs,
    movebox
  },
  data() {
    return {
      username: "",
      password: "",
      tip: "",
      showTip: false,
      showPin: "获取验证码",
      pin: "",
      isActive: false
    };
  },
  mounted() {
    /*     if (localStorage.getItem("username")) {
                  this.$router.push("/");
                } */
  },
  methods: {
    login() {
      if (sessionStorage.getItem("move")) {
        let data = {
          phone: this.username,
          password: this.password
        };
        this.axios.post("/url/api/login/index", data).then(res => {
          if (res.data.code == 200) {
            console.log(res.data.data.s_token);
            localStorage.setItem("token", res.data.data.s_token);
            localStorage.setItem("role", res.data.data.role);
            localStorage.setItem("uid", res.data.uid);
            this.$store.commit("saveToken", res.data.data.s_token);
            this.$store.commit("saveUserid", res.data.uid);
            let redirect = decodeURIComponent(
              this.$route.query.redirect || "/"
            );
            this.$router.push({
              path: redirect
            });
            sessionStorage.removeItem("move")
          } else {
            this.tip = res.data.msg;
            this.showTip = true;
          }

          // if (this.username == "" || this.password == "") {
          //   this.tip = "请输入用户名或密码";
          // } else {
          //   let data = {
          //     phone: this.username,
          //     password: this.password
          //   };
          //   this.axios.post("/url/api/login/index", data).then(res => {
          //     console.log(res);
          //     if (res.data == -1) {
          //       this.tip = "该用户不存在";
          //       this.shouwTip = true;
          //     } else if (res.data == 0) {
          //       this.tip = "密码输入错误";
          //       this.shouwTip = true;
          //     } else {
          //       localStorage.setItem("username", this.username);
          //       this.$router.push("/");
          //     }
          //   });
          // }
        });
      }
    },
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
          .get(`/url/api/login/Sendcode?phone=${this.username}`)
          .then(res => {
            console.log(res);
          });
      }
    },
    loginPin() {
      let data = {
        phone: this.username,
        code: this.pin
      };
      console.log(data);
      this.axios.post("/url/api/login/code", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          console.log(res.data.data);
          localStorage.setItem("token", res.data.data.s_token);
          localStorage.setItem("role", res.data.data.role);
          localStorage.setItem("uid", res.data.uid);
          this.$store.commit("saveToken", res.data.data.s_token);
          this.$store.commit("saveUserid", res.data.uid);
          let redirect = decodeURIComponent(this.$route.query.redirect || "/");
          this.$router.push({
            path: redirect
          });
        } else {
          this.tip = res.data.msg;
          this.showTip = true;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../../assets/scss/login.scss"></style>
<style scoped lang="scss">
html body .wrap .box .ologin .am-tabs-bd .am-tab-panel input {
  border: 0;
  border-bottom: 1px solid #e8e8e8;
}

.forget_change {
  margin-top: -34px !important;
}

div.movebox {
  margin-left: 0;
  width: 290px;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: 20px;
}

.move_wrap {
  padding: 0 35px;
}
</style>
