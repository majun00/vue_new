<template>
  <div>
    <div class="center_main">
      <!--发布需求S-->
      <div class="am-g center_heading">
        <p>少于10件商品你还可以进行以下操作</p>
      </div>
      <div class="am-g center_shop_form">
        <div class="box box_first">
          <div class="am-u-md-6">
            <span>
              <i>买家：</i>{{ userinfo.user_name }}</span>
          </div>
          <div class="am-u-md-6">
            <span>
              <i>联系电话：</i>{{ userinfo.mobile }}</span>
          </div>
        </div>
        <div class="box">
          <div class="am-u-md-12">
            <span>
              收货信息： {{table.address}}
              <!-- <select v-model="table.address" style="width: 500px;">
                <option v-for="address in addresses" v-bind:value="address">{{ address }}</option>
              </select> -->
            </span>
            <span style="margin-left:20px">
              <a href="javascript:;">修改收货信息</a>
            </span>
          </div>
          <div class="am-u-md-0">

          </div>
          <!-- <div class="am-u-md-3"> -->
          <!-- <span> -->
          <!-- 货期： -->
          <!--<select style="width: 120px;">-->
          <!--<option v-for="day_limit in table.day_limit">{{ table.day_limit }}</option>-->
          <!--</select>-->
          <!-- <input style="width: 80px;" type="text" v-model="table.day_limit" /> 天 -->
          <!-- </span> -->
          <!-- </div> -->
          <!-- <div class="am-u-md-4"> -->
          <!--             <span>
              截止日期：
              <select style="width: 180px;" v-model="table.end_time">
                <option value="2018-01-30" selected="selected">2018-01-30</option>
                <option value="2018-02-28">2018-02-28</option>
                <option value="2018-03-30">2018-03-30</option>
              </select>
            </span> -->
          <!-- </div> -->
        </div>
        <div class="box">
          <div class="am-u-md-6">
            <span>
              截止日期：
              <el-date-picker v-model="table.end_time" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" :picker-options="pickerOptions"
                style="width:200px" required>
              </el-date-picker>
              <!-- <select style="width: 180px;" v-model="table.end_time">
                <option value="2018-01-30" selected="selected">2018-01-30</option>
                <option value="2018-02-28">2018-02-28</option>
                <option value="2018-03-30">2018-03-30</option>
              </select> -->
            </span>
            <!-- <span><a href="#">修改</a></span> -->
          </div>
          <div class="am-u-md-6">
            <span>
              <i>选标时间：</i>
              <select v-model="table.select_time" style="width: 80px;">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select> 天
            </span>
          </div>
          <div class="am-u-md-6">
            <span>
              货期：
              <input style="width: 80px;" type="text" v-model="table.day_limit" /> 天
            </span>
            <!-- <span>
              <i>最终交货日期：</i>{{ table.dead_time }}</span> -->
          </div>
          <div class="am-u-md-6">
            <!--&lt;!&ndash;这个木有了，字段要删除吧估计&ndash;&gt;-->
            <!--<span><i>创建时间：</i>{{ table.create_time }}</span>-->
            <span>
              <i>最终交货日期：</i>
              <el-date-picker v-model="dead_time" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" readonly style="width:200px">
              </el-date-picker>
            </span>
          </div>
        </div>
        <div class="box">
          <div class="am-u-md-6">
            <span>
              交易方式：
              <select style="width: 180px;" v-model="table.tradestyle">
                <option value="款到发货" selected="selected">款到发货</option>
                <option value="货到付款">货到付款</option>
                <option value="账期支付">账期支付</option>
              </select>
            </span>
          </div>
          <div class="am-u-md-6 am-u-end">
            <span>
              支付方式：
              <select style="width: 150px;" v-model="table.pay">
                <option value="对公转账" selected="selected">对公转账</option>
                <option value="第三方支付">第三方支付</option>
                <option value="现金">现金</option>
                <option value="承兑汇票">承兑汇票</option>
              </select>
            </span>
          </div>
        </div>
        <div class="box">
          <div class="am-u-md-6">
            <span>
              发票要求：
              <select style="width: 180px;" v-model="table.invoice">
                <option value="无要求" selected="selected">无要求</option>
                <option value="增值税专用发票">增值税专用发票</option>
                <option value="增值税普通发票">增值税普通发票</option>
              </select>
            </span>
          </div>
          <div class="am-u-md-6 am-u-end">
            <span>
              报价要求：
              <select style="width: 150px;" v-model="table.offer">
                <option value="报价含税" selected="selected">报价含税</option>
                <option value="报价含运费">报价含运费</option>
                <option value="均不含">均不含</option>
                <option value="均含">均含</option>
              </select>
            </span>
          </div>
          <div class="am-u-sm-12">
            <span>
              供应商特殊资质要求：
              <input name="supply" type="checkbox" value="《危化品经营许可》" v-model="table.supply" />
              <label>《危化品经营许可》</label>
              <input name="supply" type="checkbox" value="《医疗器械经营许可》" v-model="table.supply" />
              <label>《医疗器械经营许可》</label>
              <input name="supply" type="checkbox" value="《品牌代理授权书》" v-model="table.supply" />
              <label>《品牌代理授权书》</label>
            </span>
          </div>
        </div>
      </div>
      <div class="am-g center_shop_messge">
        <div class="table">
          <table class="am-table am-table-centered am-table-striped am-table-hover">
            <thead>
              <tr>
                <th>序号</th>
                <th>商品名称</th>
                <th>规格型号</th>
                <th>计数单位</th>
                <th>数量</th>
                <th>品牌</th>
              </tr>
            </thead>
            <tbody>
              <tr class="active" v-for="(value,index) in table.products">
                <td>
                  <a @click="del(index)" href="javascript:;" class="delete_table" title="删除"></a> {{ index+1 }}
                </td>
                <td>
                  <input type="text" v-model="value.name" />
                </td>
                <td>
                  <input type="text" v-model="value.norm" />
                </td>
                <td>
                  <input type="text" v-model="value.num" />
                </td>
                <td>
                  <input type="text" v-model="value.unit" />
                </td>
                <td>
                  <input type="text" v-model="value.brand" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="am-g center_footer">
        <a @click="add" href="javascript:;" class="am-btn am-btn-warning add_btn" style="color: #ffffff;">+添加商品</a>
        <a @click="sendneed" href="javascript:;" type="button" class="am-btn am-btn-primary scdd_btn" style="color: #ffffff;">生成订单</a>
        <div class="excel_box">
          <el-upload class="upload-demo" action="/url/api/setacnt/upl" :on-preview="handlePreview" :on-remove="handleRemove"
            :before-remove="beforeRemove" :limit="1" :on-exceed="handleExceed" :file-list="fileList">
            <!-- <el-button size="small" type="primary">点击上传</el-button> -->
            <a href="javascript:;" type="button" class="excel_btn" style="float: right">
              <span>
                <img src="../../assets/images/fileup.png">上传Excel表格</span>
            </a>
          </el-upload>
          <a :href="`http://wapi.syypzj.com:80/index.php/api/setacnt/excel?user_id=${userinfo.user_id}`" type="button" class="excel_btn excel_download">
            <span>
              <img src="../../assets/images/filedown.png">下载Excel表格</span>
          </a>
        </div>
        <!-- <a @click="upload" href="javascript:;" type="button" class="excel_btn" style="float: right">
            <span>
              <img src="../../assets/images/fileup.png">上传Excel表格</span>
          </a> -->
      </div>
      <!--发布需求E-->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          }
        },
        table: {
          //create_time: "1514995200",
          select_time: "7",
          end_time: "",
          day_limit: "1",
          address: "马骏 - 18112341234 - 湖北省武汉市洪山区江冬大道222号", //动态添加
          //rate: "30",
          //freight: "包邮",
          //pay: ["对公转账","支付宝支付"],
          tradestyle: "款到发货",
          pay: "对公转账",
          invoice: "无要求",
          offer: "报价含税",
          supply: [],
          products:   [{
              name: "烧杯",
              brand: "桌上",
              norm: "500ml",
              num: 1,
              unit: "个"
            },
            {
              name: "量筒",
              brand: "桌上",
              norm: "1000ml",
              num: 2,
              unit: "个"
            }
          ]
        },
        userinfo: {
          user_id: "19",
          user_name: "123",
          mobile: "13986519390"
        },
        // addresses: ["湖北省武汉市洪山区江冬大道222号", "湖北省武汉市武昌区和平大道111号"]
      };
    },
    mounted() {
      // var data = 1;
      // console.log(data);
      // this.axios.post("/url/api/setacnt/infomation", data).then(res => {
      //   console.log(res);
      // });
    },
    computed: {
      dead_time() {
        return (
          Date.parse(this.table.end_time) +
          (+this.table.select_time + +this.table.day_limit) * 86400000
        );
      }
    },
    methods: {
      add() {
        this.table.products.push({
          name: "",
          brand: "",
          norm: "",
          num: null,
          unit: " "
        });
      },
      del(index) {
        //   for (let i = 0; i < this.table.products.length; i++) {
        //     if (index == i) {
        //       this.table.products.splice(i, 1);
        //     }
        //   }
        this.table.products.forEach((value, i) => {
          if (index == i) {
            this.table.products.splice(i, 1);
          }
        });
      },
      sendneed() {
        let finaltime = {
          dead_time: this.dead_time
        };
        var data = Object.assign(this.userinfo, this.table, finaltime);
        console.log(data);
        this.axios.post("/url/api/setacnt/index", data).then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.$router.push("/center");
          } else {
            this.$message.error(res.data.msg);
          }
        });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(
          `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
          fileList.length} 个文件`
        );
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
      },
      upload() {
        console.log("1");
        this.axios.post("/url/api/setacnt/upl").then(res => {
          console.log(res);
        });
      },
      downExcel(){
        // let data = {
        //   user_id: "19"
        // }
        // console.log(data);
        // this.axios.post("/url/api/setacnt/excel",data).then(res => console.log(res) );  
      },
      // loadExcel(){

      // } 
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../assets/css/center_demand.css"></style>
<style scoped lang="scss">
  input[type=file] {
    display: none;
  }

</style>
