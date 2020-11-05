$(document).ready(function(){
	
	//메뉴에 호버하면 배경색 체인지
	$("#menu ul li").eq(0).hover(function(){
		$("a",this).css("color","yellow");
		$(".bg_color").css("background","rgba(255,255,0,0.7)");
		$("#wall").css("background-color","rgba(255,255,0,0.3)");
	},function(){
		$("a",this).css("color","");
		$(".bg_color").css("background","");
		$("#wall").css("background-color","");
	});
	
	$("#menu ul li").eq(1).hover(function(){
		$("a",this).css("color","green");
		$(".bg_color").css("background","rgba(0,255,0,0.7)");
		$("#wall").css("background-color","rgba(0,255,0,0.3)");
	},function(){
		$("a",this).css("color","");
		$(".bg_color").css("background","");
		$("#wall").css("background-color","");
	});
	
	$("#menu ul li").eq(2).hover(function(){
		$("a",this).css("color","#000000");
		$(".bg_color").css("background","rgba(255,255,255,0.7)");
		$("#wall").css("background-color","rgba(200,200,200,0.3)");
	},function(){
		$("a",this).css("color","");
		$(".bg_color").css("background","");
		$("#wall").css("background-color","");
	});
	
	//about클릭하면 컨텐츠 나타나기
	$("#menu li:eq(0)").click(function(){
		$("#wall .about").animate({top:0},2000,"swing");
		return false;
	});
	$(".close_btn").click(function(){
		$("#wall .about").animate({top:"-200%"},2000,"swing");
	});
	
	
	//contact을 클릭하면 실행
	$("#menu li:eq(2)").click(function(){
		$("#wall").hide();
		$(".bg_color").hide();
		$("#contents_color").css("background","#ffffff");
		$("#contents_color").stop().animate({top:"50%",left:"75%",width:"50%",height:"100%"},2000);
		$(".contact").show();
		return false;
	});
	
	//contact animation
	$(".contact div ul").hover(function(){
		var h=$(window).height();
		$(".contact_1").stop().animate({top:h*0.45},2000);
		$(".contact_2").stop().animate({bottom:h*0.45},2000);
	},function(){
		$(".contact_1").stop().animate({top:0},2000);
		$(".contact_2").stop().animate({bottom:0},2000);
	});
	
	$(".close_btn_contact").click(function(){
		$("#wall").show();
		$(".bg_color").show();
		$("#contents_color").css("background","#ffffff");
		$("#contents_color").stop().animate({top:"50%",left:"50%",width:"20%",height:"50%"},2000);
		$(".contact").hide();
	});
});//end