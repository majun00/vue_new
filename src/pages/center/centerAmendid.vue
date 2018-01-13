<template>
    <div>
        <div class="center_main">
            <!--身份验证s-->
            <div class="main-top">
                <div class="main-top-hader">
                    <div class="main-top-hader-l">
         			<span class="l-span">
         				<img src="../../assets/images/tishi.png">
         			</span>
                    </div>
                    <div class="main-top-hader-r">
                        <p class="main-top-hader-r-h headline">您还未进行身份认证，请填写以下信息进行验证。</p>
                        <p class="main-top-hader-r-b moreline">实名认证：个人身份证，用以提升账号安全及信任等级，认证之后不能进行更改。</p>
                    </div>
                </div>
                <div class="main-top-cent">
                    <p class="headline main-top-cent-h">身份信息</p>
                </div>
            </div>
            <div class="main-bottom">
                <div class="main-bottom-inpbox">
                    <div class="main-bottom-inpbox-l">
                        <label class="input-label " for="">真实姓名：</label>
                        <span class="input-span">*</span>
                        <input class="input-box right-box" type="text">
                    </div>
                    <div class="main-bottom-inpbox-r">
                        <p class="moreline input-box-line">请填写身份证上姓名，它也是您在本站上使用的银行卡的开户姓名。</p>
                    </div>
                </div>
                <div class="main-bottom-inpbox">
                    <div class="main-bottom-inpbox-ll">
                        <label class="input-label" for="">身份证号码：</label>
                        <span class="input-span">*</span>
                        <input class="input-box right-box id-box" type="text">
                    </div>
                </div>
                <div class="main-bottom-inpbox file-inpbox">
                    <div class="main-bottom-inpbox-l file-inpbox-l file-inpboxs">
                        <label class="input-label file-input-label" for="">上传身份证：</label>
                        <span class="input-span file-span">*</span>
                        <span class="file-input-bg file-input-bg-m">
        	          	  <input class="file-input" type="file">
        	          </span>
                        <span class="file-input-bg">
        	          	  <input class="file-input" type="file">
        	          </span>
                    </div>
                    <div class="main-bottom-inpbox-r file-inpbox-r file-inpboxs">
                        <p class="moreline file-box-line">照片支持jpg、gif、bmp、png格式，图片最大不要超过2M。</p>
                    </div>
                </div>
                <div class="main-bottom-inpbox resinbox">
                    <p class="morelinemin resinbox-pos resinbox-pos-1">身份证正面照</p>
                    <p class="morelinemin resinbox-pos">身份证反面照</p>
                </div>

            </div>
            <div class="main-showcar">
                <div class="main-showcar-cent-1">
                    <p class="moreline main-showcar-cent-head">身份证正面照</p>
                    <p class="morelinemin main-showcar-cent-text">需要能看清姓名、身份证号等信息。</p>
                    <img src="../../assets/images/timg (2).png">
                    <p class="moreline main-showcar-sl">示例</p>
                </div>
                <div class="main-showcar-cent-2">
                    <p class="moreline  main-showcar-cent-head">身份证反面照</p>
                    <p class="morelinemin  main-showcar-cent-text">需要能看清有效日期等信息。</p>
                    <img src="../../assets/images/timg (1).png">
                    <p class="moreline main-showcar-sl main-showcar-sl-2">示例</p>
                </div>
            </div>
            <div class="main-btn">
                <a class="savebtn" href="#"><p class="pp">保存</p></a>
            </div>
            <!--身份验证e-->
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
<style lang="css" src="../../assets/css/verificationid.css"></style>
<style scoped lang="scss">

</style>
