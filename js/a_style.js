// JavaScript Document

/*
document.oncontextmenu=new Function("event.returnValue=false;");
document.onselectstart=new Function("event.returnValue=false;");
document.body.onselectstart = document.body.ondrag = function(){
  return false;
}
*/

/*document.onkeydown = function(){
	if(window.event && window.event.keyCode == 123) {
		event.keyCode=0;
		event.returnValue=false;
	}
	if(window.event && window.event.keyCode == 13) {
		window.event.keyCode = 505;
	}
	if(window.event && window.event.keyCode == 8) {
		window.event.returnValue=false;
	}
}

var img=$("img");
img.on("contextmenu",function(){return false;});
img.on("dragstart",function(){return false;});//禁止图片拖拽

document.oncontextmenu = function (event){
	if(window.event){
	event = window.event;
	}try{
	var the = event.srcElement;
	if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
	return false;
	}
	return true;
	}catch (e){
	return false;
	}
}


//屏蔽键盘事件
document.onkeydown = function (){
	var e = window.event || arguments[0];
	//F12
	if(e.keyCode == 123){
		return false;
	//Ctrl+Shift+I
	}else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
		return false;
	//Shift+F10
	}else if((e.shiftKey) && (e.keyCode == 121)){
		return false;
	//Ctrl+U
	}else if((e.ctrlKey) && (e.keyCode == 85)){
		setTimeout(function(){
		  },1);
		return false;
	}
};
//屏蔽鼠标右键
document.oncontextmenu = function (){
	setTimeout(function(){
	  },1);
	return false;
}*/

$(".list_box_01").miso({
	fade:true
});

$(".list_box_05").miso({
	fade:true
});

$(function(){
	$(".loader").fadeOut();
	
	//menu
	var vNavWaitSlide,NavWaitSlide;
	$('.navBox li').hover(
		function(){
			$(this).addClass("active");
			var current_li=$(this),targ=$(current_li).find('.subNavbox');
			NavWaitSlide = setTimeout(function() { 
				if(!$(targ).is(':visible'))
				{
					  $(targ).slideDown(300);
				}
			},100)
		},
	   function(){
			clearTimeout(NavWaitSlide);
			$(this).find('.subNavbox').hide();
			$(this).removeClass("active");
		}
	);
	
	$('.search_btn').on('click',function(){
		$('.search-dialog-box').toggleClass("on");
	});
	
	$('.search-dialog-box .pub-close').on('click',function(){
		$('.search-dialog-box').removeClass("on");
	});
	
	//移动端导航

	   $("#m_nav .title .list").css({"opacity":"1","visibility":"visible"});
	  /* $("#m_nav .title .a").attr("href","javascript:void(0)");
	   $("#m_nav .title .void>a").attr("href","javascript:void(0)");*/
	   $("#m_nav .title i").click(function(){
		   var tt = $(this).parents(".title");
		  if ($(tt).hasClass('on')) {
			  $(tt).children(".list").slideUp(600); //展开
			  $(tt).removeClass("on"); 
			}else{
			  $("#m_nav .title ").removeClass("on");
			  $("#m_nav .title .list").slideUp();
			  $(tt).children(".list").slideDown();
			  $(tt).toggleClass("on"); 
			}
	   });
	   /*$("#m_nav .sub").hide();
	   $("#m_nav .void").click(function(){
			$(this).children(".sub").slideToggle(); //展开
	   });*/
	   $("#nav_btn_box").click(function(){
		  $("#nav_btn_box .point").toggleClass("on"); 
		  $("#nav_btn_box").toggleClass("on"); 
		  $("#m_nav").toggleClass("act");
		  $(".nav_mask").fadeToggle();
	   });

	  $(".nav_mask").click(function(){
		  $("#nav_btn_box .point").removeClass("on"); 
		  $("#nav_btn_box").removeClass("on"); 
		  $(this).fadeToggle();
		  $(".nav_btn_box").removeClass("act");
		  $("#m_nav").removeClass("act");
	  })
	  
	  $("#m_nav .close").click(function(){
		  $("#nav_btn_box .point").removeClass("on"); 
		  $("#nav_btn_box").removeClass("on"); 
		  $(".nav_btn_box").removeClass("act");
		  $("#m_nav").removeClass("act");
		  $(".nav_mask").fadeOut();
	  })
	  
	$(".n_container .n_left .con ul li:not('.on')").mouseenter(function() {
		$(this).find("dl").stop().slideDown();
	});
	$(".n_container .n_left .con ul li:not('.on')").mouseleave(function() {
		$(this).find("dl").stop().slideUp();
	});
	
	$(".list_box_sanji li").hover(function() {
		$(this).stop().addClass("on");
		$(this).siblings().stop().removeClass("on");
	}, function() {
		$(this).stop().removeClass("on");
		$(".list_box_sanji li.on1").stop().addClass("on");
	});
	
	  //移动端内页导航
	$("#bnt_sub_nav").click(function(){
  	$(this).toggleClass("on");
		$("#sub_nav_content").slideToggle();
	  });

	$("#sub_nav_content dt.title a").attr("href","javascript:void(0)");
	$("#sub_nav_content dt.title_on").next("dd").show();
	$("#sub_nav_content dt.title").click(function() {
		if ($(this).hasClass("title_on")) {
			$(this).next("dd").slideToggle();
			$(this).removeClass("title_on");
		} else {
			$("#sub_nav_content dd").slideUp();
			$("#sub_nav_content dt.title").removeClass("title_on").removeClass("on");
			$(this).toggleClass("title_on");
			$(this).next("dd").slideDown();
		}
	});  
	$("#sub_nav_content ul li i").click(function(){
		$(this).next("ul").slideToggle();
		$(this).parents("#sub_nav_content ul li").siblings().find("ul").slideUp();
	});
	
	if ($(".list_box00").length) {
	    $(".list_box00 li").each(function (i) {
	        $(this).css({ 'transition-delay': i * 200 + 200 + 'ms' });
	    });
	}
	
	//IE9 兼容placdholder属性
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }
    if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
        $("[placeholder]").each(function(){
            var _this = $(this);
           // console.log($(this).height());
            var inputHeight = parseInt(parseInt($(this).height()-2)-14)/2;
            var inputHeight = parseInt(parseInt(parseInt($(this).height()-2)/2)-7)+'px';
            _this.parent().css({"position": "relative"});
            var left = _this.position().left+parseInt(_this.css("padding-left"))+parseInt(_this.css("margin-left"))+"px";
            var top = parseInt(_this.css("padding-top"));//+parseInt(_this.css("margin-top"))+"px";
            var top = parseInt(_this.css("padding-top"));//+parseInt(_this.css("margin-top"))+"px";
            _this.after('<span class="placeholder" data-type="placeholder" style="position: absolute;font-size:14px; top: '+ inputHeight +'; left: ' + left + '">' + _this.attr("placeholder") + '</span>');
            //_this.after('<span class="placeholder" data-type="placeholder" style="position: absolute; top: 0px; left: ' + left + '">' + _this.attr("placeholder") + '</span>');
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        }).on("focus", function(){
            $(this).parent().find("span.placeholder").hide();
        }).on("blur", function(){
            var _this = $(this);
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        });
        // 点击表示placeholder的标签相当于触发input
        $("span.placeholder").on("click", function(){
            $(this).hide();
            $(this).siblings("[placeholder]").trigger("click");
            $(this).siblings("[placeholder]").trigger("focus");
        });
    }
	
	/*$('.container00 .miso_hd').miso({
	  autoplaySpeed: 6000,
	  autoplay: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false, 
	  dots:false, 
	  touchThreshold: 10,
	  pauseOnHover: false,
	  focusOnSelect: true,
	  asNavFor: '.container00 .miso_bd'
	});
	$('.container00 .miso_bd').miso({
	  autoplaySpeed: 6000,
	  autoplay: false,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false, 
	  dots:false, 
	  touchThreshold: 10,
	  pauseOnHover: false,
	  focusOnSelect: true,
	  asNavFor: '.container00 .miso_hd'
	});
	
	var smVideo = {
		load: function (objs) {
			var objplay = jwplayer(objs.vcontainer).setup({
				html5player: '/static/style/pc/js/video/html5player.js',
				file: objs.vfiles,
				image: objs.vfimg,
				width: '100%',
				height: '100%',
				aspectratio: '16:9',
				stretching: 'fill',
				controls: 'true',
				autostart: objs.isautoplay
			});
			return objplay;
		}
	}
	$('').click(function () { 
		smVideo.load({
            vcontainer: 'videobox',  //视频容器
            vfiles:  jQuery(this).attr("data-video"), //视频地址
            vfimg: jQuery(this).attr("data-img"), //视频缩略图(封面)
            isautoplay: 'true'
        });
	    $(".vwrap").fadeIn();
	});
	
	$(".vwrap .close").click(function () { 
		$(".vwrap").hide();
        $('#videobox').html("");
	});*/
});