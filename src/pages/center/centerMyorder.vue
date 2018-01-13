centerList.vue
<template>
  <div>
    <div class="center_main">
      <!--弹出层S-->
      <el-dialog :before-close="handleClose" :visible.sync="showComplainF">
        <div class="center_complain ">
          <div class="complain_com">
            <label style="line-height: 100px">投诉内容：</label>
            <textarea v-model="content"></textarea>
          </div>
          <div class="complain_com">
            <label>联系电话：</label>
            <input v-model="c_phone" type="text">
          </div>
          <a @click="complainF" href="javascript:;" class="am-btn com_btn">
            <i>确认</i>
          </a>
          <p v-if="showTip" v-text="tip" class="showTip"></p>
        </div>
      </el-dialog>
      <!--弹出层E-->
      <!--弹出层S-->
      <el-dialog :before-close="handleClose" :visible.sync="showComplainS">
        <div class="center_complain ">
          <div class="complain_com">
            <label style="line-height: 100px">投诉内容：</label>
            <textarea v-model="content"></textarea>
          </div>
          <div class="complain_com">
            <label>联系电话：</label>
            <input v-model="c_phone" type="text">
          </div>
          <a @click="complainF" href="javascript:;" class="am-btn com_btn">
            <i>确认</i>
          </a>
          <p v-if="showTip" v-text="tip" class="showTip"></p>
        </div>
      </el-dialog>
      <!--弹出层E-->
      <!--我的订单S-->
      <div class="am-g center_nav">
        <ul>
          <li>
            <a @click="getList(),tab=1" href="javascript:;" :class="{center_nav_active:tab==1}">全部订单</a>
          </li>
          <li>
            <a @click="getList(),tab=2" href="javascript:;" :class="{center_nav_active:tab==2}">招标订单</a>
          </li>
          <li>
            <a @click="getList(),tab=3" href="javascript:;" :class="{center_nav_active:tab==3}">选标订单</a>
          </li>
          <li>
            <a @click="getList(),tab=4" href="javascript:;" :class="{center_nav_active:tab==4}">交易订单</a>
          </li>
          <li>
            <a @click="getList(),tab=5" href="javascript:;" :class="{center_nav_active:tab==5}">成交订单</a>
          </li>
        </ul>
        <!-- <ul>
          <li>
            <a @click="getList(`/url/api/myorder/index?p=${p}`),tab=1" href="javascript:;" :class="{center_nav_active:tab==1}">全部订单</a>
          </li>
          <li>
            <a @click="getList(`/url/api/myorder/tender?p=${p}`),tab=2" href="javascript:;" :class="{center_nav_active:tab==2}">招标订单</a>
          </li>
          <li>
            <a @click="getList(`/url/api/myorder/choose?p=${p}`),tab=3" href="javascript:;" :class="{center_nav_active:tab==3}">选标订单</a>
          </li>
          <li>
            <a @click="getList(`/url/api/myorder/trade?p=${p}`),tab=4" href="javascript:;" :class="{center_nav_active:tab==4}">交易订单</a>
          </li>
          <li>
            <a @click="getList(`/url/api/myorder/finish?p=${p}`),tab=5" href="javascript:;" :class="{center_nav_active:tab==5}">成交订单</a>
          </li>
        </ul> -->
      </div>
      <div class="am-g center_search">
        <span class="search_input">
          <input v-model="searchfKeyword" type="text" placeholder="商品名称/商品编号/订单号">
          <a @click="searchf" href="javasctipt:;">搜索</a>
        </span>
      </div>
      <div class="center_thead table table_del">
        <table class="am-table am-table-centered am-table-striped group_table am-table-hover">
          <thead>
            <tr>
              <th style="width:160px;padding-left:4px">
                <select @change="searchs" v-model="searchsKeyword" style="width:116px;">
                  <option value="1">近三天订单</option>
                  <option value="2">近十五天订单</option>
                  <option value="3">当月订单</option>
                  <option value="4">近三个月订单</option>
                  <option value="5">近半年订单</option>
                  <option value="6">当年订单</option>
                  <option value="7">往年订单</option>
                </select>
              </th>
              <th style="width:264px;">订单详情</th>
              <th style="width:100px;">金额</th>
              <th style="width:226px;">
                <select @change="searchState" v-model="statusid">
                  <option value="0">待审核</option>
                  <option value="1">全部状态</option>
                  <option value="2">招标中</option>
                  <option value="3">待选标</option>
                  <option value="4">已选标</option>
                  <option value="5">交易中</option>
                  <option value="6">审核失败-已关闭</option>
                  <option value="7">订单撤标-已关闭</option>
                  <option value="8">选标超时-已关闭</option>
                  <option value="9">订单超时-已关闭</option>
                  <option value="10">订单申诉-待处理</option>
                  <option value="11">订单申诉-已处理</option>
                  <option value="12">售后申诉-待处理</option>
                  <option value="13">售后申诉-已处理</option>
                </select>
              </th>
              <th>操作</th>
              <th> </th>
            </tr>
          </thead>
        </table>
      </div>
      <!--展示表格S-->

      <!-- 灵异事件吧 -->
      <!-- <div class="" style="">
        <div>
          <div class="am-cf"></div>
        </div>
      </div> -->

      <div v-for="(item,i) in orderinfo" class="center_list">
        <div class="center_list_head">
          <p class="am-text-center">
            <span>{{item.create_time | moment}}</span>
            <span>订单号: {{item.order_sn}}</span>
          </p>
        </div>
        <div class="center_list_body" style="overflow:hidden">
          <div class="am-u-sm-5">
            <p v-for="(list,index) in item.list" v-if="index<3&&showAllproducts!=1">{{list.name}}-{{list.norm}}-{{list.num}}{{list.unit}}-{{list.brand}}</p>
            <p v-for="(list,index) in item.list" v-if="showAllproducts==1">{{list.name}}-{{list.norm}}-{{list.num}}{{list.unit}}-{{list.brand}}</p>
          </div>
          <div class="am-u-sm-2 price">￥{{item.bid_final_price}}</div>
          <div class="am-u-sm-2 xb">
            <span v-if="item.a_status=='0'" class="blue">待审核</span>
            <select v-if="item.a_status!='0'" class="clear" v-model="item.o_status" disabled style="padding-left:30px;color:javascript:;3788ff;">
              <option value="0">招标</option>
              <option value="1">选标</option>
              <option value="2">交易中</option>
              <option value="3">已完结</option>
              <option value="4">审核失败已关闭</option>
              <option value="5">订单撤标已关闭</option>
              <option value="6">选标超时已关闭</option>
              <option value="7">订单超时已关闭</option>
              <option value="8">交易中待申诉</option>
              <option value="9">交易中申诉已处理</option>
              <option value="10">成交待申诉</option>
              <option value="11">成交申诉已处理</option>
              <option value="12">已成交待评价</option>
            </select>
          </div>
          <div class="am-u-sm-3 bj">
            <p>{{item.bider}}家报价</p>

            <a @click="back(item.id)" href="javascript:;" class="am-btn am-btn-primary am-btn-min">撤回招标</a>

            <router-link to="/center/centerBid" class="am-btn am-btn-primary am-btn-min">查看报价</router-link>

            <p>等待卖家支付服务费</p>

            <a href="javascript:;" class="blue">查看卖家信息</a>

            <a @click="tradeFinish(item.id)" href="javascript:;" class="am-btn am-btn-primary am-btn-min">交易完成</a>

            <a @click="showComplainF=true,order_id=item.id,order_sn=item.order_sn" href="javascript:;" class="am-btn am-btn-primary am-btn-min">投诉1</a>

            <a @click="showComplainF=true,order_id=item.id,order_sn=item.order_sn" href="javascript:;" class="am-btn am-btn-primary am-btn-min">投诉2</a>

            <a href="javascript:;" class="am-btn am-btn-primary am-btn-min">评价</a>
          </div>
        </div>
        <div class="center_list_toggle">
          <a v-if="item.list.length>2&&showAllproducts!=1" @click="showAllproducts=1" class="down" href="javascript:">点击展开</a>
          <a v-if="showAllproducts==1" @click="showAllproducts=0" class="up" href="javascript:">点击折叠</a>
        </div>
      </div>

      <!-- <div class="center_list">
        <div class="center_list_head">
          <p class="am-text-center">
            2017-2-2 13：45：25 &nbsp;&nbsp;&nbsp; 订单号：201702021245
          </p>
        </div>
        <div class="center_list_body">
          <div class="am-u-sm-5">
            <p>玻璃烧杯-500ML-10个-天玻</p>
            <p>玻璃烧杯-500ML-10个-天玻</p>
          </div>
          <div class="am-u-sm-2 price">&nbsp;</div>
          <div class="am-u-sm-2 xb">
            <a href="javascript:;">选标中</a>
          </div>
          <div class="am-u-sm-3 bj">
            <a href="javascript:;" style="position: relative; top: 10px;">4家报价</a>
            <a href="javascript:;" class="am-btn am-btn-primary">查看报价</a>
          </div>
          <div class="am-cf"></div>
        </div>
        <div class="center_list_toggle">
          <a class="down" href="javascript:">点击展开</a>
          <a class="up" href="javascript:">点击折叠</a>
        </div>
      </div> -->
      <!-- <div class="center_list">
        <div class="center_list_head">
          <p class="am-text-center">2017-2-2 13：45：25 订单号：201702021245</p>
        </div>
        <div class="center_list_body clearfix">
          <div class="am-u-sm-5">
            <p>玻璃烧杯-500ML-10个-天玻</p>
            <p>玻璃烧杯-500ML-10个-天玻</p>
            <p>玻璃烧杯-500ML-10个-天玻</p>
            <p>玻璃烧杯-500ML-10个-天玻</p>
            <p>玻璃烧杯-500ML-10个-天玻</p>
            <p>玻璃烧杯-500ML-10个-天玻</p>
            <p>玻璃烧杯-500ML-10个-天玻</p>
            <p>玻璃烧杯-500ML-10个-天玻</p>
          </div>
          <div class="am-u-sm-2 price">￥10000.00</div>
          <div class="am-u-sm-2 xb">
            <a href="javascript:;">选标中</a>
          </div>
          <div class="am-u-sm-3 bj">
            <a href="javascript:;" class="am-btn am-btn-primary am-btn-min">确认付款</a>
            <a href="javascript:;" class="am-btn am-btn-primary am-btn-min">确认收货</a>
            <a href="javascript:;" class="am-btn am-btn-primary am-btn-min">投诉</a>
          </div>
          <div class="am-cf"></div>
        </div>
        <div class="center_list_toggle">
          <a class="down" href="javascript:">点击展开</a>
          <a class="up" href="javascript:">点击折叠</a>
        </div>
      </div> -->
      <!-- <div class="center_list">
        <div class="center_list_head">
          <p class="am-text-center">2017-2-2 13：45：25 订单号：201702021245</p>
        </div>
        <div class="center_list_body">
          <div class="am-u-sm-5">
            <p>玻璃烧杯-500ML-10个-天玻</p>
            <p>玻璃烧杯-500ML-10个-天玻</p>
          </div>
          <div class="am-u-sm-2 price">￥1000.00</div>
          <div class="am-u-sm-2 xb">
            <a href="javascript:;">选标中</a>
          </div>
          <div class="am-u-sm-3 bj">
            <a href="javascript:;" class="am-btn am-btn-primary am-btn-min">撤回招标</a>
          </div>
          <div class="am-cf"></div>
        </div>
        <div class="center_list_toggle">
          <a class="down" href="javascript:">点击展开</a>
          <a class="up" href="javascript:">点击折叠</a>
        </div>
      </div> -->
      <!--展示表格E-->
      <el-pagination background layout="prev, pager, next" :current-page="p" :page-size="3" :total="count" @current-change="handleCurrentChange">
      </el-pagination>
      <!--我的订单E-->
    </div>


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
      //功能
      tab: "1",
      count: 0,
      showAllproducts: "",
      showComplainF: false,
      showComplainS: false,
      //订单信息
      orderinfo: "",
      p: 1,
      //搜索
      searchfKeyword: "",
      //时间筛选
      searchsKeyword: "1",
      //状态筛选
      statusid: "2",
      //投诉
      order_id: "",
      order_sn: "",
      c_phone: "",
      content: ""
    };
  },
  methods: {
    //弹窗清除影响
    handleClose() {
      this.tip = "";
      this.showTip = false;
      this.showComplainF = false;
      this.showComplainS = false;
    },
    //分页
    handleCurrentChange(p) {
      this.p = p;
      let url;
      if (this.tab == 1) {
        url = `/url/api/myorder/index?p=${p}`;
      } else if (this.tab == 2) {
        url = `/url/api/myorder/tender?p=${p}`;
      } else if (this.tab == 3) {
        url = `/url/api/myorder/choose?p=${p}`;
      } else if (this.tab == 4) {
        url = `/url/api/myorder/trade?p=${p}`;
      } else if (this.tab == 5) {
        url = `/url/api/myorder/finish?p=${p}`;
      }
      let data = {
        user_id: this.uid
      };
      this.axios.post(url, data).then(res => {
        console.log(res);
        this.orderinfo = res.data.data.aaa;
        this.count = res.data.data.count;
      });
    },
    //切换
    getList() {
      this.p = 1;
      let url;
      if (this.tab == 1) {
        url = `/url/api/myorder/index?p=${this.p}`;
      } else if (this.tab == 2) {
        url = `/url/api/myorder/tender?p=${this.p}`;
      } else if (this.tab == 3) {
        url = `/url/api/myorder/choose?p=${this.p}`;
      } else if (this.tab == 4) {
        url = `/url/api/myorder/trade?p=${this.p}`;
      } else if (this.tab == 5) {
        url = `/url/api/myorder/finish?p=${this.p}`;
      }
      let data = {
        user_id: this.uid
      };
      this.axios.post(url, data).then(res => {
        this.orderinfo = res.data.data.aaa;
        this.count = res.data.data.count;
        console.log(res);
      });
    },
    //搜索
    searchf() {
      let data = {
        user_id: this.uid
      };
      this.axios
        .post(
          `/url/api/myorder/searchf?p=${this.p}&keyword=${this.searchfKeyword}`,
          data
        )
        .then(res => {
          console.log(res);
          this.orderinfo = res.data.data.aaa;
          this.count = res.data.data.count;
          this.p = 1;
        });
    },
    //筛选时间
    searchs() {
      let data = {
        user_id: this.uid
      };
      this.axios
        .post(
          `/url/api/myorder/searchs?p=${this.p}&keyword=${this.searchsKeyword}`,
          data
        )
        .then(res => {
          console.log(res);
          this.orderinfo = res.data.data.aaa;
          this.count = res.data.data.count;
          this.p = 1;
        });
    },
    //筛选状态
    searchState() {
      let data = {
        user_id: this.uid,
        statusid: this.statusid
      };
      this.axios.post(`/url/api/myorder/state?p=${this.p}`, data).then(res => {
        console.log(res);
        this.orderinfo = res.data.data.aaa;
        this.count = res.data.data.count;
        this.p = 1;
      });
    },
    //投诉
    complainF() {
      let data = {
        order_id: this.order_id,
        order_sn: this.order_sn,
        c_phone: this.c_phone,
        content: this.content
      };
      this.axios.post("/url/api/myorder/complaints", data).then(res => {
        console.log(res);
        this.$router.go(0);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "投诉提交成功,等待工作人员处理",
            type: "success"
          });
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    complainS() {
      let data = {
        order_id: this.order_id,
        order_sn: this.order_sn,
        c_phone: this.c_phone,
        content: this.content
      };
      this.axios.post("/url/api/myorder/complaints", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$router.go(0);
          this.$message({
            showClose: true,
            message: "投诉提交成功,等待工作人员处理",
            type: "success"
          });
        } else {
          this.showTip = true;
          this.tip = res.data.msg;
        }
      });
    },
    //交易完成
    tradeFinish(e) {
      let data = {
        order_id: e
      };
      this.axios.post("/url/api/myorder/tradefinish", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$router.go(0);
          this.$message({
            showClose: true,
            message: "交易完成",
            type: "success"
          });
        } else {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: "error"
          });
        }
      });
    },
    //撤标(不处罚)
    back(e) {
      let data = {
        order_id: e
      };
      this.axios.post("/url/api/myorder/back", data).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$router.push("");
          this.$message({
            showClose: true,
            message: "撤标成功",
            type: "success"
          });
        } else {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: "error"
          });
        }
      });
    },
    //dai
    //撤标(处罚)
    backpublish() {},
    //查看卖家信息
    looksaler() {},
    //评价
    comment() {}
  },
  mounted() {
    let data = {
      user_id: this.uid
    };
    this.axios.post(`/url/api/myorder/index?p=${this.p}`, data).then(res => {
      console.log(res);
      this.orderinfo = res.data.data.aaa;
      this.count = res.data.data.count;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../assets/css/center_myorder.css"></style>
<style scoped src="../../assets/css/center_dvi_list.css"></style>
<style scoped lang="scss">

</style>
