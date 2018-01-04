$(document).ready(function(){
    $(".job-tab li").click(function(){
        var index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".job-tab-content > li").eq(index).show();
        $(".job-tab-content > li").eq(index).siblings().hide();
    })
    $(".job-tab li").eq(0).attr("class", "on");
    $(".job-tab-content > li").eq(0).show();

    /*输入框的提示弹出与隐藏*/
    $(".search").on("focus blur",function(event){
        if(event.type == "focus"){
            $(".search-tips").show();
        }
        else if(event.type == "blur"){
            $(".search-tips").hide();
        }
    })

    /*友情链接展开*/
    $(".morelink").on("click",function(){
        var show = $(".morelink").text();
        if(show == "展开∨"){
            $(".link-list").css("height","130px");
            $(".morelink").text("收起∧");
        }
        else{
            $(".link-list").css("height","60px");
            $(".morelink").text("展开∨");
        }
    })

    /*滚动快速工具*/
    $(document).scroll(function(){
        var top = $(document).scrollTop();
        if(top > 5){
            $(".back-to-top").fadeIn();
        }else{
            $(".back-to-top").fadeOut();
        }
    })

/*    $(".back-to-top").on("click", function(){
        $("html").animate({scrollTop: 0}, 800);
        return false;
    });*/

    //接受协议
    $("#agree i").on("click",function(){
        if($(this).hasClass("active")){
            $(this).removeClass()
            $('.pleaseAgree').show()
        }else{
            $(this).addClass("active")
            $('.pleaseAgree').hide()
        }
    })

    //协议判断
    $('.btn').on('click',function(){
        if($('#agree i').hasClass('active')==false){
            $('.pleaseAgree').show()
            return false;
        }
    })

    //验证切换
    $(".forget_phone").show()
    $(".forget_email").hide()
    $(".user_phone").on("click",function(){
        $(".forget_phone").show()
        $(".forget_email").hide()
    })
    $(".user_email").on("click",function(){
        $(".forget_email").show()
        $(".forget_phone").hide()
    })

    //验证码
    $('#password').keyup(function () {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");

        if (false == enoughRegex.test($(this).val())) {
            $('#level').removeClass('pw-weak');
            $('#level').removeClass('pw-medium');
            $('#level').removeClass('pw-strong');
            $('#level').addClass(' pw-defule');
            //密码小于六位的时候，密码强度图片都为灰色
        }
        else if (strongRegex.test($(this).val())) {
            $('#level').removeClass('pw-weak');
            $('#level').removeClass('pw-medium');
            $('#level').removeClass('pw-strong');
            $('#level').addClass(' pw-strong');
            //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强
        }
        else if (mediumRegex.test($(this).val())) {
            $('#level').removeClass('pw-weak');
            $('#level').removeClass('pw-medium');
            $('#level').removeClass('pw-strong');
            $('#level').addClass(' pw-medium');
            //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
        }
        else {
            $('#level').removeClass('pw-weak');
            $('#level').removeClass('pw-medium');
            $('#level').removeClass('pw-strong');
            $('#level').addClass('pw-weak');
            //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的
        }
        return true;
    });

    //上传功能
/*    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth >= 640) {
                    docEl.style.fontSize = '100px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);*/

    //团购进度条
    $(function(){
        $(".cdd").each(function(){
            var total=$(this).find("b").attr('title');
            var num=$(this).find('font').html();
            $(this).find("b").width(num/total*50);
        })
    })

    //表单验证
    $(function(){
        /*对input进行判断*/
        $('.list_uname').blur(function(){
            if($(this).val().length==0){
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("请输入企业或实验室名称");
                $(this).next("span").css("color",'red');
            }else if($(this).val().length>0 && $(this).val().length<4){
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("长度只能在4-20个字符之间");
                $(this).next("span").css("color",'red');
            }else if($(this).val().length>=4&& !isNaN($(this).val())){
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("用户名不能为纯数字");
                $(this).next("span").css("color",'red');
            }else{
                $(this).next("span").text(" √ ");
                $(this).next("span").addClass("greenTrue");
            }
        })
        /*密码*/
        $('.list_pwd').blur(function(){
            if($(this).val().length==0){
                $(this).next("span").text("请输入由字母和数字组成的6-18个字符");
                $(this).next("span").css("color",'red');
                $(this).next("span").removeClass("greenTrue");
            }else if($(this).val().length>0 && $(this).val().length<6){
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("长度只能在6-20个字符之间");
                $(this).next("span").css("color",'red');
            }else{
                $(this).next("span").text(" √ ");
                $(this).next("span").addClass("greenTrue");
            }
        })
        //	确认密码
        $('.list_spwd').blur(function(){
            if($(this).val().length==0){
                $(this).next("span").text("请与原密码保持一致");
                $(this).next("span").css("color",'red');
                $(this).next("span").removeClass("greenTrue");

            }else if($(this).val()!=$('.list_pwd').val()){
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("两次密码不匹配");
                $(this).next("span").css("color",'red');
            }else{
                $(this).next("span").text(" √ ");
                $(this).next("span").addClass("greenTrue");
            }

        });
        //	手机号
        $('.list_tel').blur(function(){
            if($(this).val().length==0){
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("请输入正确格式的手机号");
                $(this).next("span").css("color",'red');

            }else if($(this).val().match(/^(13[0-9]|14[57]|15[0-9]|17[0-9]|18[0-9])\d{8}$/)){
                $(this).next("span").text(" √ ");
                $(this).next("span").addClass("greenTrue");
            }else{
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("手机号格式不正确");
                $(this).next("span").css("color",'red');
            }
        });

        $('.list_phone').blur(function(){
            if($(this).val().length==0){
                $(this).next("span").text("请输入正确格式的固话或手机");
                $(this).next("span").css("color",'red');
                $(this).next("span").removeClass("greenTrue");

            }else if($(this).val().match(/^((0\d{2,3}-\d{7,8})|(1[35784]\d{9}))$/)){
                $(this).next("span").text(" √ ");
                $(this).next("span").addClass("greenTrue");
            }else{
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("固定电话或手机号格式不正确");
                $(this).next("span").css("color",'red');
            }
        });

        $('.list_idc').blur(function(){
            if($(this).val().length==0){
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("请输入正确格式的身份证号码");
                $(this).next("span").css("color",'red');
            }else if($(this).val().match(/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/)){
                $(this).next("span").text(" √ ");
                $(this).next("span").addClass("greenTrue");
            }else{
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("身份证号码格式不正确");
                $(this).next("span").css("color",'red');
            }
        });


        $('.list_society').blur(function(){
            if($(this).val().length==0){
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("请输入正确的统一社会信用代码");
                $(this).next("span").css("color",'red');

            }else if($(this).val().match(/[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/)){
                $(this).next("span").text(" √ ");
                $(this).next("span").addClass("greenTrue");
            }else{
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("统一社会信用代码格式不正确");
                $(this).next("span").css("color",'red');
            }
        });

        $('#m_prov').blur(function(){
            console.log($('#m_prov option:selected').prop('value'))
            if($('#m_prov option:selected').prop('value')==0){
                $(this).next("span").removeClass("greenTrue");
                $(this).next("span").text("请选择所在省份");
                $(this).next("span").css("color",'red');
            }else{
                $(this).next("span").text(" √ ");
                $(this).next("span").addClass("greenTrue");
            }
        })

        function code(){
            var str="qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM";
            var str1=0;
            for(var i=0; i<4;i++){
                str1+=str.charAt(Math.floor(Math.random()*62))
            }
            str1=str1.substring(1);
            $(".code").text(str1);
        }
        (function(){
            code();
        })

        $(".code").click(code);
        $('.list input').eq(4).blur(function(){
            if($(this).val().length==0){
                $(this).next().next("div").text("");
            }else if($(this).val().toUpperCase()!=$(".code").text().toUpperCase()){
                $(this).next().next("div").text("验证码不正确");
                $(this).next().next("div").css("color",'red');
            }else{
                $(this).next("div").text(" √ ");
                $(this).next("div").css("color",'green');
            }
        });
        $('.first input').eq(4).blur(function(){
            if($(this).val().length==0){
                $(this).next().next("div").text("");
            }else if($(this).val().toUpperCase()!=$(".code").text().toUpperCase()){
                $(this).next().next("div").text("验证码不正确");
                $(this).next().next("div").css("color",'red');
            }else{
                $(this).next("div").text(" √ ");
                $(this).next("div").css("color",'green');
            }
        });
        $('.first input').eq(5).blur(function(){
            if($(this).val().length==0){
                $(this).next("div").text("");

            }
            else{
                $(this).next("div").text(" √ ");
                $(this).next("div").css("color",'green');
            }
        });

        $('.list input').eq(5).blur(function(){
            if($(this).val().length==0){
                $(this).next("div").text("");
            }
            else{
                $(this).next("div").text(" √ ");
                $(this).next("div").css("color",'green');
            }
        });

        $('.first input').eq(6).blur(function(){
            if($(this).val().length==0){
                $(this).next("div").text("");
            }else if($(this).val()!="@"){
                $(this).next("div").text("格式不正确");
            }
            else{
                $(this).next("div").text(" √ ");
                $(this).next("div").css("color",'green');
            }
        });

        $('.list input').eq(6).blur(function(){
            if($(this).val().length==0){
                $(this).next("div").text("");
            }
            else{
                $(this).next("div").text(" √ ");
                $(this).next("div").css("color",'green');
            }
        });
// /*提交按钮*/
//     $('.btn').click(function(e){
//         for(var j=0;j<7;j++){
//             if($('.first input').eq(j).val().length==0){
//                 $('.first input').eq(j).next(".tips").text("此处不能为空");
//                 $('.first input').eq(j).next(".tips").css("color",'red');
//                 e.preventDefault();
//                 return;
//                 if(j==5){
//                     $('.first input').eq(j).next().next("div").text("此处不能为空");
//                     $('.first input').eq(j).next().next("div").css("color",'red');
//                     e.preventDefault();
//                     return;
//                 }
//             }
//         }
//     })
//     $('.btn').click(function(e){
//         for(var j=0;j<7;j++){
//             if($('.list input').eq(j).val().length==0){
//                 $('.list input').eq(j).next(".tips").text("此处不能为空");
//                 $('.list input').eq(j).next(".tips").css("color",'red');
//                 e.preventDefault();
//                 return;
//                 if(j==5){
//                     $('.list input').eq(j).next().next("div").text("此处不能为空");
//                     $('.list input').eq(j).next().next("div").css("color",'red');
//                     e.preventDefault();
//                     return;
//                 }
//             }
//         }
//     })
		
			//checkbox点击切换
		$(".check_ok").click(function(){
					$(this).parents(".check_reset").toggleClass("check_resets");
				});
		
		//收货地址单选效果	
        $(".conter_dz").click(function(){
	           $(this).siblings().removeClass("conter_dz_active");
	           $(this).addClass("conter_dz_active");
         });
		
		//全选
	    $("#checkall").click(function(){   
              if(this.checked){   
                      $(":checkbox").prop("checked", true);
		              $(":checkbox").parents(".check_reset").addClass("check_resets");
              }else{   
	                  $(":checkbox").prop("checked", false);
		              $(":checkbox").parents(".check_reset").removeClass("check_resets");
            }   
         });
		//检查开票信息表格样式
		$(".table_kpxx tr td:even").css({"background-color":"#f7f7f7","width":"120px","text-align":"center"});
		$(".table_kpxx tr td:odd").css("width","398px");
		$(".table_kpxx tr td p:odd").css({"margin":"10px 26px","line-height":"30px"});
		$(".table_kpxx tr td p:even").css({"margin":"10px auto","line-height":"30px"});
		
		
		//确认订单样式设置
	    $(".table_sitemess_header td:eq(0)").css("color","150px");
        $(".table_sitemess_header td:eq(1)").css("width","450px");
		$(".table_sitemess_header td:eq(2)").css("width","119px");
		$(".table_sitemess_header td:eq(3)").css("width","270px");
		$(".table_sitemess_header td:eq(4)").css("width","119px");
		
		//修改价格/
		$(".pricebtnup,.pricebtndown").mousedown(function(){
			$(this).css({"background-color":"#a1a1a1","color":"#ffffff"});
		});
		$(".pricebtnup,.pricebtndown").mouseup(function(){
			$(this).css({"background-color":"#e6e6e6","color":"#a1a1a1"});
		});

		$(".pricebtnup").click(function(){
			$(this).siblings("input").val(Number($(this).siblings("input").val())+1);
		});
		$(".pricebtndown").click(function(){
			shopnumber=Number($(this).siblings("input").val());
			if(shopnumber>0){
			$(this).siblings("input").val(shopnumber-1);
			}
		});
		$(".delete_table").click(function(){
			$(this).parents("tr").remove();
		});
		
	    //表格折叠功能	
        //搓的一笔 
      	$(".down").click(function(){
			var line_h=$(this).parents(".center_list").find(".center_list_body .am-u-sm-5").height();
			if(line_h>200){
			$(this).css("display","none");			
			$(this).next().css("display","block");
			$(this).parents(".center_list").find(".center_list_body").css("max-height",line_h+20+"px");
			}
		});
			$(".up").click(function(){
			$(this).css("display","none");
			$(this).prev().css("display","block");
			$(this).parents(".center_list").find(".center_list_body").css("max-height","200px");
		});
		
		
		
		//服务中心折叠效果
		$(".center_nav ul li > a").click(function(){
			$(this).toggleClass("hover");
			$(this).find("i").toggleClass("background","url(./images/down_a.png)");
			$(this).next().stop().slideToggle(300);
		});
		$(".center_nav .toggle > a").click(function(){
			$(this).siblings().removeClass("click")
			$(this).toggleClass("click");
		});

		
		

    });



})
