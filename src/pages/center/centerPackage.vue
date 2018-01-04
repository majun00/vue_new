centerList.vue<template>
    <div>

        <div class="center_main">
            <div class="center_hadeing"> <span>购买套餐<i id="messagebar">(20)</i></span> </div>
            <div class="center_tabhead">
                <div class="am-u-sm-3">套餐标题</div>
                <div class="am-u-sm-3">数量（次）</div>
                <div class="am-u-sm-3">金额（元）</div>
                <div class="am-u-sm-3">交易操作</div>
            </div>
            <div class="center_tab">
                <div class="am-u-sm-3 center_tab_he">
                    <h2>XXX标题</h2>
                    <p>XXX简介</p>
                </div>
                <div class="am-u-sm-3">20</div>
                <div class="am-u-sm-3">200</div>
                <div class="am-u-sm-3"><a href="#" class="am-btn am-btn-primary" style="color:#ffffff;">购买</a></div>
            </div>
            <div class="center_tab">
                <div class="am-u-sm-3 center_tab_he">
                    <h2>XXX标题</h2>
                    <p>XXX简介</p>
                </div>
                <div class="am-u-sm-3">20</div>
                <div class="am-u-sm-3">200</div>
                <div class="am-u-sm-3"><a href="#" class="am-btn am-btn-primary" style="color:#ffffff;">购买</a></div>
            </div>
            <div class="center_footer">
                <ul data-am-widget="pagination"
                    class="am-pagination am-pagination-default"
                    style="text-align: center;">
                    <li class="am-pagination-first "> <a href="#" class="">第一页</a> </li>
                    <li class="am-active"> <a href="#" class="">1</a> </li>
                    <li class=""> <a href="#" class="">2</a></li>
                    <li class=""> <a href="#" class="">3</a></li>
                    <li class=""> <a href="#" class="">4</a></li>
                    <li class="am-pagination-last "> <a href="#" class="">最末页</a> </li>
                </ul>
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
<style lang="css" src="../../assets/css/center_package.css"></style>
<style scoped lang="scss">

</style>
