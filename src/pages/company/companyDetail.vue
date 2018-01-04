<template>
    <div>
        <img v-for="item in imgs" :key="item.id" :src="item.prom_img" width="100%" alt="">
    </div>
</template>

<script>
export default {
  data() {
    return {
        imgs:[]
    };
  },
  mounted() {
    this.axios
      .post("/url/api/promot/img", {id:this.$route.params.id})
      .then(response => {
        console.log(response);
        this.imgs=response.data.data
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
