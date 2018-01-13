<template>
  <div>
    <!--搜索-->
    <app-search></app-search>

    <div class="container clearfix">
      <div class="left fl">

        <div class="menu">
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                <dl>
                  <dt>
                    <a href="#">订单状态</a>
                  </dt>
                  <dd>
                    <a href="#">招标中</a>
                  </dd>
                  <dd>
                    <a href="#">选标中</a>
                  </dd>
                  <dd>
                    <a href="#">已中标</a>
                  </dd>
                </dl>
              </template>
              <dl>
                <dt>
                  <a href="#">交易方式</a>
                </dt>
                <dd>
                  <a href="#">款到发货</a>
                </dd>
                <dd>
                  <a href="#">货到付款</a>
                </dd>
                <dd>
                  <a href="#">账期付款</a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href="#">支付方式</a>
                </dt>
                <dd>
                  <a href="#">第三方支付</a>
                </dd>
                <dd>
                  <a href="#">对公转账</a>
                </dd>
                <dd>
                  <a href="#">现金</a>
                </dd>
                <dd>
                  <a href="#">承兑汇票</a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href="#">发票要求</a>
                </dt>
                <dd>
                  <a href="#">增值税专用发票</a>
                </dd>
                <dd>
                  <a href="#">增值税普通发票</a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href="#">资质要求</a>
                </dt>
                <dd>
                  <a href="#">《危化品经营许可》</a>
                </dd>
                <dd>
                  <a href="#">《医疗器械经营许可》</a>
                </dd>
                <dd>
                  <a href="#">《品牌代理授权书》</a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href="#">会员等级</a>
                </dt>
                <dd>
                  <a href="#">大众会员及以上</a>
                </dd>
                <dd>
                  <a href="#">白银会员及以上</a>
                </dd>
                <dd>
                  <a href="#">黄金会员及以上</a>
                </dd>
                <dd>
                  <a href="#">钻石会员及以上</a>
                </dd>
              </dl>
            </el-collapse-item>
          </el-collapse>

        </div>
        <ul class="job-tab-content">
          <li>
            <div class="am-g">  
              <div class="am-u-md-12 am-u-sm-12  job-info" v-for="list in list.products">
                <div class="box">
                  <router-link to="/listDetail" class="checkmore name">{{ list.title }}</router-link>
                  <p class="num">订单编号：{{ list.order_sn}}</p>
                  <span class="date">{{ Math.ceil(list.create_time/3600/1000/24) }}天前</span>
                  <div class="info">
                    <a href="#" class="button" v-for="name in list.shop_name">{{ name }}</a>
                  </div>
                  <div class="company">
                    <i></i>
                    <span class="name">{{ list.user_name }}</span>
                    <span class="time">{{ list.end_time }}</span>
                  </div>
                  <div class="state">
                    <img src="../../assets/images/biao1.png" alt="" v-if="list.o_status==0">
                    <img src="../../assets/images/biao2.png" alt="" v-if="list.o_status==1">
                    <img src="../../assets/images/biao3.png" alt="" v-if="list.o_status==2">
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </li>
        </ul>
        <!--友情链接-->
        <div class="brand">
          <h4>推荐品牌</h4>
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                <div style="width: 100%;">
                  <a href="#">海尔生物医疗</a>
                  <a href="#">海尔生物医疗</a>
                  <a href="#">海尔生物医疗</a>
                  <a href="#">海尔生物医疗</a>
                  <a href="#">海尔生物医疗</a>
                  <a href="#">海尔生物医疗</a>
                  <a href="#">海尔生物医疗</a>
                  <a href="#">海尔生物医疗</a>
                </div>
              </template>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
              <a href="#">海尔生物医疗</a>
            </el-collapse-item>
          </el-collapse>
        </div>

        <el-pagination background layout="prev, pager, next" class="fy" :page-size="5" :total="count.count" @current-change="gets">
        </el-pagination>


        <!-- <ul data-am-widget="pagination" class="am-pagination am-pagination-default" style="text-align: center;margin-top: 56px;margin-bottom: 71px;">

          <li class="am-pagination-first ">
            <a href="#" class="">第一页</a>
          </li>

          <li class="am-pagination-prev ">
            <a href="#" class="">上一页</a>
          </li>


          <li class="am-active">
            <a href="#" class="">1</a>
          </li>
          <li class="">
            <a href="#" class="">2</a>
          </li>
          <li class="">
            <a href="#" class="">3</a>
          </li>
          <li class="">
            <a href="#" class="">4</a>
          </li>
          <li class="">
            <a href="#" class="">5</a>
          </li>


          <li class="am-pagination-next ">
            <a href="#" class="">下一页</a>
          </li>

          <li class="am-pagination-last ">
            <a href="#" class="">最末页</a>
          </li>
        </ul> -->
      </div>
      <div class="right fl">
        <h4>最近浏览</h4>
        <div class="">
          <div class="job-info">
            <div class="box">
              <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
              <p class="num">订单编号: 120002</p>
              <span class="date">1天前发布</span>
              <p class="num">投标: 15个&nbsp;&nbsp;收藏: 50个</p>
              <div class="company">
                <i></i>
                <span class="name">武汉******</span>
                <span class="time">2018.11.30截止</span>
              </div>
            </div>
          </div>
          <div class="job-info">
            <div class="box">
              <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
              <p class="num">订单编号: 120002</p>
              <span class="date">1天前发布</span>
              <p class="num">投标: 15个&nbsp;&nbsp;收藏: 50个</p>
              <div class="company">
                <i></i>
                <span class="name">武汉******</span>
                <span class="time">2018.11.30截止</span>
              </div>
            </div>
          </div>
          <div class="job-info">
            <div class="box">
              <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
              <p class="num">订单编号: 120002</p>
              <span class="date">1天前发布</span>
              <p class="num">投标: 15个&nbsp;&nbsp;收藏: 50个</p>
              <div class="company">
                <i></i>
                <span class="name">武汉******</span>
                <span class="time">2018.11.30截止</span>
              </div>
            </div>
          </div>
          <div class="job-info">

            <img src="../../assets/images/list_banner1.png" alt="">
          </div>
          <div class="job-info">

            <img src="../../assets/images/list_banner2.png" alt="">
          </div>
          <div class="job-info">

            <img src="../../assets/images/list_banner3.png" alt="">
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import AppSearch from "../../components/AppSearch";

  export default {
    components: {
      AppSearch
    },
    data() {
      return {
        request:{
          p:'1',
          user_id:'19',   
        },
        //商品列表
        list:{
          products:[{
          title:'',
          shop_name:[],
          unit:'',
          order_sn:"",
          user_name:"",
          end_time:"",
          //创建时间。
          create_time:"",
          //返回订单状态 0招标  1选标  2交易中
          o_status:""
        }]
        },
        //返回订单总数
        count:{
          count:0
        }
      }
    },
    mounted(){
     this.gets(1);
    },
    methods:{
      gets(p){
         let data={
           user_id:this.request.user_id
         }
         this.axios.post(`/url/api/orderlist/index?p=${p}`, data).then(res => {
          console.log(res);
          if(res.data.code=200){
          //获得返回数据总数
          this.count.count=res.data.data.count;
          //删除模板数组
          this.list.products=[];
          //获取JSON长度
          function getHsonLength(json){
                var jsonLength=0;
                for (var i in json) {
                    jsonLength++;
                }
                return jsonLength;
            }
          //循环添加数组
          for(var i=0;i<getHsonLength(res.data.data)-1;i++){
              this.list.products.push(res.data.data[i]);
          }
          }
         });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../../assets/scss/need_list.scss"></style>
<style scoped lang="scss">
.fy{
  text-align: center;margin-top: 56px;margin-bottom: 71px;
}

</style>
