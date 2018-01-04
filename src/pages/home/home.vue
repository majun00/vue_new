<template>
    <div>
        <!--头部-->
        <app-head></app-head>

        <!--定位栏-->
        <app-top></app-top>

        <!--搜索-->
        <app-search></app-search>

        <!--工作类别导航 -->
        <div class="container">

            <router-view/>

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
    import AppTop from '../../components/AppTop.vue'
    import AppSearch from '../../components/AppSearch.vue'
    import AppFoot from '../../components/AppFoot.vue'
    import AppTool from '../../components/AppTool.vue'
    import AppLogin from '../../components/AppLogin.vue'
    import AppLink from '../../components/AppLink.vue'

    export default {
        components: {
            AppHead,
            AppTop,
            AppSearch,
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
<style lang="scss" src="../../assets/scss/index.scss"></style>
<style scoped lang="scss">

</style>
