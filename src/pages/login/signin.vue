<template>
    <div>
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="wrap">
            <div class="logo">
                <router-link to="/"><img src="../../assets/images/logo_o.png" alt=""></router-link>
            </div>
            <div class="signbox">
                <div class="am-g">
                    <div class="am-u-md-6">
                        <p class="p1">买家</p>
                        <p class="p2">订单需求一键搞定</p>
                        <img src="../../assets/images/signin_buy.png" alt="">
                        <div class="p3"><router-link to="/register" class="button">去发布需求</router-link></div>
                    </div>
                    <div class="am-u-md-6">
                        <p class="p1">卖家</p>
                        <p class="p2">海量订单尽在实验用品之家</p>
                        <img src="../../assets/images/signin_sale.png" alt="">
                        <p class="p3"><router-link to="/register" class="button">去参与投标</router-link></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../../assets/scss/signin.scss"></style>
<style scoped lang="scss">

</style>