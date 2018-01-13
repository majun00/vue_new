<template>
  <div>
    <!--定位栏-->
    <div class="header">
      <div class="header-container">
        <div class="location">
          <a href="./index.html">
            <img class="logo" src="../assets/images/logo.png" alt="主页">
          </a>
          <span class="current-location">湖北省</span>
          <el-tooltip class="item" effect="dark" content="暂未开通其他省份" placement="bottom-start">
            <el-button>
              <a href="javascirpt:;" class="change-location">[切换省]</a>
            </el-button>
          </el-tooltip>
        </div>
        <!--          <div class="main-nav">
                            <ul><li class="nav-list"><a href="">1</a></li>
                            <li class="nav-list"><a href="">1</a></li>
                            <li class="nav-list"><a href="">1</a></li>
                            <li class="nav-list"><a href="">1</a></li>
                            <li class="nav-list"><a href="">1</a></li></ul>
                          </div>-->
        <div class="fatson"></div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped lang="scss">
.el-button{
    border: 0;
}
.el-button:hover{
    background-color:transparent;
}

</style>
