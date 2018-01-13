<template>
  <div>
    <div class="center_main conter-s" style="padding:60px">

      <h4>账户基本信息</h4>
      <p>
        <span>会员昵称 :
          <b v-if="!showRename"> {{userinfo.name}}</b>
          <input @blur="changeName" v-if="showRename" v-model="userinfo.name" type="text" autofocus>
        </span>
        <a href="javascript:;" @click="showName">修改昵称</a>
      </p>
      <p>
        <span>绑定手机 :
          <b> {{userinfo.phone}}</b>
        </span>
        <a href="javascript:;" @click="rephone = true,changeState=1">修改手机号码</a>
      </p>
      <p>
        <span>绑定邮箱 :
          <b> {{userinfo.email}}</b>
        </span>
        <a v-if="!userinfo.email" href="javascript:;" @click="addmail = true,changeState=1">绑定邮箱</a>
        <a v-if="userinfo.email" href="javascript:;" @click="remail = true,changeState=1">修改绑定邮箱</a>
      </p>
      <p>
        <span>收货信息 :
          <!-- <b> 湖北省武汉市洪山区保利国际</b> -->
        </span>
        <a href="javascript:;" @click="readdress = true">添加收货地址</a>
      </p>
      <div v-if="userinfo.info" class="table" style="margin-bottom: 30px;">
        <table class="am-table am-table-centered am-table-striped am-table-hover">
          <thead>
            <tr>
              <th>收货人</th>
              <th>收货地址</th>
              <th>联系电话</th>
              <th>默认</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in userinfo.info" class="active">
              <td>{{item.user_name}}</td>
              <td>{{item.province}}{{item.city}}{{item.county}}{{item.detaddr}}</td>
              <td>{{item.phone}}</td>
              <td>
                <a v-if="item.status!=1" href="javscript:;" @click="setSetdef(item.id)">设为默认地址</a>
                <span v-if="item.status==1" class="blue">默认地址</span>
              </td>
              <td>
                <a @click="beforeChangeAddr(index)" href="javscript:;">修改</a>
                <a href="javscript:;" @click="deleteDeleaddr(item.id)">删除</a>
              </td>
            </tr>
            <!-- <tr class="">
              <td>******</td>
              <td>湖北省武汉市洪山区保利国际</td>
              <td>111****1111</td>
              <td>
                <a href="#" v-on:click="setSetdef">设为默认地址</a>
                <span class="blue">默认地址</span>
              </td>
              <td>
                <a href="#">修改</a>
                <a href="#" v-on:click="deleteDeleaddr">删除</a>
              </td>
            </tr> -->
          </tbody>
        </table>
      </div>

      <p>
        <span>发票信息 : </span>
        <el-button type="text" @click="reaccount = true">
          <span v-if="!userinfo.f_company">增加发票信息</span>
          <span v-if="userinfo.f_company">修改发票信息</span>
        </el-button>
      </p>

      <div v-if="userinfo.f_company" class="table">
        <table class="am-table am-table-centered am-table-striped am-table-hover">
          <thead>
            <tr>
              <th>公司名</th>
              <th>税号</th>
              <th>开户行</th>
              <th>银行账号</th>
              <th colspan="2">地址及电话</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{userinfo.f_company}}</td>
              <td>{{userinfo.f_bank}}</td>
              <td>{{userinfo.f_bank}}</td>
              <td>{{userinfo.f_bank}}</td>
              <td colspan="2">{{userinfo.f_addr}} - {{userinfo.f_phone}}</td>
            </tr>
            <!-- <tr class="">
              <td>测试</td>
              <td>11111111</td>
              <td>中国**银行</td>
              <td>6241********4528</td>
              <td colspan="2">湖北省武汉市洪山区保利国际 1212121212</td>
            </tr> -->
          </tbody>
        </table>
      </div>

      <div class="safe">
        <h4>账号安全</h4>
        <div class="am-g active">
          <div class="am-u-md-2 safe_i">
            <p>
              <i></i>
            </p>
            <p>已设置</p>
          </div>
          <div class="am-u-md-2 safe_p">
            <span>登录密码</span>

          </div>
          <div class="am-u-md-6 safe_msg">
            <span>安全性高的密码可以使账户更安全。建议您定期更换密码，且设置一个包含数字和字母， 并且长度超过6位以上的密码。</span>
          </div>
          <div class="am-u-md-2 safe_a">
            <el-button type="text" @click="repassword = true">修改</el-button>
          </div>
        </div>

        <div :class="{active:userinfo.insstatus==1}"  class="am-g">
          <div class="am-u-md-2 safe_i">
            <p>
              <i></i>
            </p>
            <p v-if="userinfo.insstatus!=1">未认证</p>
            <p v-if="userinfo.insstatus==1">已认证</p>
          </div>
          <div class="am-u-md-2 safe_p">
            <span>实名认证</span>

          </div>
          <div class="am-u-md-6 safe_msg">
            <span>用于提升账号的安全性和信任级别。认证后的有卖家记录的账号不能修改认证信息。</span>
          </div>
          <div class="am-u-md-2 safe_a">
            <router-link to="/center/centerSetid" v-if="userinfo.insstatus!=1">上传</router-link>
          </div>
        </div>

        <div :class="{active:userinfo.passtatus==1}"  class="am-g">
          <div class="am-u-md-2 safe_i">
            <p>
              <i></i>
            </p>
            <p v-if="userinfo.passtatus!=1">未认证</p>
            <p v-if="userinfo.passtatus==1">已认证</p>
          </div>
          <div class="am-u-md-2 safe_p">
            <span>机构认证</span>

          </div>
          <div class="am-u-md-6 safe_msg">
            <span>用于提升账号的安全性和信任级别。认证后的有卖家记录的账号不能修改认证信息。</span>
          </div>
          <div class="am-u-md-2 safe_a">
            <router-link to="/center/centerFirm" v-if="userinfo.passtatus!=1">上传</router-link>
          </div>
        </div>
      </div>
    </div>

    <!--弹出层修改密码s-->
    <el-dialog :before-close="handleClose" :visible.sync="repassword">
      <div class="repassword">
        <div class="setsite-inputbox setsite-inputbox-active">
          <label class="input-label" for="" style="letter-spacing: 8px;">原密码：</label>
          <input v-model="changePwds.oldpass" class="input-box" type="password">
        </div>
        <div class="setsite-inputbox">
          <label class="input-label" for="" style="letter-spacing: 8px;">新密码：</label>
          <input v-model="changePwds.password" class="input-box" type="password">
          <!-- <span></span> -->
        </div>
        <div class="setsite-inputbox">
          <label class="input-label" for="" style="letter-spacing: 0px;">确认新密码：</label>
          <input v-model="changePwds.newpass" @blur="pwdConfirm" class="input-box" type="password">
          <span v-if="showDiff" style="color:red">两次密码输入不一致</span>
        </div>
        <div class="setsite-inputbox">
          <span class="moreline margin">6-18个字符，请使用数字加字母的组合密码，不能单独使用字母，数字或字符。</span>
        </div>
        <div class="setsite-inputbox setsite-btnbox deletop">
          <a @click="changePwd" class="savebtn ppp" href="javascript:;">保存</a>
          <p v-if="showTip" v-text="tip" class="showTip"></p>
        </div>
      </div>

    </el-dialog>
    <!--弹出层修改密码e-->

    <!--弹出层收货地址s-->
    <el-dialog @close="handleClose" :visible.sync="readdress">
      <div class="setsite-inputbox setsite-inputbox-active">
        <label class="input-label" for="" style="letter-spacing: 1px;">收 货 人：</label>
        <input class="input-box" type="text" v-model="addaddr.username">
      </div>
      <div class="setsite-inputbox">
        <label class="input-label" for="" style="letter-spacing: 0px;">联系电话：</label>
        <input class="input-box" type="text" v-model="addaddr.phone">
      </div>
      <div class="setsite-inputbox clearfix">
        <label class="input-label" for="" style="letter-spacing: 0px;">所在地址：</label>
        <area-select :level='2' type='text' v-model="addaddr.detaddrs"></area-select>
        <textarea class="input-box textarea-box" v-model="addaddr.detaddr" placeholder="填写详细地址"></textarea>
        <!-- <input class="input-box" type="text" v-model="addaddr.addr"> -->
      </div>
      <!-- <div class="setsite-inputbox">
          <label class="input-label" for="" style="letter-spacing: 5px;"> 街&nbsp;&nbsp;&nbsp;&nbsp;道：</label>
          <input class="input-box" type="text" v-model="addaddr.street">
        </div>
        <div class="setsite-inputbox setsite-inputbox-xx">
          <label class="input-label input-labels" for="" style="letter-spacing: 4px;">详细地址：</label>
          <textarea class="input-box textarea-box" v-model="addaddr.detaddr"></textarea>
        </div> -->
      <div class="setsite-inputbox setsite-btnbox">
        <a v-if="!isChangeAddr" class="savebtn" href="javascript:;" v-on:click="updateAddaddr">
          <span class="ppp">保存</span>
        </a>
        <a v-if="isChangeAddr" class="savebtn" href="javascript:;" v-on:click="changeAddr">
          <span class="ppp">保存修改</span>
        </a>
        <p v-if="showTip" v-text="tip" style="width:100%;text-align: center;font-size: 12px;color:red;margin-top:5px"></p>
      </div>
    </el-dialog>
    <!--弹出层收货地址e-->

    <!--弹出层开税S-->
    <el-dialog :before-close="handleClose" :visible.sync="reaccount">
      <div class="refapiao">
        <div class="setsite-inputbox setsite-inputbox-active">
          <label class="input-label" for="" style="letter-spacing: 4px;">公司名：</label>
          <input v-model="changeFs.f_company" class="input-box" type="text">
        </div>
        <div class="setsite-inputbox">
          <label class="input-label" for="" style="letter-spacing: 3px;">税&nbsp;&nbsp;&nbsp;号：</label>
          <input v-model="changeFs.f_ein" class="input-box" type="text">
        </div>
        <div class="setsite-inputbox">
          <label class="input-label" for="" style="letter-spacing: 4px;">开户行：</label>
          <input v-model="changeFs.f_bank" class="input-box" type="text">
        </div>
        <div class="setsite-inputbox">
          <label class="input-label" for="" style="letter-spacing: 0px;">银行账号：</label>
          <input v-model="changeFs.f_number" class="input-box" type="text">
        </div>
        <div class="setsite-inputbox">
          <label class="input-label" for="" style="letter-spacing: 3px;">电&nbsp;&nbsp;&nbsp;话：</label>
          <input v-model="changeFs.f_phone" class="input-box" type="text">
        </div>
        <div class="setsite-inputbox clearfix">
          <label class="input-label" for="" style="letter-spacing: 0px;">所在地址：</label>
          <area-select :level='2' type='text' v-model="changeFs.f_addrs"></area-select>
          <textarea v-model="changeFs.f_addr" class="input-box textarea-box" placeholder="填写详细地址"></textarea>
        </div>
        <div class="setsite-inputbox setsite-btnbox">
          <a @click="changeF" class="savebtn" href="javascript:;">
            <span class="ppp">保存</span>
          </a>
          <p v-if="showTip" v-text="tip" style="width:100%;text-align: center;font-size: 12px;color:red;margin-top:5px"></p>
        </div>
      </div>
    </el-dialog>
    <!--弹出层开税e-->

    <!--弹出层修改手机号码s-->
    <el-dialog :before-close="handleClose" :visible.sync="rephone">
      <div class="rephone">
        <div class="center_main_sm visitde">

          <div class="top_email">
            <div class="top_em_mm">

              <div class="em_img_3">
                <span class="num_1">
                  <img src="../../assets/images/1.png">
                </span>
                <p class="num_p_1">验证身份</p>
              </div>

              <div class="em_line_4"></div>

              <div class="em_img_3" v-if="changeState==1">
                <span class="num_1">
                  <img src="../../assets/images/2.png">
                </span>
                <p class="num_p_2">修改手机</p>
              </div>

              <div class="em_img_3" v-if="changeState!=1">
                <span class="num_1">
                  <img src="../../assets/images/2-2.png">
                </span>
                <p class="num_p_1">修改手机</p>
              </div>

              <div class="em_line_3" v-if="changeState!=3"></div>
              <div class="em_line_4" v-if="changeState==3"></div>

              <div class="em_img_3" v-if="changeState!=3">
                <span class="num_1">
                  <img src="../../assets/images/gou11.png">
                </span>
                <p class="num_p_2">修改成功</p>
              </div>

              <div class="em_img_3" v-if="changeState==3">
                <span class="num_1">
                  <img src="../../assets/images/gou22.png">
                </span>
                <p class="num_p_1">修改成功</p>
              </div>

            </div>
          </div>

          <div class="cen_email" v-if="changeState==1">
            <form class="cen_for">
              <div class="cen_em">
                <label class="bos" style="letter-spacing: 1px">旧手机号:</label>
                <input v-model="phone" type="tel" class="input_em">
              </div>
              <div class="cen_em cen_top_px">
                <label class="bos" style="letter-spacing: 4px;">验证码:</label>
                <!-- <button @click="sendPhonecode" class="send_btn">发送验证码</button> -->
                <a v-text="showPin" @click="getPhonepin" href="javascript:;" :class="{gray:isActive}" class="button active send_btn"></a>
                <input v-model="phoneCode" type="text" class="input_te">
              </div>
              <div class="cen_em cen_top_psx">
                <button @click="beforeChangephone" class="ok_btn">确定</button>
                <p v-if="showTip" v-text="tip" class="showTip"></p>
              </div>
            </form>
          </div>

          <div class="cen_email" v-if="changeState==2">
            <form class="cen_for">
              <div class="cen_em">
                <label class="bos" style="letter-spacing: 1px">新手机号:</label>
                <input v-model="newPhone" type="tel" class="input_em">
              </div>
              <div class="cen_em cen_top_px">
                <label class="bos" style="letter-spacing: 4px;">验证码:</label>
                <!-- <button @click="sendPhonecode" class="send_btn">发送验证码</button> -->
                <a v-text="showPin" @click="getNewphonepin" href="javascript:;" :class="{gray:isActive}" class="button active send_btn"></a>
                <input v-model="newPhonecode" type="text" class="input_te">
              </div>
              <div class="cen_em cen_top_psx">
                <button @click="changePhone" class="ok_btn">确定</button>
                <p v-if="showTip" v-text="tip" class="showTip"></p>
              </div>
            </form>
          </div>

          <div class="cen_emails" v-if="changeState==3">
            <div class="cen_oks">
              <span class="icon"></span>
              <p class="pp">修改成功</p>
              <router-link to="/center" class="aa">返回账户信息</router-link>
            </div>
          </div>

        </div>

      </div>

    </el-dialog>
    <!--弹出层修改手机号码e-->

    <!--弹出层修改邮箱地址s-->
    <el-dialog :before-close="handleClose" :visible.sync="remail">
      <div class="remail">
        <div class="center_main_sm visitde">

          <div class="top_email">
            <div class="top_em_mm">

              <div class="em_img_3">
                <span class="num_1">
                  <img src="../../assets/images/1.png">
                </span>
                <p class="num_p_1">验证身份</p>
              </div>

              <div class="em_line_4"></div>

              <div class="em_img_3" v-if="changeState==1">
                <span class="num_1">
                  <img src="../../assets/images/2.png">
                </span>
                <p class="num_p_2">修改邮箱</p>
              </div>

              <div class="em_img_3" v-if="changeState!=1">
                <span class="num_1">
                  <img src="../../assets/images/2-2.png">
                </span>
                <p class="num_p_1">修改邮箱</p>
              </div>

              <div class="em_line_3" v-if="changeState!=3"></div>
              <div class="em_line_4" v-if="changeState==3"></div>

              <div class="em_img_3" v-if="changeState!=3">
                <span class="num_1">
                  <img src="../../assets/images/gou11.png">
                </span>
                <p class="num_p_2">修改成功</p>
              </div>

              <div class="em_img_3" v-if="changeState==3">
                <span class="num_1">
                  <img src="../../assets/images/gou22.png">
                </span>
                <p class="num_p_1">修改成功</p>
              </div>

            </div>
          </div>

          <div class="cen_email" v-if="changeState==1">
            <form class="cen_for">
              <div class="cen_em">
                <label class="bos" style="letter-spacing: 1px">旧邮箱地址:</label>
                <input v-model="email" type="tel" class="input_em">
              </div>
              <div class="cen_em cen_top_px">
                <label class="bos" style="letter-spacing: 4px;">验证码:</label>
                <!-- <button @click="sendemailcode" class="send_btn">发送验证码</button> -->
                <a v-text="showPin" @click="getEmailpin" href="javascript:;" :class="{gray:isActive}" class="button active send_btn"></a>
                <input v-model="emailCode" type="text" class="input_te">
              </div>
              <div class="cen_em cen_top_psx">
                <button @click="beforeChangeemail" class="ok_btn">确定</button>
                <p v-if="showTip" v-text="tip" class="showTip"></p>
              </div>
            </form>
          </div>

          <div class="cen_email" v-if="changeState==2">
            <form class="cen_for">
              <div class="cen_em">
                <label class="bos" style="letter-spacing: 1px">新邮箱地址:</label>
                <input v-model="newEmail" type="tel" class="input_em">
              </div>
              <div class="cen_em cen_top_px">
                <label class="bos" style="letter-spacing: 4px;">验证码:</label>
                <!-- <button @click="sendemailcode" class="send_btn">发送验证码</button> -->
                <a v-text="showPin" @click="getNewemailpin" href="javascript:;" :class="{gray:isActive}" class="button active send_btn"></a>
                <input v-model="newEmailcode" type="text" class="input_te">
              </div>
              <div class="cen_em cen_top_psx">
                <button @click="changeEmail" class="ok_btn">确定</button>
                <p v-if="showTip" v-text="tip" class="showTip"></p>
              </div>
            </form>
          </div>

          <div class="cen_emails" v-if="changeState==3">
            <div class="cen_oks">
              <span class="icon"></span>
              <p class="pp">修改成功</p>
              <router-link to="/center" class="aa">返回账户信息</router-link>
            </div>
          </div>

        </div>

      </div>

    </el-dialog>
    <!--弹出层修改邮箱地址e-->

    <!--弹出层绑定邮箱地址s-->
    <el-dialog :before-close="handleClose" :visible.sync="addmail">
      <div class="addmail">
        <div class="center_main_sm visitde">

          <div class="top_email">
            <div class="top_em_mm" style="width:600px">

              <div class="em_img_3">
                <span class="num_1">
                  <img src="../../assets/images/email.png">
                </span>
                <p class="num_p_1">绑定邮箱</p>
              </div>

              <div class="em_line_5"></div>

              <div class="em_img_3" v-if="changeState!=2">
                <span class="num_1">
                  <img src="../../assets/images/gou11.png">
                </span>
                <p class="num_p_2">绑定成功</p>
              </div>

              <div class="em_img_3" v-if="changeState==2">
                <span class="num_1">
                  <img src="../../assets/images/gou22.png">
                </span>
                <p class="num_p_1">绑定成功</p>
              </div>

            </div>
          </div>

          <div class="cen_email" v-if="changeState==1">
            <form class="cen_for">
              <div class="cen_em">
                <label class="bos" style="letter-spacing: 1px">邮箱地址:</label>
                <input v-model="addEmail" type="tel" class="input_em">
              </div>
              <div class="cen_em cen_top_px">
                <label class="bos" style="letter-spacing: 4px;">验证码:</label>
                <a v-text="showPin" @click="getAddemailpin" href="javascript:;" :class="{gray:isActive}" class="button active send_btn"></a>
                <input v-model="addEmailcode" type="text" class="input_te">
              </div>
              <div class="cen_em cen_top_psx">
                <button @click="addMail" class="ok_btn">确定</button>
                <p v-if="showTip" v-text="tip" class="showTip"></p>
              </div>
            </form>
          </div>

          <div class="cen_emails" v-if="changeState==2">
            <div class="cen_oks">
              <span class="icon"></span>
              <p class="pp">修改成功</p>
              <router-link to="/center" class="aa">返回账户信息</router-link>
            </div>
          </div>

        </div>

      </div>

    </el-dialog>
    <!--弹出层绑定邮箱地址e-->

  </div>
</template>

<script>
export default {
  data() {
    return {
      //后期存储到vuex
      showTip: false,
      showPin: "获取验证码",
      isActive: false,
      tip: "",
      showTip: false,
      uid: "19",
      role: "1",
      // 功能
      showDiff: false,
      repassword: false,
      readdress: false,
      reaccount: false,
      rephone: false,
      remail: false,
      addmail: false,
      showRename: false,
      isChangeAddr: false,
      changeState: 2,
      //用户信息
      userinfo: "",
      //修改密码
      changePwds: {
        oldpass: "",
        password: "",
        newpass: ""
      },
      //修改手机号
      phone: "",
      phoneCode: "",
      newPhone: "",
      newPhonecode: "",
      //修改邮箱
      email: "",
      emailCode: "",
      newEmail: "",
      newEmailcode: "",
      //绑定邮箱
      addEmail: "",
      addEmailcode: "",
      //修改发票
      changeFs: {
        f_company: "",
        f_ein: "",
        f_bank: "",
        f_number: "",
        f_phone: "",
        f_addrs: [],
        f_addr: ""
      },
      //添加收货地址
      addaddr: {
        username: "",
        phone: "",
        detaddrs: [],
        detaddr: "",
        id: ""
      },
      //删除收货地址
      deleaddr: {
        id: ""
      },
      //设置默认收货地址
      setdef: {
        id: ""
      }
    };
  },
  computed: {
    // all_f_addr() {
    //   return this.changeFs.f_addrs.join("") + this.changeFs.f_addr;
    // },
    // all_addaddr() {
    //   return this.addaddr.detaddrs.join("") + this.addaddr.detaddr;
    // },
    newaddrs() {
      return this.addaddr.detaddrs;
    }
  },
  methods: {
    //弹窗清除影响
    handleClose() {
      if (this.isChangeAddr) {
        this.$router.go(0); //重新加载该组件
      } else {
        this.tip = "";
        this.showTip = false;
        this.repassword = false;
        this.readdress = false;
        this.reaccount = false;
        this.rephone = false;
        this.remail = false;
        this.addmail = false;
        this.addaddr.username = "";
        this.addaddr.phone = "";
        this.addaddr.detaddrs[0] = "";
        this.addaddr.detaddrs[1] = "";
        this.addaddr.detaddrs[2] = "";
        this.addaddr.detaddr = "";
        this.isChangeAddr = false;
      }
    },
    //修改昵称
    showName() {
      this.showRename = true;
    },
    changeName() {
      this.showRename = false;
      let data = {
        uid: this.uid,
        role: this.role,
        company: this.userinfo.name
      };
      this.axios.post("/url/api/account/modify", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "会员昵称修改成功",
            type: "success"
          });
        }
      });
    },
    //修改密码
    changePwd() {
      let data = {
        uid: this.uid,
        oldpass: this.changePwds.oldpass,
        password: this.changePwds.password,
        newpass: this.changePwds.newpass
      };
      this.axios.post("/url/api/account/changepas", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "密码修改成功",
            type: "success"
          });
          this.$router.go(0);
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    pwdConfirm() {
      if (this.changePwds.newpass != this.changePwds.password) {
        this.showDiff = true;
      } else {
        this.showDiff = false;
      }
    },
    //修改发票
    changeF() {
      let data = {
        uid: this.uid,
        f_company: this.changeFs.f_company,
        f_ein: this.changeFs.f_ein,
        f_bank: this.changeFs.f_bank,
        f_number: this.changeFs.f_number,
        f_phone: this.changeFs.f_phone,
        f_addr: this.all_f_addr
      };
      this.axios.post("/url/api/account/changef", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "发票信息修改成功",
            type: "success"
          });
          this.$router.go(0);
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    //增加收货地址
    updateAddaddr() {
      let data = {
        user_id: this.uid,
        user_name: this.addaddr.username,
        phone: this.addaddr.phone,
        province: this.addaddr.detaddrs[0],
        city: this.addaddr.detaddrs[1],
        county: this.addaddr.detaddrs[2],
        detaddr: this.addaddr.detaddr
      };
      console.log(data);
      this.axios.post("/url/api/account/addaddr", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "添加地址成功",
            type: "success"
          });
          this.$router.go(0);
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    //设置默认收货地址
    setSetdef(e) {
      let data = {
        id: e,
        user_id: this.uid
      };
      console.log(data);
      this.axios.post("/url/api/account/setdef", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "设置默认地址成功",
            type: "success"
          });
          this.$router.go(0);
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    //删除收货地址
    deleteDeleaddr(e) {
      let data = {
        id: e
      };
      console.log(data);
      this.axios.post("/url/api/account/deleaddr", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "删除地址成功",
            type: "success"
          });
          this.$router.go(0);
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    //修改收货地址
    beforeChangeAddr(i) {
      this.isChangeAddr = true;
      this.readdress = true;
      this.addaddr.username = this.userinfo.info[i].user_name;
      this.addaddr.phone = this.userinfo.info[i].phone;
      this.addaddr.detaddrs[0] = this.userinfo.info[i].province;
      this.addaddr.detaddrs[1] = this.userinfo.info[i].city;
      this.addaddr.detaddrs[2] = this.userinfo.info[i].county;
      this.addaddr.detaddr = this.userinfo.info[i].detaddr;
      this.addaddr.id = this.userinfo.info[i].id;
    },
    changeAddr() {
      let data = {
        user_id: this.uid,
        id: this.addaddr.id,
        user_name: this.addaddr.username,
        phone: this.addaddr.phone,
        province: this.addaddr.detaddrs[0],
        city: this.addaddr.detaddrs[1],
        county: this.addaddr.detaddrs[2],
        detaddr: this.addaddr.detaddr
      };
      console.log(data);
      this.axios.post("/url/api/account/editaddr", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "修改地址成功",
            type: "success"
          });
          this.$router.go(0);
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    //修改绑定手机号
    getPhonepin() {
      if (this.showPin == "获取验证码") {
        this.axios
          .get(`/url/api/account/sendcode?phone=${this.phone}`)
          .then(res => {
            clearInterval(setsund);
            let num = 59;
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
            if (res.data.code == 200) {
              this.$message({
                showClose: true,
                message: "发送验证码成功, 请在手机上查看",
                type: "success"
              });
            } else {
              this.showTip = true;
              this.tip = res.data.msg;
            }
          });
      }
    },
    beforeChangephone() {
      let data = {
        uid: this.uid,
        role: this.role,
        phone: this.phone,
        code: this.phoneCode
      };
      this.axios.post("/url/api/account/authenticat", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "验证成功",
            type: "success"
          });
          this.changeState = 2;
          this.showPin = "获取验证码";
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    getNewphonepin() {
      if (this.showPin == "获取验证码") {
        this.axios
          .get(`/url/api/account/sendcode?phone=${this.newPhone}`)
          .then(res => {
            if (res.data.code == 200) {
              this.$message({
                showClose: true,
                message: "发送验证码成功, 请在手机上查看",
                type: "success"
              });
              clearInterval(setsund);
              let num = 59;
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
            } else {
              this.showTip = true;
              this.tip = res.data.msg;
            }
          });
      }
    },
    changePhone() {
      let data = {
        uid: this.uid,
        role: this.role,
        phone: this.newPhone,
        code: this.newPhonecode
      };
      this.axios.post("/url/api/account/modify", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "修改手机成功",
            type: "success"
          });
          this.changeState = 3;
          this.showPin = "获取验证码";
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    // 如果出现计时器bug 将计时器放在data
    //修改绑定邮箱
    getEmailpin() {
      if (this.showPin == "获取验证码") {
        this.axios
          .get(`/url/api/account/getEmailVerify?email=${this.email}`)
          .then(res => {
            clearInterval(setsund);
            let num = 59;
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
            if (res.data.code == 200) {
              this.$message({
                showClose: true,
                message: "发送验证码成功, 请在邮箱中查收",
                type: "success"
              });
            } else {
              this.showTip = true;
              this.tip = res.data.msg;
            }
          });
      }
    },
    beforeChangeemail() {
      let data = {
        uid: this.uid,
        role: this.role,
        email: this.email,
        code: this.emailCode
      };
      this.axios.post("/url/api/account/editamail", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "验证成功",
            type: "success"
          });
          this.changeState = 2;
          this.showPin = "获取验证码";
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    getNewemailpin() {
      if (this.showPin == "获取验证码") {
        this.axios
          .get(`/url/api/account/getEmailVerify?email=${this.newEmail}`)
          .then(res => {
            if (res.data.code == 200) {
              this.$message({
                showClose: true,
                message: "发送验证码成功, 请在邮箱中查收",
                type: "success"
              });
              clearInterval(setsund);
              let num = 59;
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
            } else {
              this.showTip = true;
              this.tip = res.data.msg;
            }
          });
      }
    },
    changeEmail() {
      let data = {
        uid: this.uid,
        role: this.role,
        email: this.newEmail,
        code: this.newEmailcode
      };
      this.axios.post("/url/api/account/modify", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "修改邮箱成功",
            type: "success"
          });
          this.changeState = 3;
          this.showPin = "获取验证码";
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    //绑定邮箱
    getAddemailpin() {
      if (this.showPin == "获取验证码") {
        this.axios
          .get(`/url/api/account/getEmailCode?email=${this.addEmail}`)
          .then(res => {
            if (res.data.code == 200) {
              this.$message({
                showClose: true,
                message: "发送验证码成功, 请在邮箱中查收",
                type: "success"
              });
              clearInterval(setsund);
              let num = 59;
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
            } else {
              this.showTip = true;
              this.tip = res.data.msg;
            }
          });
      }
    },
    addMail() {
      let data = {
        uid: this.uid,
        role: this.role,
        email: this.addEmail,
        code: this.addEmailcode
      };
      this.axios.post("/url/api/account/bind", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "绑定邮箱成功",
            type: "success"
          });
          this.changeState = 2;
          this.showPin = "获取验证码";
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    }
  },
  mounted() {
    let data = {
      uid: this.uid,
      role: this.role
    };
    this.axios.post("/url/api/account/index", data).then(res => {
      this.userinfo = res.data.data;
      console.log(res);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../../assets/scss/center_set.scss"></style>
<style scoped lang="css" src="../../assets/css/center_setpopup.css"></style>
<style scoped lang="css" src="../../assets/css/center_bindemail.css"></style>
<style scoped lang="scss">
input {
  border: 1px solid #ddd;
  padding: 4px;
}
</style>
