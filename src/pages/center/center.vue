<template>
  <div>
    <!--头部-->
    <app-head></app-head>

    <!--会员中心定位栏-->
    <div class="header">
      <div class="header-container">
        <div class="location">
          <a href="./index.html">
            <img class="logo" src="../../assets/images/logo.png" alt="主页">
          </a>
          <span class="header-center">会员中心</span>
        </div>
      </div>
    </div>

    <!--工作类别导航 -->
    <div class="container">

      <!--会员中心菜单-->
      <div class="center_menu">
        <div class="photo">
          <img src="../../assets/images/photo.png" alt="">
          <p>小熊维尼</p>
        </div>
        <ul>
          <li>
            <router-link to="/center/centerBuyer" :class="{active:$route.path=='/center'||$route.path=='/center/centerBuyer'}">
              <i></i>个人中心
              <s></s>
            </router-link>
          </li>
          <li>
            <router-link to="/center/centerDemand" :class="{active:$route.path=='/center/centerDemand'}">
              <i></i>发布需求
              <s></s>
            </router-link>
          </li>
          <li>
            <router-link to="/center/centerMyorder" :class="{active:$route.path=='/center/centerMyorder'}">
              <i></i>订单管理
              <s></s>
            </router-link>
          </li>
          <li>
            <router-link to="/center/centerPackage" :class="{active:$route.path=='/center/centerPackage'}">
              <i></i>套餐购买
              <s></s>
            </router-link>
          </li>
          <li>
            <router-link to="/center/centerBillingdetails" :class="{active:$route.path=='/center/centerBillingdetails'}">
              <i></i>消费明细
              <s></s>
            </router-link>
          </li>
          <li>
            <router-link to="/center/centerSet" :class="{active:$route.path=='/center/centerSet'||$route.path=='/center/centerSetid'}">
              <i></i>账户设置
              <s></s>
            </router-link>
          </li>
          <li>
            <router-link to="/center/centerMess" :class="{active:$route.path=='/center/centerMess'}">
              <i></i>系统信息
              <s></s>
            </router-link>
          </li>
          <li>
            <router-link to="/center/centerCollect" :class="{active:$route.path=='/center/centerCollect'}">
              <i></i>我的收藏
              <s></s>
            </router-link>
          </li>
        </ul>
      </div>

      <router-view/>


      <div class="clearfix"></div>

      <!--友情链接-->
      <app-link></app-link>

    </div>

    <!--底部-->
    <app-foot></app-foot>

    <!--侧边工具条-->
    <app-tool></app-tool>

    <!--登录栏-->
    <app-login></app-login>

  </div>
</template>

<script>
  import AppHead from "../../components/AppHead.vue";
  import AppFoot from "../../components/AppFoot.vue";
  import AppTool from "../../components/AppTool.vue";
  import AppLogin from "../../components/AppLogin.vue";
  import AppLink from "../../components/AppLink.vue";

  export default {
    components: {
      AppHead,
      AppFoot,
      AppTool,
      AppLogin,
      AppLink
    },
    data() {
      return {};
    },
    mounted() {
      console.log(this.$route);
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to /cethis component only -->
<style lang="scss" src="../../assets/scss/center_menu.scss"></style>
<style scoped lang="scss">


</style>
