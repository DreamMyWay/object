


$(function(){

	// 头部轮播图
	var index=0;
	$('header>.rotete>div>ul').eq(0).show().children().last().show().css({'opacity':0,'height':'0px'}).animate({'opacity':1,'height':'80px'},1000);
	$('header>.rotete>div>ul').eq(0).siblings().hide()
	function run(){
		if($('header>.rotete>div>ul').eq(index).next().length == 0){
			$('header>.rotete>div>ul').first().show();
			$('header>.rotete>div>ul').last().hide();
			index = 0;
		}else{
			$('header>.rotete>div>ul').eq(index).hide().next().show();
			index++;		
		}
		$('header>.rotete>div>ul').eq(index).children().last().show().css({'opacity':0,'height':'0px'}).animate({'opacity':1,'height':'80px'},1000);	
	}
	var timer = setInterval(run,2000);
	
	// 上一张
	$('header>.rotete>img.left').hover(function(){
		clearInterval(timer)
		$('header>.rotete>img.left').click(function(){
			$('header>.rotete>div>ul').eq(index).children().last().stop(true,true)
			clearInterval(timer)
			--index;
			if(index<0){
				index=2;
			}
			$('header>.rotete>div>ul').eq(index).show().children().last().show().css({'opacity':0,'height':'0px'}).animate({'opacity':1,'height':'100px'},1000).parent().siblings().hide();
		})
	},function(){
		timer = setInterval(run,2000);
	})
	// 下一张
	$('header>.rotete>img.right').hover(function(){
		clearInterval(timer)
		$('header>.rotete>img.right').click(function(){
			$('header>.rotete>div>ul').eq(index).children().last().stop(true,true)
			clearInterval(timer)
			index++;
			if(index>2){
				index=0;
			}
			$('header>.rotete>div>ul').eq(index).show().children().last().show().css({'opacity':0,'height':'0px'}).animate({'opacity':1,'height':'100px'},1000).parent().siblings().hide();
		})
	},function(){
		timer = setInterval(run,2000);
	})

	// 小图片轮播图
	// var time;
	time=setInterval(function(){
		var width=$(window).width();                                                                                                                                                                                       
		var imgHeight
		var a;
		var b;
		var c;
		if(width>980){
			a=width*0.25;
			b=a*0.588;
			c=width*0.25*6;
			// console.log(c)
		}
		if(width>480&&width<980){
			a=width*0.5;
			b=a*0.588;
			c=width*0.5*6;
		}
		if(width>250&&width<480){
			a=width;
			b=a*0.588;
			c=width*6;
		}
		$('main>.center>.case>.outside>.inside>a>img').css('width',a)
		$('main>.center>.case>.outside').css('height',b);
		$('main>.center>.case>.outside>.inside').css('width',c)
		var num=0;
		var left;
		// 上一张
		$('main>.center>.case>img.left').click(function(){
			clearInterval(time)
			num--;
			if(width>980){
				if(num<0){
					num=2;
				}
				left=-num*a;
			}
			if(width>480&&width<980){
				if(num<0){
					num=4
				}
				left=-num*a;	
			}
			if(width>250&&width<480){
				if(num<0){
					num=5
				}
				left=-num*a;
			}
			$('main>.center>.case>.outside>.inside').css({'margin-left':left});
				
		})
		// 下一张
		$('main>.center>.case>img.right').click(function(){
			clearInterval(time)
			num++;
			if(width>980){
				if(num>2){
					num=0;
				}
				left=-num*a;
			}
			if(width>480&&width<980){
				if(num>3){
					num=0
				}
				left=-num*a;
			}
			if(width>250&&width<480){
				if(num>4){
					num=0
				}
				left=-num*a;		
			}
			$('main>.center>.case>.outside>.inside').css({'margin-left':left});	
		})

	},1)
})
	