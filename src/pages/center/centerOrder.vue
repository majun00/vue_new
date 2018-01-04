centerList.vue<template>
    <div>

        <!--收货地址S-->
        <div class="container">
            <div class="conter_main">
                <div class="center_main_header">
                    <h1>确认订单</h1>
                </div>
                <div class="center_main_com">
                    <span>选择收货地址 <a href="#">管理收货地址</a></span>
                    <div class="center_main_combox">
                        <div class="conter_dz conter_dz_active conter_dz_top">
                            <span>默认地址</span>
                            <h3>湖北武汉（某某收）</h3>
                            <p>洪山区 关山 新竹路 保利公寓</p>
                            <p>A座1515</p>
                            <a href="#">修改</a>
                        </div>
                        <div class="conter_dz">
                            <span>默认地址</span>
                            <h3>湖北武汉（某某收）</h3>
                            <p>洪山区 关山 新竹路 保利公寓</p>
                            <p>A座1515</p>
                            <a href="#">修改</a>
                        </div>
                        <div class="conter_dz">
                            <span>默认地址</span>
                            <h3>湖北武汉（某某收）</h3>
                            <p>洪山区 关山 新竹路 保利公寓</p>
                            <p>A座1515</p>
                            <a href="#">修改</a>
                        </div>
                    </div>
                </div>
                <div class="center_main_com">
                    <span>检查开票信息</span>
                    <div class="table">
                        <table class="am-table am-table-bordered table_kpxx">
                            <tbody>
                            <tr>
                                <td><p>公司名</p></td>
                                <td><p>湖北省武汉市洪山区保利国际</p></td>
                                <td><p>税号</p></td>
                                <td><p>111****1111</p></td>
                            </tr>
                            <tr>
                                <td><p>开户行</p></td>
                                <td><p>湖北省武汉市洪山区保利国际</p></td>
                                <td><p>银行账号</p></td>
                                <td><p>111****1111</p></td>
                            </tr>
                            <tr>
                                <td><p>地址</p></td>
                                <td>
                                    <p>
                                        湖北省武汉市洪山区保利国际
                                        湖北省武汉市洪山区保利国际
                                        湖北省武汉市洪山区保利国际
                                    </p>
                                </td>
                                <td><p>电话</p></td>
                                <td><p>111****1111</p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="center_main_com">
                    <span>确认订单信息</span>
                    <table class="table_sitemess">
                        <tbody>
                        <tr class="table_sitemess_header">
                            <td>商品</td>
                            <td>商品属性</td>
                            <td>单价（元）</td>
                            <td>数量</td>
                            <td>小计（元）</td>
                        </tr>
                        <tr class="table_sitemess_center">
                            <td>
                                <a href="#" class="shop_img">
                                    <img src="images/xsg100mg.png">
                                </a>
                            </td>
                            <td>
                                <div class="shop_com">
                                    <div class="shop_texthead">
                                        <a href="#">氪金手套 M号 1箱子</a>
                                    </div>
                                    <div class="info">
                                        <a href="#" class="button">包邮</a>
                                        <a href="#" class="button">100只/盒</a>
                                        <a href="#" class="button">10盒/箱</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="shop_com">
                                    <div class="shop_texthead">
                                        <a href="#">258.00</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="shop_com">
                                    <div class="shop_texthead">
                                        <!--价格插件-->
                                        <div class="price">
                                            <button class="pricebtndown">-</button>
                                            <input type="text" value="1" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') ">
                                            <button class="pricebtnup">+</button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="shop_com">
                                    <div class="shop_texthead">
                                        <a href="#">25800.00</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="table_sitemess_footer">
                            <td colspan="5">
                                <label>买家留言：</label>
                                <textarea></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="center_main_com">
                    <div class="shop_subbox">
                        <div class="shop_dz">
                            <span><p class="active">运费：<i>0</i>  实付款：<i>￥2324.00</i></p></span>
                            <span><p>湖北 武汉 洪山区 关山 新竹路 保利国际公寓 A 1515</p></span>
                            <span><p>收货人：xx 12345678912</p></span>
                        </div>
                        <a class="shop_submit" href="#"><i>提交订单</i></a>
                    </div>
                </div>
            </div>
        </div>
        <!--收货地址E-->
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
<style lang="css" src="../../assets/css/center_order.css"></style>
<style scoped lang="scss">

</style>
