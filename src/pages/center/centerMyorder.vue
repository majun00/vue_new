centerList.vue<template>
    <div>

        <div class="center_main">
            <!--弹出层S-->
            <div class="center_complain center_complain_hide">
                <div class="complain_com" style="margin-top: 40px;">
                    <label>订单号：</label>
                    <input type="text">
                </div>
                <div class="complain_com">
                    <label style="line-height: 100px">投诉内容：</label>
                    <textarea></textarea>
                </div>
                <div class="complain_com">
                    <label>联系电话：</label>
                    <input type="text">
                </div>
                <a href="#" class="am-btn com_btn"><i>确认</i></a>
            </div>
            <!--弹出层E-->
            <!--我的订单S-->
            <div class="am-g center_nav">
                <ul>
                    <li><a href="#" class="center_nav_active">全部订单</a></li>
                    <li><a href="#">招标订单</a></li>
                    <li><a href="#">选标订单</a></li>
                    <li><a href="#">交易订单</a></li>
                    <li><a href="#">成交订单</a></li>
                </ul>
            </div>
            <div class="am-g center_search">
                 <span class="search_input">
                     <input type="text" placeholder="商品名称/商品编号/订单号">
                     <a href="#">搜索</a>
                 </span>
            </div>
            <div class="center_thead table table_del">
                <table class="am-table am-table-centered am-table-striped group_table am-table-hover">
                    <thead>
                    <tr>
                        <th>
                            <select>
                                <option>近十五天订单</option>
                            </select>
                        </th>
                        <th>订单详情</th>
                        <th>金额</th>
                        <th>
                            <select>
                                <option>全部状态</option>
                            </select>
                        </th>
                        <th>操作</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <!--展示表格S-->
            <div class="center_list">
                <div class="center_list_head">
                    <p class="am-text-center">2017-2-2 13：45：25 订单号：201702021245</p>
                </div>
                <div class="center_list_body">
                    <div class="am-u-sm-5">
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                    </div>
                    <div class="am-u-sm-2 price">&nbsp;</div>
                    <div class="am-u-sm-2 xb">
                        <a href="#">选标中</a>
                    </div>
                    <div class="am-u-sm-3 bj">
                        <a href="#" style="position: relative; top: 10px;">4家报价</a>
                        <a href="#" class="am-btn am-btn-primary">查看报价</a>
                    </div>
                    <div class="am-cf"></div>
                </div>
                <div class="center_list_toggle">
                    <a class="down" href="javascript:">点击展开</a>
                    <a class="up" href="javascript:">点击折叠</a>
                </div>
            </div>
            <div class="center_list">
                <div class="center_list_head">
                    <p class="am-text-center">2017-2-2 13：45：25 订单号：201702021245</p>
                </div>
                <div class="center_list_body">
                    <div class="am-u-sm-5">
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                    </div>
                    <div class="am-u-sm-2 price">￥10000.00</div>
                    <div class="am-u-sm-2 xb">
                        <a href="#">选标中</a>
                    </div>
                    <div class="am-u-sm-3 bj">
                        <a href="#" class="am-btn am-btn-primary am-btn-min">确认付款</a>
                        <a href="#" class="am-btn am-btn-primary am-btn-min">确认收货</a>
                        <a href="#" class="am-btn am-btn-primary am-btn-min">投诉</a>
                    </div>
                    <div class="am-cf"></div>
                </div>
                <div class="center_list_toggle">
                    <a class="down" href="javascript:">点击展开</a>
                    <a class="up" href="javascript:">点击折叠</a>
                </div>
            </div>
            <div class="center_list">
                <div class="center_list_head">
                    <p class="am-text-center">2017-2-2 13：45：25 订单号：201702021245</p>
                </div>
                <div class="center_list_body">
                    <div class="am-u-sm-5">
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                        <p>玻璃烧杯-500ML-10个-天玻</p>
                    </div>
                    <div class="am-u-sm-2 price">￥1000.00</div>
                    <div class="am-u-sm-2 xb">
                        <a href="#">选标中</a>
                    </div>
                    <div class="am-u-sm-3 bj">
                        <a href="#" class="am-btn am-btn-primary am-btn-min">撤回招标</a>
                    </div>
                    <div class="am-cf"></div>
                </div>
                <div class="center_list_toggle">
                    <a class="down" href="javascript:">点击展开</a>
                    <a class="up" href="javascript:">点击折叠</a>
                </div>
            </div>
            <!--展示表格E-->
            <div class="am-g center_footer">
                <ul data-am-widget="pagination"
                    class="am-pagination am-pagination-default"
                    style="text-align: center;">
                    <li class="am-pagination-first ">
                        <a href="#" class="">第一页</a>
                    </li>
                    <li class="am-active">
                        <a href="#" class="">1</a>
                    </li>
                    <li class="">
                        <a href="#" class="">2</a>
                    </li>
                    <li class="">
                        <a href="#" class="">3</a>
                    </li>
                    <li class="">
                        <a href="#" class="">4</a>
                    </li>
                    <li class="">
                        <a href="#" class="">5</a>
                    </li>
                    <li class="am-pagination-last">
                        <a href="#" class="">最末页</a>
                    </li>
                </ul>
            </div>
            <!--我的订单E-->
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
<style lang="css" src="../../assets/css/center_myorder.css"></style>
<style lang="css" src="../../assets/css/center_dvi_list.css"></style>
<style scoped lang="scss">

</style>
