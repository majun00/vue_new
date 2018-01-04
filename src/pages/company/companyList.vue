<template>
  <div>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="company-intro">
      <div class="am-g setcenter">

        <div v-for="item in companies" :key="item.id" class="am-u-md-3 am-u-sm-12 company-list">
          <router-link :to="`/companyDetail/${item.id}`">
            <img :src="item.prom_img" alt="" width="285" height="285">
          </router-link>
        </div>
        
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>

        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>
        <div class="am-u-md-3 am-u-sm-12 company-list">
          <router-link to="/companyDetail">
            <img src="../../assets/images/company_list.png" alt="">
          </router-link>
        </div>

        <!-- <div class="clearfix"></div>
        <ul data-am-widget="pagination" class="am-pagination am-pagination-default" style="text-align: center;margin-top: 56px;margin-bottom: 71px;">

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
    </div>
  </div>
</template>

<script>
  import Carousel from "../../components/Carousel.vue";
  import imgUrl from "../../api/api"

  export default {
    components: {
      Carousel
    },
    data() {
      return {
        imgs: [],
        companies:""
      };
    },
    mounted() {
      this.axios.get("http://localhost:8080/src/data.json").then(response => {
        this.imgs = response.data.imgs;
      });
      this.axios.post("/url/api/promot/index").then(response => {
        this.companies = response.data.data;
      });
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  img {
    width: 100%;
  }

</style>
