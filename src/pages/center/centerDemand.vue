<template>
    <div>
        <div class="center_main">
            <!--发布需求S-->
            <div class="am-g center_heading">
                <p>少于10件商品你还可以进行以下操作</p>
            </div>
            <div class="am-g center_shop_form">
                <div class="box box_first">
                    <div class="am-u-md-4">
                        <span><i>卖家：</i>武汉大学实验室</span>
                    </div>
                    <div class="am-u-md-4">
                        <span><i>联系电话：</i>027-323232</span>
                    </div>
                    <div class="am-u-md-4">
                        <span><i>创建时间：</i>2017-8-3 08：00</span>
                    </div>
                </div>
                <div class="box">
                    <div class="am-u-md-4">
                        <span><i>选标时间：</i>武汉大学实验室</span>
                    </div>
                    <div class="am-u-md-4">
                        <span><i>最终交货日期：</i>武汉大学实验室</span>
                    </div>
                    <div class="am-u-md-4">
                        <span><a href="#">修改</a></span>
                    </div>
                </div>
                <div class="box">
                    <div class="am-u-md-5">
		     <span>
                   <lable>收货地址：</lable>
                   <select style="width: 250px;"><option>湖北省武汉市洪山路</option></select>
             </span>
                    </div>
                    <div class="am-u-md-3">
		     <span>
                   <lable>货期：</lable>
                   <select style="width: 120px;"><option>30天</option></select>
             </span>
                    </div>
                    <div class="am-u-md-4">
		     <span>
                   <lable>转账要求：</lable>
                   <select  style="width: 120px;"><option>对公转账</option></select>
             </span>
                    </div>
                </div>
                <div class="box">
                    <div class="am-u-md-5">
		     <span>
                   <lable>供应商特殊资质要求：</lable>
                   <select  style="width: 180px;"><option>医疗器械经销许可证</option></select>
             </span>
                    </div>
                    <div class="am-u-md-5 am-u-end">
		     <span>
                   <lable>截止日期：</lable>
                   <select  style="width: 150px;"><option>2017年8月23号</option></select>
             </span>
                    </div>
                </div>
                <div class="box">
                    <div class="am-u-md-5">
		     <span>
                   <lable>发票要求：</lable>
                   <select  style="width: 180px;"><option>增值税专用发票</option></select>
             </span>
                    </div>
                    <div class="am-u-md-5 am-u-end">
		     <span>
                   <lable>报价要求：</lable>
                   <select  style="width: 100px;"><option>含17%税</option></select>
                   <select  style="width: 100px;"><option>含运费</option></select>
             </span>
                    </div>
                </div>
            </div>
            <div class="am-g center_shop_messge">
                <div class="table">
                    <table class="am-table am-table-centered am-table-striped am-table-hover">
                        <thead>
                        <tr>
                            <th>序号</th>
                            <th>商品名称</th>
                            <th>规格型号</th>
                            <th>计数单位</th>
                            <th>数量</th>
                            <th>品牌</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="active">
                            <td>
                                <a href="javascript:" class="delete_table" title="删除"></a>1
                            </td>
                            <td>烧杯</td>
                            <td>500ML</td>
                            <td>个</td>
                            <td>50</td>
                            <td>卓上</td>
                        </tr>
                        <tr class="active">
                            <td>
                                <a href="javascript:" class="delete_table" title="删除"></a>2
                            </td>
                            <td>试管</td>
                            <td>1500ML</td>
                            <td>个</td>
                            <td>100</td>
                            <td>卓上</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="am-g center_footer">
                <a href="" class="am-btn am-btn-warning add_btn" style="color: #ffffff;">+添加商品</a>
                <a href="" type="button" class="am-btn am-btn-primary scdd_btn" style="color: #ffffff;">生成订单</a>
                <div class="excel_box">
                    <a href="" type="button" class="excel_btn"><span><img src="../../assetsimages/filedown.png">下载Excel表格</span></a>
                    <a href="" type="button" class="excel_btn" style="float: right"><span><img src="../../assetsimages/fileup.png">上传Excel表格</span></a>
                </div>
            </div>
            <!--发布需求E-->
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
<style lang="css" src="../../assets/css/center_demand.css"></style>
<style scoped lang="scss">

</style>
