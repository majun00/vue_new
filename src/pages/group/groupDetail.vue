<template>
    <div>
        <div class="container">
            <div class="product">
                <div class="p_left am-u-md-6 am-u-sm-12" style="padding-left: 0;">
                    <div data-am-widget="slider" class="am-slider am-slider-default"
                         data-am-slider='{"animation":"slide","controlNav":"thumbnails"}'>
                        <ul class="am-slides">
                            <li data-thumb="http://s.amazeui.org/media/i/demos/bing-1.jpg">
                                <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg">

                            </li>
                            <li data-thumb="http://s.amazeui.org/media/i/demos/bing-2.jpg">
                                <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg">

                            </li>
                            <li data-thumb="http://s.amazeui.org/media/i/demos/bing-3.jpg">
                                <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg">

                            </li>
                            <li data-thumb="http://s.amazeui.org/media/i/demos/bing-4.jpg">
                                <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg">

                            </li>
                        </ul>
                    </div>
                </div>
                <div class="p_right am-u-md-6 am-u-sm-12" style="padding-right: 0;">
                    <h4>科晶丁腈手套 M号 1箱</h4>
                    <p class="p3">参团预售达到目标数量成团，未达到目标退款参团定金膨胀50%，20，定金可抵扣30元，成团后参团买家放弃购买，定金不退。</p>
                    <p class="p1">
                        <a href="#" class="button">包邮</a>
                        <a href="#" class="button">100只/盒</a>
                        <a href="#" class="button">10盒/箱</a>
                    </p>
                    <div class="standard p clearfix">
                        <div class="minus-plus">
                            <span class="jaj">数量：</span>
                            <a class="mins" href="javascript:void(0);" onclick="altergoodsnum(-1)">-</a>
                            <input class="buyNum" id="number" type="text" name="goods_num" value="1"
                                   onblur="altergoodsnum(0)" max="100"/>
                            <a class="add" href="javascript:void(0);" onclick="altergoodsnum(1)">+</a>
                            <span class="sav_shop" style="margin-left: 10px;">剩余库存：<span
                                    id="store_count">100</span></span>
                        </div>
                    </div>
                    <p class="p2">
                        <span class="red">￥<span style="font-size: 30px;">285.00 </span> <s> ￥350.00</s></span>
                        <span class="sc"><i></i><span>收藏</span></span>
                    </p>
                    <div class="p4">
                        <a href="#" class="button active">立即抢购</a>
                    </div>
                    <!--            <ul class="zhifu clearfix">
                                    <li>支付</li>
                                     <li>金币支付</li>
                                    <li>信用额度</li>
                                    <li>非质量问题不退货</li>
                                </ul>-->

                </div>
            </div>
        </div>

        <div class="god" style="background-color: #f7f7f7;margin-top: -40px;padding-top: 40px;padding-bottom: 40px;">
            <div class="container clearfix">
                <div class="n_left fl clearfix">
                    <h4>商家信息</h4>
                    <div class="box">
                        <a href="#">
                            <i></i><span>武汉******</span><s></s>
                            <p class="p1">信用等级: 黄钻等级</p>
                            <p class="p1">保证金: 1000.00</p>
                            <p class="p2">成功交易: 111笔</p>
                            <p class="p3">电话: 1111****1111</p>
                            <p class="p3">邮箱: 1111@aaa.com</p>
                        </a>
                    </div>
                    <h4 style="margin-top: 20px;">热门团购</h4>
                    <div class="">
                        <div class="company-list">
                            <div class=" company-info">
                                <img src="../../assets/images/product.png" alt="">
                                <div class="am-g" style="margin-top: 10px;">
                                    <p class="p1">管嘴盒100ul</p>
                                    <div class="am-u-md-6 left">
                                        <p class="p2"><span class="red"><span style="font-size: 12px;">￥</span>72</span><span
                                                class="gray">￥100</span></p>
                                        <p class="p3">已抢200件</p>
                                    </div>
                                    <div class="am-u-md-6 right">
                                        <p class="p2">满300件起团</p>
                                        <router-link to="/groupDetail" class="p3 button active">马上抢</router-link>
                                    </div>
                                    <div class="am-progress am-progress-xs">
                                        <div class="am-progress-bar am-progress-bar-danger" style="width: 80%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="company-list">
                            <div class=" company-info">
                                <img src="../../assets/images/product.png" alt="">
                                <div class="am-g" style="margin-top: 10px;">
                                    <p class="p1">管嘴盒100ul</p>
                                    <div class="am-u-md-6 left">
                                        <p class="p2"><span class="red"><span style="font-size: 12px;">￥</span>72</span><span
                                                class="gray">￥100</span></p>
                                        <p class="p3">已抢200件</p>
                                    </div>
                                    <div class="am-u-md-6 right">
                                        <p class="p2">满300件起团</p>
                                        <router-link to="/groupDetail" class="p3 button active">马上抢</router-link>
                                    </div>
                                    <div class="am-progress am-progress-xs">
                                        <div class="am-progress-bar am-progress-bar-danger" style="width: 80%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="company-list">
                            <div class=" company-info">
                                <img src="../../assets/images/product.png" alt="">
                                <div class="am-g" style="margin-top: 10px;">
                                    <p class="p1">管嘴盒100ul</p>
                                    <div class="am-u-md-6 left">
                                        <p class="p2"><span class="red"><span style="font-size: 12px;">￥</span>72</span><span
                                                class="gray">￥100</span></p>
                                        <p class="p3">已抢200件</p>
                                    </div>
                                    <div class="am-u-md-6 right">
                                        <p class="p2">满300件起团</p>
                                        <router-link to="/groupDetail" class="p3 button active">马上抢</router-link>
                                    </div>
                                    <div class="am-progress am-progress-xs">
                                        <div class="am-progress-bar am-progress-bar-danger" style="width: 80%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="g_p_detail" class="n_right fl" style="margin-top: 20px;padding-right: 0;padding-left: 0;">
                    <div data-am-widget="tabs" class="am-tabs am-tabs-default">
                        <ul class="am-tabs-nav am-cf">
                            <li class="am-active"><a href="[data-tab-panel-0]">产品简介</a></li>
                            <li class=""><a href="[data-tab-panel-1]">技术指标</a></li>
                            <li class=""><a href="[data-tab-panel-2]">订购指南</a></li>
                            <li class=""><a href="[data-tab-panel-3]">评论</a></li>
                        </ul>
                        <div class="am-tabs-bd">
                            <div data-tab-panel-0 class="am-tab-panel am-active">
                                <h4>产品简介</h4>
                                <div class="m_cont">
                                    <h4 style="color: #333;">产品描述：</h4>
                                    <p>PIPETMANL手动单道移液器是Gilson的最新创造，结合了人体工程学 舒适度和可追溯性研究，保留了经典版移液 器坚固耐用的特点，重新设计机身，更具审美艺术。PIPETMANL的每一处设计都用以实现用户的期望，提高日常工 作效率，减轻手指疲劳。</p>
                                    <h4 style="color: #333;">产品优势：</h4>
                                    <p><span style="color: #0077e0">■&nbsp;&nbsp;</span>手柄形状易于持握</p>
                                    <p><span style="color: #0077e0">■&nbsp;&nbsp;</span>移液舒适度高</p>
                                    <p><span style="color: #0077e0">■&nbsp;&nbsp;</span>量程锁定系统保证移液过程容量不会发生意外改变</p>
                                    <p><span style="color: #0077e0">■&nbsp;&nbsp;</span>确保移液精准度</p>
                                    <p><span style="color: #0077e0">■&nbsp;&nbsp;</span>轻质，弹射器按钮可调</p>
                                </div>
                            </div>
                            <div data-tab-panel-1 class="am-tab-panel ">
                                <h4>技术指标</h4>
                                <p> 测量范围：0.1～10mg/L 氟化物</p>
                                <p> 准确度：± 10% 或± 0.10mg/L，取较大者</p>
                                <p> 检测限：0.01ppm</p>
                                <p> 测量周期：4.2 分钟</p>
                                <p> 模拟输出：1 路4～20mA，在0.1～10mg/L 范围内可任意设定</p>
                                <p> 报警输出：两个报警，可选为样品浓度、系统警告或系统停机报</p>
                                <p> 每个警报配备一个SPDT继电器，5A, 230Vac</p>
                            </div>
                            <div data-tab-panel-2 class="am-tab-panel ">
                                <h4>订购指南</h4>
                                <p> 57400-01 CA610 氟化物分析仪</p>
                                <p> 57400-02 CA610 带网络功能的氟化物分析仪</p>
                                <p> 28169-00 整套试剂：包括：试剂1 TISAB，标和标准样2</p>
                                <p> 57421-00 维护组件；（包括一年耗材）</p>
                                <p> 57444-00 泵管组件</p>
                                <p> 57427-00 仪器管道组件</p>
                                <p> 57448-00 传感器组件；（包括离子选择传感器、传感器头和填充液）</p>
                                <p> 55281-00 pH 参比传感器</p>
                                <p> 55277-00 ISE 离子选择传感器</p>
                                <p> 57451-00 传感器头</p>
                            </div>
                            <div data-tab-panel-3 class="am-tab-panel ">
                                <ul class="am-comments-list am-comments-list-flip">
                                    <li class="am-comment">
                                        <article class="am-comment"> <!-- 评论容器 -->
                                            <a href="">
                                                <img src="../../assets/images/company.png" class="am-comment-avatar"
                                                     alt=""/> <!-- 评论者头像 -->
                                                <span>xxx(匿名)</span>
                                            </a>

                                            <div class="am-comment-main"> <!-- 评论内容容器 -->
                                                <div class="am-comment-bd">很好。</div> <!-- 评论内容 -->
                                                <header class="am-comment-hd">
                                                    <!--<h3 class="am-comment-title">评论标题</h3>-->
                                                    <div class="am-comment-meta"> <!-- 评论元数据 -->
                                                        <time datetime="">2017年12月1日 21:00</time>
                                                    </div>
                                                </header>
                                                <div class="am-comment-bd">商家回复: 谢谢。</div> <!-- 评论内容 -->
                                            </div>
                                        </article>
                                    </li>
                                    <li class="am-comment">
                                        <article class="am-comment"> <!-- 评论容器 -->
                                            <a href="">
                                                <img src="../../assets/images/company.png" class="am-comment-avatar"
                                                     alt=""/> <!-- 评论者头像 -->
                                                <span>xxx(匿名)</span>
                                            </a>

                                            <div class="am-comment-main"> <!-- 评论内容容器 -->
                                                <div class="am-comment-bd">很好。</div> <!-- 评论内容 -->
                                                <header class="am-comment-hd">
                                                    <!--<h3 class="am-comment-title">评论标题</h3>-->
                                                    <div class="am-comment-meta"> <!-- 评论元数据 -->
                                                        <time datetime="">2017年12月1日 21:00</time>
                                                    </div>
                                                </header>
                                                <div class="am-comment-bd">商家回复: 谢谢。</div> <!-- 评论内容 -->
                                            </div>
                                        </article>
                                    </li>
                                    <li class="am-comment">
                                        <article class="am-comment"> <!-- 评论容器 -->
                                            <a href="">
                                                <img src="../../assets/images/company.png" class="am-comment-avatar"
                                                     alt=""/> <!-- 评论者头像 -->
                                                <span>xxx(匿名)</span>
                                            </a>

                                            <div class="am-comment-main"> <!-- 评论内容容器 -->
                                                <div class="am-comment-bd">很好。</div> <!-- 评论内容 -->
                                                <header class="am-comment-hd">
                                                    <!--<h3 class="am-comment-title">评论标题</h3>-->
                                                    <div class="am-comment-meta"> <!-- 评论元数据 -->
                                                        <time datetime="">2017年12月1日 21:00</time>
                                                    </div>
                                                </header>
                                                <div class="am-comment-bd">商家回复: 谢谢。</div> <!-- 评论内容 -->
                                            </div>
                                        </article>
                                    </li>

                                </ul>

                            </div>
                        </div>
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
<style lang="scss" src="../../assets/scss/group_detail.scss"></style>
<style scoped lang="scss">

</style>
