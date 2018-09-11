$(function(){
		// 导航栏部分
		$('div.header>.navigation>ul>li>a').eq(4).css({'borderBottom':'1px solid #000','color':'#000'});
		// 轮播图部分
		// $('div.box>.header>.rotete>.img>ul').css('border','3px solid red')
		$(function(){
			var index=0;
			function run(){
				if($('div.box>.header>.rotete>.images>ul').eq(index).next().length == 0){
					$('div.box>.header>.rotete>.images>ul').first().show();
					$('div.box>.header>.rotete>.images>ul').last().hide();
					index = 0;
				}else{
					$('div.box>.header>.rotete>.images>ul').eq(index).hide().next().show();
					index++;
				}
				// console.log(index)
				$('div.box>.header>.rotete>.img>ul').eq(index).css('border','3px solid #609AB1').siblings().css('border','3px solid transparent')	
			}
			
			var timer = setInterval(run,3000);
			// 上一张
			$('div.header>.rotete>img.left').hover(function(){
				clearInterval(timer)
				$('div.header>.rotete>img.left').click(function(){
					// clearInterval(timer)
					--index;
					if(index<0){
						index=3;
					}
					console.log(index)
					$('div.box>.header>.rotete>.images>ul').eq(index).show().siblings().hide();
					$('div.box>.header>.rotete>.img>ul').eq(index).css('border','3px solid #609AB1').siblings().css('border','3px solid transparent')
				})
			},function(){
				timer = setInterval(run,2000);
			})
			// 下一张
			$('div.header>.rotete>img.right').hover(function(){
				clearInterval(timer)
				$('div.header>.rotete>img.right').click(function(){
					// clearInterval(timer)
					index++;
					if(index>3){
						index=0;
					}
					$('div.box>.header>.rotete>.images>ul').eq(index).show().siblings().hide();
					$('div.box>.header>.rotete>.img>ul').eq(index).css('border','3px solid #609AB1').siblings().css('border','3px solid transparent')
				})
			},function(){
				timer = setInterval(run,2000);
			})
		})
	})
// 尾部部分
$(function(){
	var j;
	$(window).scroll(function(){
		console.log(j)
		j=document.documentElement.scrollTop;
		var move=true;
		if(move){
			move=false;
			if(j>1570){
				$('div.box>.footer>ul>li').animate({'left':'85px'},500,function(){
					move=true;
				})
			}	
		}	
	})
})