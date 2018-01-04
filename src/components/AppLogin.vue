<template>
    <div>
        <!--登录栏-->
        <div v-if="!token" class="login">
            <router-link to="/login" class="button active btn1">登录</router-link>
            <router-link to="/register" class="button btn2">注册</router-link>
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
