<template>
  <div>
    <!--头部-->
    <div class="nav-container" id="top">
      <div class="nav">
        <div class="app">
          <i></i>
          <a href="#">关注微信公众号</a>
        </div>
        <!--           <div class="app"><a href="#"><span class="fa fa-building"></span> 备用</a></div> |
                          <span class="enterprise"><a href="#">备用</a></span> -->

        <ul class="personal-info" v-if="!token">
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          |
          <li>
            <router-link to="/register">注册</router-link>
          </li>
          <!-- |
            <li class="my-info"><a href="#">1 <span class="fa fa-caret-down"></span></a>
              <div class="downlist">
              <ul>
              <li><a class="mydownlist" href="">1</a></li>
              <li><a class="mydownlist" href="">2</a></li>
              <li><a class="mydownlist" href="">3</a></li>
              <li><a class="mydownlist" href="">4</a></li>
              <li><a class="mydownlist" href="">5</a></li>
            </ul>
            </div>
            </li> -->
        </ul>
        <ul class="personal-info" v-if="token">
          <li>欢迎您,{{username}}</li>

          <li>
            <a href="javascript:;" @click="quit">注销</a>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
    token() {
      return this.$store.state.token;
    }
  },
  mounted() {
    // this.token = localStorage.getItem("token");
    // if (localStorage.getItem("username")) {
    //   let username = localStorage.getItem("username");
    //   this.name = username;
    // }
    // console.log(name);
  },
  methods: {
    quit() {
      this.$store.commit("removeToken");
      localStorage.removeItem("token");
      // this.$router.push({
      //   path:'/'
      // })
      // this.name=""
    }
  }
};
</script>

<style scoped lang="scss">

</style>
