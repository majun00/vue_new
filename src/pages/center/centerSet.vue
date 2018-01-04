<template>
    <div>
        <div class="center_main conter-s">
            <!--弹出层s-->
            <div class="setsite" id="sss">
                <div class="setsite-inputbox setsite-inputbox-active">
                    <label class="input-label" for="">身份证号码：</label>
                    <input class="input-box" type="text">
                </div>
                <div class="setsite-inputbox">
                    <label class="input-label" for="" style="letter-spacing: 4px;">联系电话：</label>
                    <input class="input-box" type="text">
                </div>
                <div class="setsite-inputbox">
                    <label class="input-label" for="" style="letter-spacing: 4px;">所在地址：</label>
                    <input class="input-box" type="text">
                </div>
                <div class="setsite-inputbox">
                    <label class="input-label" for=""  style="letter-spacing: 5px;">  街&nbsp;&nbsp;&nbsp;&nbsp;道：</label>
                    <input class="input-box" type="text">
                </div>
                <div class="setsite-inputbox setsite-inputbox-xx">
                    <label class="input-label input-labels" for="" style="letter-spacing: 4px;">详细地址：</label>
                    <textarea class="input-box textarea-box"></textarea>
                </div>
                <div class="setsite-inputbox setsite-btnbox">
                    <a class="savebtn" href="#"><span class="ppp">保存</span></a>
                </div>
            </div>
            <!--弹出层e-->
            <h4>账户基本信息</h4>
            <p><span>会员昵称 : <b> 小熊维尼</b></span><a href="#">修改</a></p>
            <p><span>绑定手机 : <b> 111****1111</b></span><a href="#">修改手机号码</a></p>
            <p><span>绑定邮箱 : </span><a href="#">绑定邮箱</a></p>
            <p><span>收货地址 : <b> 湖北省武汉市洪山区保利国际</b></span><a href="#">添加收货地址</a></p>
            <div class="table">
                <table class="am-table am-table-centered am-table-striped am-table-hover">
                    <thead>
                    <tr>
                        <th>收货人</th>
                        <th>收货地址</th>
                        <th>联系电话</th>
                        <th>默认</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="active">
                        <td>******</td>
                        <td>湖北省武汉市洪山区保利国际</td>
                        <td>111****1111</td>
                        <td>
                            <!--<a href="#">设为默认地址</a>-->
                            <span class="blue">默认地址</span>
                        </td>
                        <td>
                            <a href="#">修改</a>
                            <a href="#">删除</a>
                        </td>
                    </tr>
                    <tr class="">
                        <td>******</td>
                        <td>湖北省武汉市洪山区保利国际</td>
                        <td>111****1111</td>
                        <td>
                            <a href="#">设为默认地址</a>
                            <!--<span class="blue">默认地址</span>-->
                        </td>
                        <td>
                            <a href="#">修改</a>
                            <a href="#">删除</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <p style="margin-top: 30px;"><span>发票信息</span><a href="#">修改发票信息</a></p>
            <div class="table">
                <table class="am-table am-table-centered am-table-striped am-table-hover">
                    <thead>
                    <tr>
                        <th>公司名</th>
                        <th>税号</th>
                        <th>开户行</th>
                        <th>银行账号</th>
                        <th>地址</th>
                        <th>电话</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="">
                        <td>武汉****</td>
                        <td>11111111</td>
                        <td>中国**银行</td>
                        <td>6241********4528</td>
                        <td>湖北省武汉市洪山区保利国际</td>
                        <td>111****1111</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="tc">
                <h4>我的套餐</h4>
                <div class="am-g">
                    <div class="am-u-md-5">
                        <p class="p1">套餐余量</p>
                        <p class="p2">20条</p>
                    </div>
                    <div class="am-u-md-2">
                        <span class="line"></span>
                    </div>
                    <div class="am-u-md-5">
                        <a href="#" class="button active">套餐购买</a>
                    </div>
                </div>
            </div>

            <div class="money">
                <h4>保证金</h4>
                <div class="am-g money_web">
                    <div class="am-u-md-2">
                        <span class="title_sm">平台保证金</span>
                    </div>
                    <div class="am-u-md-2">
                        <p class="p1">已交保证金</p>
                        <p class="p2">00元</p>
                    </div>
                    <div class="am-u-md-2">
                        <span class="line"></span>
                    </div>
                    <div class="am-u-md-2">
                        <p class="p1">状态</p>
                        <p class="p2">正常</p>
                    </div>
                    <div class="am-u-md-4">
                        <a href="#" class="button active">付款</a>
                        <a href="#" class="button active">退款</a>
                    </div>
                </div>
                <div class="am-g money_web">
                    <div class="am-u-md-2">
                        <span class="title_sm">平台保证金</span>
                    </div>
                    <div class="am-u-md-2">
                        <p class="p1">已交保证金</p>
                        <p class="p2">00元</p>
                    </div>
                    <div class="am-u-md-2">
                        <span class="line"></span>
                    </div>
                    <div class="am-u-md-2">
                        <p class="p1">状态</p>
                        <p class="p2">正常</p>
                    </div>
                    <div class="am-u-md-4">
                        <a href="#" class="button active">付款</a>
                        <a href="#" class="button active">退款</a>
                    </div>
                </div>
            </div>

            <div class="safe">
                <h4>账号安全</h4>
                <div class="am-g active">
                    <div class="am-u-md-2 safe_i">
                        <p><i></i></p>
                        <p>已设置</p>
                    </div>
                    <div class="am-u-md-2 safe_p">
                        <span>登录密码</span>

                    </div>
                    <div class="am-u-md-6 safe_msg">
                        <span>安全性高的密码可以使账户更安全。建议您定期更换密码，且设置一个包含数字和字母， 并且长度超过6位以上的密码。</span>
                    </div>
                    <div class="am-u-md-2 safe_a">
                        <a href="#">修改</a>
                    </div>
                </div>

                <div class="am-g">
                    <div class="am-u-md-2 safe_i">
                        <p><i></i></p>
                        <p>已设置</p>
                    </div>
                    <div class="am-u-md-2 safe_p">
                        <span>身份认证</span>

                    </div>
                    <div class="am-u-md-6 safe_msg">
                        <span>用于提升账号的安全性和信任级别。认证后的有卖家记录的账号不能修改认证信息。</span>
                    </div>
                    <div class="am-u-md-2 safe_a">
                        <a href="#">上传</a>
                    </div>
                </div>

                <div class="am-g">
                    <div class="am-u-md-2 safe_i">
                        <p><i></i></p>
                        <p>已设置</p>
                    </div>
                    <div class="am-u-md-2 safe_p">
                        <span>企业认证</span>

                    </div>
                    <div class="am-u-md-6 safe_msg">
                        <span>用于提升账号的安全性和信任级别。认证后的有卖家记录的账号不能修改认证信息。</span>
                    </div>
                    <div class="am-u-md-2 safe_a">
                        <a href="#">上传</a>
                    </div>
                </div>

                <div class="am-g">
                    <div class="am-u-md-2 safe_i">
                        <p><i></i></p>
                        <p>已设置</p>
                    </div>
                    <div class="am-u-md-2 safe_p">
                        <span>账号申诉</span>

                    </div>
                    <div class="am-u-md-6 safe_msg">
                        <span>用于提升账号的安全性和信任级别。认证后的有卖家记录的账号不能修改认证信息。</span>
                    </div>
                    <div class="am-u-md-2 safe_a">
                        <a href="#">申诉</a>
                    </div>
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
<style scoped lang="scss">

</style>
