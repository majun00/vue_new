<template>
    <div>
    <!--收藏中心s-->
    <div class="center_main">
       <div class="center_head">
       	   <ul>
       	   	   <li><a href="#" class="active">全部收藏</a></li>
       	   	   <li><a href="#">已取消</a></li>
       	   </ul>
       </div>
       <!--收藏-->
       <div class="center_ctr" v-if="tabs">
      	    <ul class="center_ctr_menu">
      	    	<li>
      	    		<div class="box">
      	    			<a href="#" class="name">求烧杯500个</a>
      	    			<p class="num">订单编号：123456</p>
     	    			<div class="info">        
      	    			        <a href="#" class="button">资历认证</a>
                                <a href="#" class="button">信誉等级</a>
                                <a href="#" class="button">金牌买家</a>
                        </div>
                        <div class="time">
                            <p class="time1"><i></i>一天前发布</p><p class="time2">2017.10.22截至</p>
                        </div>
                        <div class="company">
							<i></i><span>武汉****有限公司</span>
                        </div>
                        <a href="#" class="remove_btn">取消收藏</a>
      	    		</div>
      	    	</li>

      	    	<div class="clearfix"></div>
      	    </ul>
       	    <ul data-am-widget="pagination"
				class="am-pagination am-pagination-default"
				style="text-align: center; margin-top: 50px;">
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
       <!--取消收藏-->
       <div class="center_ctr" v-else>
      	    <ul class="center_ctr_menu">
      	    	<li>
      	    		<div class="box">
      	    			<a href="#" class="name">求烧杯500个</a>
      	    			<p class="num">订单编号：123456</p>
     	    			<div class="info">
      	    			        <a href="#" class="button">资历认证</a>
                                <a href="#" class="button">信誉等级</a>
                                <a href="#" class="button">金牌买家</a>
                        </div>
                        <div class="time">
                            <p class="time1"><i></i>一天前发布</p><p class="time2">2017.10.22截至</p>
                        </div>
                        <div class="company">
							<i></i><span>武汉****有限公司</span>
                        </div>
                        <a href="#" class="remove_btn">取消收藏</a>
      	    		</div>
      	    	</li>
      	    	<li>
      	    		<div class="box">
      	    			<a href="#" class="name">求烧杯500个</a>
      	    			<p class="num">订单编号：123456</p>
     	    			<div class="info">
      	    			        <a href="#" class="button">资历认证</a>
                                <a href="#" class="button">信誉等级</a>
                                <a href="#" class="button">金牌买家</a>
                        </div>
                        <div class="time">
                            <p class="time1"><i></i>一天前发布</p><p class="time2">2017.10.22截至</p>
                        </div>
                        <div class="company">
							<i></i><span>武汉****有限公司</span>
                        </div>
                        <a href="#" class="remove_btn">取消收藏</a>
      	    		</div>
      	    	</li>
      	    	<li>
      	    		<div class="box">
      	    			<a href="#" class="name">求烧杯500个</a>
      	    			<p class="num">订单编号：123456</p>
     	    			<div class="info">
      	    			        <a href="#" class="button">资历认证</a>
                                <a href="#" class="button">信誉等级</a>
                                <a href="#" class="button">金牌买家</a>
                        </div>
                        <div class="time">
                            <p class="time1"><i></i>一天前发布</p><p class="time2">2017.10.22截至</p>
                        </div>
                        <div class="company">
							<i></i><span>武汉****有限公司</span>
                        </div>
                        <a href="#" class="remove_btn">取消收藏</a>
      	    		</div>
      	    	</li>
      	    	<div class="clearfix"></div>
      	    </ul>
       	    <ul data-am-widget="pagination"
				class="am-pagination am-pagination-default"
				style="text-align: center; margin-top: 50px;">
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
    </div>
    <!--收藏中心e-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs: true
        }
    },
		methods:{

		}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../../assets/scss/center_set.scss"></style>
<style scoped lang="css" src="../../assets/css/collect.css"></style>
<style scoped lang="scss">

</style>
