<template>
    <div>
        <!--此页面是绑定邮箱1绑定-->
        <div class="center_main">
            <!--绑定头-->
            <div class="center_head">
                <div class="center_head_tis">
                    <div><img src="../../images/email.png"><p style="color: #3788ff;">绑定邮箱</p></div>
                    <span></span>
                    <div><img src="../../images/gou1.png"><p>绑定成功</p></div>
                </div>
            </div>
            <!--绑定体-->
            <div class="center_cent">
                <div class="center_cent_tis">
                    <span><label>邮&nbsp;&nbsp;箱：</label><input type="text"><a href="#" class="am-btn am-btn-primary">发送验证邮箱</a></span>
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
        <!--此页面是绑定邮箱2成功-->
        <div class="center_main am-hide">
            <!--绑定头-->
            <div class="center_head">
                <div class="center_head_tis">
                    <div><img src="../../images/email.png"><p style="color: #3788ff;">绑定邮箱</p></div>
                    <span></span>
                    <div><img src="../../images/gou2.png"><p>绑定成功</p></div>
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
