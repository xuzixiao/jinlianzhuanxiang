
$(function(){
	$(".fac_tab .tab a").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.fac_tab .content li').hide();
		$('.fac_tab .content li:eq('+index+')').show();
	});
	
	var auto = 0;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('.fac_tab .tab a').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('.fac_tab .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
			$('.fac_tab .content ul li:eq('+number+')').show().siblings().hide();
		}
		var tabChange = setInterval(autotab,3000);
		//鼠标悬停暂停切换
		$('.fac_tab').mouseover(function(){
			clearInterval(tabChange);
		});
		$('.fac_tab').mouseout(function(){
			tabChange = setInterval(autotab,3000);
		});
	  }
});
