$(document).ready(function(){
	var divnum=$("#wrap div").index();
	var num=0;
	$(".click_btn a").click(function(){
		num++;
		$("h1").css("color","");
		$(".click_btn a").css("color","");
		$("#wrap div").hide();
		$("#wrap div").eq(num).show();
		if(num==1){
			$("body h1").css("color","#ffffff");
			$(".click_btn a").css("color","#ffffff");
		}else if(num==3){
			num=0;
			$("h1").css("color","");
			$("#wrap div").eq(num).show();
		}
	});
});//end