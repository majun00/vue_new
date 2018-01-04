<template>
    <div>
        <!--此页面是修改邮箱1开始-->
        <div class="center_main">
            <!--绑定头-->
            <div class="center_head">
                <div class="center_head_xis">
                    <div><img src="../../images/1.png"><p style="color: #3788ff;">验证身份</p></div>
                    <span></span>
                    <div><img src="../../images/2.png"><p>修改邮箱</p></div>
                    <span></span>
                    <div><img src="../../images/gou11.png"><p>修改成功</p></div>
                </div>
            </div>
            <!--绑定体-->
            <div class="center_cent">
                <div class="center_cent_sis">
                    <p><i>*</i>为了保障您的账号安全，变更信息之前需验证身份</p>
                    <p class="email">您的当前密保邮箱是：667***@163.com</p>
                    <span><label>邮&nbsp;&nbsp;箱：</label><input type="text"></span>
                    <a href="#" class="am-btn am-btn-primary btn_disbg">确定</a>
                </div>
            </div>
        </div>
        <!--此页面是修改邮箱2错做-->
        <div class="center_main am-hide">
            <!--绑定头-->
            <div class="center_head">
                <div class="center_head_xis">
                    <div><img src="../../images/1.png"><p style="color: #3788ff;">验证身份</p></div>
                    <span></span>
                    <div><img src="../../images/2-2.png"><p style="color: #3788ff;">修改邮箱</p></div>
                    <span></span>
                    <div><img src="../../images/gou11.png"><p>修改成功</p></div>
                </div>
            </div>
            <!--绑定体-->
            <div class="center_cent">
                <div class="center_cent_tis">
                    <span><label>新邮箱：</label><input type="text"></span>
                    <div>
                        <h3>温馨提示</h3>
                        <p><i>*</i>您可以使用此邮箱找回密码及账号</p>
                        <p><i>*</i>请勿泄露邮箱地址，以防止不法分子利</p>
                        <p><i>&nbsp;</i>用，骗取账号信息</p>
                        <!--disabled-->
                        <a href="#" class="am-btn am-btn-primary btn_disbg">确定</a>
                    </div>
                </div>
            </div>
        </div>
        <!--此页面是修改邮箱3成功-->
        <div class="center_main am-hide">
            <!--绑定头-->
            <div class="center_head">
                <div class="center_head_xis">
                    <div><img src="../../images/1.png"><p style="color: #3788ff;">验证身份</p></div>
                    <span></span>
                    <div><img src="../../images/2-2.png"><p style="color: #3788ff;">修改邮箱</p></div>
                    <span></span>
                    <div><img src="../../images/gou22.png"><p style="color: #3788ff;">修改成功</p></div>
                </div>
            </div>
            <!--绑定体-->
            <div class="center_cent">
                <div class="center_success">
                    <img src="../../images/gou3.png">
                    <p>修改成功</p>
                    <a href="#">返回账户信息</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../../assets/scss/center_set.scss"></style>
<style lang="css" src="../../assets/css/center_bindemail_s.css"></style>
<style scoped lang="scss">

</style>
