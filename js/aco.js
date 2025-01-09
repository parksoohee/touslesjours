$(function(){
	$(".aco> li").click(function(){
		$(this).children(".menu_info").slideToggle();
		$(this).siblings().children(".menu_info").slideUp();
	});
});
$(function(){
	$(".aco> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});






