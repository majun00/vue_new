<template>
  <div>
    <div class="job-category">
      <div class="job-nav">
        <ul>
          <li class="job-nav-list">化学试剂
            <a href="">通用试剂</a>
            <a href="">有机试剂</a>
            <div class="right-float">
              <i class="am-icon-angle-right am-icon-sm"></i>
            </div>
            <div class="job-more">
              <div class="border-cover"></div>
            </div>
          </li>
          <li class="job-nav-list">化学试剂
            <a href="">通用试剂</a>
            <a href="">有机试剂</a>
            <div class="right-float">
              <i class="am-icon-angle-right am-icon-sm"></i>
            </div>
            <div class="job-more">
              <div class="border-cover"></div>
            </div>
          </li>
          <li class="job-nav-list">化学试剂
            <a href="">通用试剂</a>
            <a href="">有机试剂</a>
            <div class="right-float">
              <i class="am-icon-angle-right am-icon-sm"></i>
            </div>
            <div class="job-more">
              <div class="border-cover"></div>
            </div>
          </li>
          <li class="job-nav-list">化学试剂
            <a href="">通用试剂</a>
            <a href="">有机试剂</a>
            <div class="right-float">
              <i class="am-icon-angle-right am-icon-sm"></i>
            </div>
            <div class="job-more">
              <div class="border-cover"></div>
            </div>
          </li>
          <li class="job-nav-list">化学试剂
            <a href="">通用试剂</a>
            <a href="">有机试剂</a>
            <div class="right-float">
              <i class="am-icon-angle-right am-icon-sm"></i>
            </div>
            <div class="job-more">
              <div class="border-cover"></div>
            </div>
          </li>
          <li class="job-nav-list">化学试剂
            <a href="">通用试剂</a>
            <a href="">有机试剂</a>
            <div class="right-float">
              <i class="am-icon-angle-right am-icon-sm"></i>
            </div>
            <div class="job-more">
              <div class="border-cover"></div>
            </div>
          </li>
          <li class="job-nav-list">化学试剂
            <a href="">通用试剂</a>
            <a href="">有机试剂</a>
            <div class="right-float">
              <i class="am-icon-angle-right am-icon-sm"></i>
            </div>
            <div class="job-more">
              <div class="border-cover"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="advertis fl">
        <div class="am-slider am-slider-a1">
          <ul class="am-slides">
            <carousel>
              <el-carousel-item v-for="item in imgs" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
              <!--                            <li>
                                <img src="../../assets/images/online.png">
                            </li>
                            <li>
                                <img src="../../assets/images/online2.jpg">
                            </li>-->
            </carousel>
          </ul>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>

    <div class="job-list">
      <tabs>
        <el-tab-pane label="最新订单" name="first">
          <ul class="job-tab-content">
            <li>
              <div class="am-g setcenter">
                <div v-for="item in list" :key="item.num" class="am-u-md-4 am-u-sm-12 job-info">
                  <div class="box">
                    <router-link to="/listDetail" class="checkmore name">{{item.title}}</router-link>
                    <p class="num">{{item.num}}</p>
                    <span class="date">{{item.date}}</span>
                    <div class="info">
                      <a href="#" class="button">{{item.info[0]}}</a>
                      <a href="#" class="button">{{item.info[1]}}</a>
                      <a href="#" class="button">{{item.info[2]}}</a>
                    </div>
                    <div class="company">
                      <i></i>
                      <span class="name">{{item.company}}</span>
                      <span class="time">{{item.deadline}}</span>
                    </div>
                  </div>
                </div>
                <!--                        <div class="am-u-md-4 am-u-sm-12  job-info">
                                                            <div class="box">
                                                                <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
                                                                <p class="num">订单编号: 120002</p>
                                                                <span class="date">1天前发布</span>
                                                                <div class="info">
                                                                    <a href="#" class="button">资历认证</a>
                                                                    <a href="#" class="button">信誉等级</a>
                                                                    <a href="#" class="button">金牌买家</a>
                                                                </div>
                                                                <div class="company">
                                                                    <i></i>
                                                                    <span class="name">武汉******有限公司</span>
                                                                    <span class="time">2017.11.30截止</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="am-u-md-4 am-u-sm-12  job-info">
                                                            <div class="box">
                                                                <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
                                                                <p class="num">订单编号: 120002</p>
                                                                <span class="date">1天前发布</span>
                                                                <div class="info">
                                                                    <a href="#" class="button">资历认证</a>
                                                                    <a href="#" class="button">信誉等级</a>
                                                                    <a href="#" class="button">金牌买家</a>
                                                                </div>
                                                                <div class="company">
                                                                    <i></i>
                                                                    <span class="name">武汉******有限公司</span>
                                                                    <span class="time">2017.11.30截止</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="am-u-md-4 am-u-sm-12  job-info">
                                                            <div class="box">
                                                                <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
                                                                <p class="num">订单编号: 120002</p>
                                                                <span class="date">1天前发布</span>
                                                                <div class="info">
                                                                    <a href="#" class="button">资历认证</a>
                                                                    <a href="#" class="button">信誉等级</a>
                                                                    <a href="#" class="button">金牌买家</a>
                                                                </div>
                                                                <div class="company">
                                                                    <i></i>
                                                                    <span class="name">武汉******有限公司</span>
                                                                    <span class="time">2017.11.30截止</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="am-u-md-4 am-u-sm-12  job-info">
                                                            <div class="box">
                                                                <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
                                                                <p class="num">订单编号: 120002</p>
                                                                <span class="date">1天前发布</span>
                                                                <div class="info">
                                                                    <a href="#" class="button">资历认证</a>
                                                                    <a href="#" class="button">信誉等级</a>
                                                                    <a href="#" class="button">金牌买家</a>
                                                                </div>
                                                                <div class="company">
                                                                    <i></i>
                                                                    <span class="name">武汉******有限公司</span>
                                                                    <span class="time">2017.11.30截止</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="am-u-md-4 am-u-sm-12  job-info">
                                                            <div class="box">
                                                                <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
                                                                <p class="num">订单编号: 120002</p>
                                                                <span class="date">1天前发布</span>
                                                                <div class="info">
                                                                    <a href="#" class="button">资历认证</a>
                                                                    <a href="#" class="button">信誉等级</a>
                                                                    <a href="#" class="button">金牌买家</a>
                                                                </div>
                                                                <div class="company">
                                                                    <i></i>
                                                                    <span class="name">武汉******有限公司</span>
                                                                    <span class="time">2017.11.30截止</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="am-u-md-4 am-u-sm-12  job-info">
                                                            <div class="box">
                                                                <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
                                                                <p class="num">订单编号: 120002</p>
                                                                <span class="date">1天前发布</span>
                                                                <div class="info">
                                                                    <a href="#" class="button">资历认证</a>
                                                                    <a href="#" class="button">信誉等级</a>
                                                                    <a href="#" class="button">金牌买家</a>
                                                                </div>
                                                                <div class="company">
                                                                    <i></i>
                                                                    <span class="name">武汉******有限公司</span>
                                                                    <span class="time">2017.11.30截止</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="am-u-md-4 am-u-sm-12  job-info">
                                                            <div class="box">
                                                                <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
                                                                <p class="num">订单编号: 120002</p>
                                                                <span class="date">1天前发布</span>
                                                                <div class="info">
                                                                    <a href="#" class="button">资历认证</a>
                                                                    <a href="#" class="button">信誉等级</a>
                                                                    <a href="#" class="button">金牌买家</a>
                                                                </div>
                                                                <div class="company">
                                                                    <i></i>
                                                                    <span class="name">武汉******有限公司</span>
                                                                    <span class="time">2017.11.30截止</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="am-u-md-4 am-u-sm-12  job-info">
                                                            <div class="box">
                                                                <router-link to="/listDetail" class="checkmore name">求烧杯500个</router-link>
                                                                <p class="num">订单编号: 120002</p>
                                                                <span class="date">1天前发布</span>
                                                                <div class="info">
                                                                    <a href="#" class="button">资历认证</a>
                                                                    <a href="#" class="button">信誉等级</a>
                                                                    <a href="#" class="button">金牌买家</a>
                                                                </div>
                                                                <div class="company">
                                                                    <i></i>
                                                                    <span class="name">武汉******有限公司</span>
                                                                    <span class="time">2017.11.30截止</span>
                                                                </div>
                                                            </div>
                                                        </div>-->
              </div>
              <div class="clearfix"></div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="最大成交" name="second">
          2
        </el-tab-pane>
        <el-tab-pane label="成交订单" name="third">
          3
        </el-tab-pane>
      </tabs>

    </div>

    <router-link to="/listItem" class="checkmore">查看更多</router-link>


    <div class="company-intro">
      <p class="hot-company">
        <span class="on">品牌促销</span>
      </p>
      <div class="am-g setcenter">
        <div v-for="item in companies" :key="item.id" class="am-u-md-3 am-u-sm-12 company-list">
          <router-link :to="`/companyDetail/${item.id}`">
            <img :src="item.prom_img" alt="" width="285" height="285">
          </router-link>
        </div>

        <div class="am-u-md-3 am-u-sm-12 company-list">
          <!-- <div class="company-info">
                        <img src="../../assets/images/product.png" alt="">
                        <div class="am-g" style="margin-top: 10px;">
                            <div class="am-u-md-6 left">
                                <p class="p1">管嘴盒100ul</p>
                                <p class="p2"><span class="red"><span style="font-size: 12px;">￥</span>72</span><span
                                        class="gray">￥100</span></p>
                                <p class="p3">已抢200件</p>
                            </div>
                            <div class="am-u-md-6 right">
                                <p class="p1">00:50:39</p>
                                <p class="p2">满300件起团</p>
                                <router-link to="/groupDetail" class="p3 button active">马上抢</router-link>
                            </div>
                            <div class="am-progress am-progress-xs">
                                <div class="am-progress-bar am-progress-bar-danger" style="width: 80%"></div>
                            </div>
                        </div>
                    </div> -->
          <router-link to="/companypDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>

        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companypDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companypDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companypDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companypDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>


      </div>
    </div>

    <router-link to="/companyList" class="checkmore">查看更多</router-link>

  </div>
</template>

<script>
import Tabs from "../../components/Tabs.vue";
import Carousel from "../../components/Carousel.vue";
export default {
  components: {
    Tabs,
    Carousel
  },
  data() {
    return {
      imgs: [],
      list: {},
      companies: {}
    };
  },
  mounted() {
    this.axios.get("http://localhost:8080/src/data.json").then(response => {
      this.list = response.data.list;
      this.imgs = response.data.imgs;
    });
    this.axios.post("/url/api/promot/index").then(response => {
      this.companies = response.data.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../../assets/scss/index.scss"></style>
<style scoped lang="scss">

</style>
