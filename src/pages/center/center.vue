<template>
    <div>
        <!--头部-->
        <app-head></app-head>

        <!--会员中心定位栏-->
        <div class="header">
            <div class="header-container">
                <div class="location">
                    <a href="./index.html"><img class="logo" src="../../assets/images/logo.png" alt="主页"></a>
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
                    <li><a href="#"><i></i>账户设置 <s></s></a></li>
                    <li><a href="#"><i></i>套餐购买 <s></s></a></li>
                    <li><a href="#"><i></i>发布需求 <s></s></a></li>
                    <li><a href="#"><i></i>我的订单 <s></s></a></li>
                    <li><a href="#"><i></i>我的团购 <s></s></a></li>
                    <li><a href="#"><i></i>系统信息 <s></s></a></li>
                    <li><a href="#"><i></i>我的收藏 <s></s></a></li>
                    <li><a href="#"><i></i>账单明细 <s></s></a></li>
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
    import AppHead from '../../components/AppHead.vue'
    import AppFoot from '../../components/AppFoot.vue'
    import AppTool from '../../components/AppTool.vue'
    import AppLogin from '../../components/AppLogin.vue'
    import AppLink from '../../components/AppLink.vue'

    export default {
        components: {
            AppHead,
            AppFoot,
            AppTool,
            AppLogin,
            AppLink
        },
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../../assets/scss/center_menu.scss"></style>
<style scoped lang="scss">

</style>
