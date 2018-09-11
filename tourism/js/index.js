$(function(){
	// 点击跳转隐藏部分
	$(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		// 网站首页
		$('div.wrap>.header>.navigation>ul>li').eq(4).click(function(){
			$(this).children().css({'borderBottom':'1px solid #000','color':'#000'}).parent().siblings().children().css({'borderBottom':'1px solid  transparent','color':'#aaa'});
			$(this).parent().parent().next().show().next().show().parent().next().show().next().hide();
			$(window).scrollTop(0);
		})
		// 精品线路
		$('div.wrap>.header>.navigation>ul>li').eq(3).click(function(){
			$(this).children().css({'borderBottom':'1px solid #000','color':'#000'}).parent().siblings().children().css({'borderBottom':'1px solid  transparent','color':'#aaa'});
			$(this).parent().parent().show().next().hide().next().hide().parent().next().hide().next().children().eq(0).show().children().eq(0).next().children().eq(0).show().parent().parent().siblings().hide();
			$(window).scrollTop(0);
		})
		// 行业新闻
		$('div.wrap>.header>.navigation>ul>li').eq(2).click(function(){
			$(this).children().css({'borderBottom':'1px solid #000','color':'#000'}).parent().siblings().children().css({'borderBottom':'1px solid  transparent','color':'#aaa'});
			$(this).parent().parent().show().next().hide().next().hide().parent().next().hide().next().children().eq(1).show().siblings().hide();
			$(window).scrollTop(0);
		})
		// 服务优势
		$('div.wrap>.header>.navigation>ul>li').eq(1).click(function(){
			$(this).children().css({'borderBottom':'1px solid #000','color':'#000'}).parent().siblings().children().css({'borderBottom':'1px solid  transparent','color':'#aaa'});
			$(this).parent().parent().show().next().hide().next().hide().parent().next().hide().next().children().eq(2).show().siblings().hide();
			$(window).scrollTop(0);
		})
		// 关于我们
		$('div.wrap>.header>.navigation>ul>li').eq(0).click(function(){
			$(this).children().css({'borderBottom':'1px solid #000','color':'#000'}).parent().siblings().children().css({'borderBottom':'1px solid  transparent','color':'#aaa'});
			$(this).parent().parent().show().next().hide().next().hide().parent().next().hide().next().children().eq(3).show().siblings().hide();
			$(window).scrollTop(0);
			$('div.wrap>.box>.about>.body').children().eq(0).css('left','-400px').next().css('right','-750px')
		})
	})
	// 网页首页
	$(function(){
		// 导航栏部分
		$('div.header>.navigation>ul>li>a').eq(4).css({'borderBottom':'1px solid #000','color':'#000'});
		// 轮播图部分
		$(function(){
			var index=0;
			$('div.wrap>.header>.rotete>div>ul').eq(0).children().last().show().css({'opacity':0,'height':'0px'}).animate({'opacity':1,'height':'100px'},1000);
			function run(){
				if($('div.wrap>.header>.rotete>div>ul').eq(index).next().length == 0){
					$('div.wrap>.header>.rotete>div>ul').first().show();
					$('div.wrap>.header>.rotete>div>ul').last().hide();
					index = 0;
				}else{
					$('div.wrap>.header>.rotete>div>ul').eq(index).hide().next().show();
					index++;
				}
				$('div.wrap>.header>.rotete>div>ul').eq(index).children().last().show().css({'opacity':0,'height':'0px'}).animate({'opacity':1,'height':'100px'},1000);	
			}
			var timer = setInterval(run,2000);
			// 上一张
			$('div.header>.rotete>img.left').hover(function(){
				clearInterval(timer)
				$('div.header>.rotete>img.left').click(function(){
					$('div.wrap>.header>.rotete>div>ul').eq(index).children().last().stop(true,true)
					clearInterval(timer)
					--index;
					if(index<0){
						index=2;
					}
					$('div.wrap>.header>.rotete>div>ul').eq(index).show().children().last().show().css({'opacity':0,'height':'0px'}).animate({'opacity':1,'height':'100px'},1000).parent().siblings().hide();
				})
			},function(){
				timer = setInterval(run,2000);
			})
			// 下一张
			$('div.header>.rotete>img.right').hover(function(){
				clearInterval(timer)
				$('div.header>.rotete>img.right').click(function(){
					$('div.wrap>.header>.rotete>div>ul').eq(index).children().last().stop(true,true)
					clearInterval(timer)
					index++;
					if(index>2){
						index=0;
					}
					$('div.wrap>.header>.rotete>div>ul').eq(index).show().children().last().show().css({'opacity':0,'height':'0px'}).animate({'opacity':1,'height':'100px'},1000).parent().siblings().hide();
				})
				},function(){
					timer = setInterval(run,2000);
				})
		})
		// 主体内容部分
		$(function(){
			// a链接样式
			var timer;
			$('div.wrap>.main1>.box>.project>a').mouseenter(function(){
				var i=0;
				function fun(){
					i+=0.1;
					if(i>=1){
						clearInterval(timer)
					}
					$('div.wrap>.main1>.box>.project>a').css({'background':'#999','color':'#fff','opacity':i})
				}
				timer=setInterval(fun,40)
			})
			$('div.wrap>.main1>.box>.project>.blank>a').mouseleave(function(){
				clearInterval(timer);
				$(this).css({'background':'#fff','color':'#000','opacity':'1'});
			})
			// 滚动条监听事件
			var j;
			var flag = true;
			var time1;
			var num;
			window.onscroll=function(){
				j=document.documentElement.scrollTop;
				// console.log(j)
				// 图片移动
				if(flag){
					if(j<1230){
						$('div.wrap>.main1>.center>ul>li').eq(0).css({'left':'0px'}).next().css({'height':'0px','opacity':'0'})
					}else if(j>=1230){
						flag = false;
						$('div.wrap>.main1>.center>ul>li').eq(0).animate({'left':'70px'},1000).next().animate({'height':'100px','opacity':'1'},1500,function(){
							flag = true;
						})
					}				
				}
				// 相关数据
				num=true;
				if(num){
					if(j<2960){
						num=true;
						$('div.wrap>.main1>.footer>.num>ul>li>h3').text(0).css({'fontSize':'28px','fontWeight':800})
					}else if(j>2960){
					num=false;
					time1=setInterval(fun1,1)
					} 
					
				}
				// 关于我们效果
				if(j>50){
					$('div.box>.about>.body').children().eq(0).animate({'left':'0px'},1000).next().animate({'right':'0px'},1000);
				}
				/*最底部文字显示*/
				if(j>3990){
					$('div.wrap>.footer>p').animate({'left':'85px'},500)
				}
			}
			var time1
			var a=0;
			var b=0;
			var c=0;
			var d=0;
			function fun1(){
				a+=12;
				if(a>12864){
					a=12876;
				}
				$('div.wrap>.main1>.footer>.num>ul').eq(0).children().eq(0).first().text(a+'+').css({'fontSize':'28px','fontWeight':800})
				b+=4;
				if(b>4392){
					b=4396;
				}
				$('div.wrap>.main1>.footer>.num>ul').eq(1).children().eq(0).first().text(b+'t').css({'fontSize':'28px','fontWeight':800})
				c++;
				if(c>432){
					c=433;
				}
				$('div.wrap>.main1>.footer>.num>ul').eq(2).children().eq(0).first().text(c).css({'fontSize':'28px','fontWeight':800})
				d+=32;
				if(d>33854){
					d=33856;
					clearInterval(time1);
				}
				$('div.wrap>.main1>.footer>.num>ul').eq(3).children().eq(0).first().text(d+'+').css({'fontSize':'28px','fontWeight':800})
			}
		
			// a链接样式
			var timer1;
			$('div.wrap>.main1>.boxT>.news>a').mouseenter(function(){
				var i=0;
				function fun(){
					i+=0.1;
					if(i>=1){
						clearInterval(timer1)
					}
					$('div.wrap>.main1>.boxT>.news>a').css({'background':'#999','color':'#fff','opacity':i})
				}
				timer1=setInterval(fun,30)
			})
			$('div.wrap>.main1>.boxT>.news>a').mouseleave(function(){
				clearInterval(timer1);
				$('div.wrap>.main1>.boxT>.news>a').css({'background':'#fff','color':'#000','opacity':'1'})
			})
			/*业内资讯部分*/
			$('div.wrap>.main1>.boxT>.news>.body>ul').mouseenter(function(){
				$(this).children().stop(true,true).eq(0).animate({'top':'180px'},200).next().animate({'top':'0px'},200)
			})
			$('div.wrap>.main1>.boxT>.news>.body>ul').mouseleave(function(){
				$(this).children().eq(0).animate({'top':'0px'},200).next().animate({'top':'180px'},200)
			})
			// 信息发送SAUNDERS的移入移出
			$('div.wrap>.main1>.footer>.message>.form>form>input').focus(function(){
				$(this).attr('placeholder','*由六位以上的数字、字母、下划线组成')
			})
			$('div.wrap>.main1>.footer>.message>.form>form>input').blur(function(){
				console.log($(this).val())
				if($(this).val()==''){
					$(this).attr('placeholder','*信息不能为空');
				}else{
					var pattern = /^\w{6,}$/;
					if(pattern.test($(this).val())){
						$(this).css({'color':'green'})
					}else{
						$(this).css({'color':'red'})
					}
				}
				// if($('div.wrap>.main>.footer>.message>.form>form>input').eq($(this).index()).val() ==''){ }
			})
			var timer2;
			$('div.wrap>.main1>.footer>.message>.form>form>input.submit').mouseenter(function(){
				var i=0;
				function fun(){
					i+=0.1;
					if(i>=1){
						clearInterval(timer2)
					}
					$('div.wrap>.main1>.footer>.message>.form>form>input.submit').css({'background':'#609AB1','color':'#fff','opacity':i})
				}
				timer2=setInterval(fun,30)
			})
			$('div.wrap>.main1>.footer>.message>.form>form>input.submit').click(function(){
				alert('提交成功')
			})
			$('div.wrap>.main1>.footer>.message>.form>form>input.submit').mouseleave(function(){
				clearInterval(timer2);
				$('div.wrap>.main1>.footer>.message>.form>form>input.submit').css({'background':'#ddd','color':'#756d6d','opacity':'1'})
			})
			// 透明背景图片
			var sign=true;
			$('div.wrap>.main1>.footer>.top').hover(function(){
				if(sign){
					sign=false;
					$(this).children().eq(0).animate({'right':'140px','top':'70px'},1000).next().animate({'left':'666px','top':'70px'},1000).next().animate({'left':'395px','bottom':'127px'},1000).next().animate({'left':'666px','top':'271px'},1000).next().animate({'right':'140px','bottom':'127px'},1000,function(){
						sign=true;
					})
				}
			},function(){
				$(this).children().eq(0).animate({'right':'0px','top':'0px'},1000).next().animate({'left':'0px','top':'00px'},1000).next().animate({'left':'0px','bottom':'0px'},1000).next().animate({'left':'500px','top':'200px'},1000).next().animate({'right':'0px','bottom':'0px'},1000)
			})
			// 底部小图片
			$('div.wrap>.main1>.message>.main>ul.right>div>li').mouseenter(function(){
				$(this).children('p').show().fadeIn(500)
			})
			$('div.wrap>.main1>.message>.main>ul.right>div>li').mouseleave(function(){
				$('div.wrap>.main1>.message>.main>ul.right>div>li').children('p').fadeOut(500)
			})	
		})
	})
	// 精品线路
	$(function(){
		// 初始样式
		// $('div.box>.header>.navigation>ul>li').eq(3).children().css({'borderBottom':'1px solid #000','color':'#000'})
		// 主体类容部分
		$(function(){
			// 左侧选择部分
			$('div.box>.main>.select>div>ul>li').eq(0).css({'color':'#000'}).children('div').css('background','#000');
			// 第二页
			$('div.box>.main>.content>.first>.two').click(function(){
				$(this).parent().hide().next().show();
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				$(window).scrollTop(0);
			})
			$('div.box>.main>.content>.first>.two').mouseenter(function(){
				$(this).css('background','#609AB1');
			})
			$('div.box>.main>.content>.first>.two').mouseleave(function(){
				$(this).css('background','#aaa');
			})
			// 第一页
			$('div.box>.main>.content>.second>.one').click(function(){
				$(this).parent().hide().prev().show();
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				$(window).scrollTop(0);
			})
			$('div.box>.main>.content>.second>.one').mouseenter(function(){
				$(this).css('background','#609AB1');
			})
			$('div.box>.main>.content>.second>.one').mouseleave(function(){
				$(this).css('background','#aaa');
			})
			// 全部
			$('div.box>.main>.select>div>ul>li').eq(0).click(function(){
				$(this).parentsUntil('select').nextUntil('content').children().eq(0).show().siblings().hide();
				$(this).css('color','#000').children('div').css('background','#000').parent().siblings().css('color','#aaa').children('div').css('background','#aaa')
			})
			// 自由行
			$('div.box>.main>.select>div>ul>li').eq(1).click(function(){
				$(this).parentsUntil('select').nextUntil('content').children().eq(2).show().siblings().hide();
				$(this).css('color','#000').children('div').css('background','#000').parent().siblings().css('color','#aaa').children('div').css('background','#aaa')
			})
			// 欧洲行
			$('div.box>.main>.select>div>ul>li').eq(2).click(function(){
				$(this).parentsUntil('select').nextUntil('content').children().eq(3).show().siblings().hide();
				$(this).css('color','#000').children('div').css('background','#000').parent().siblings().css('color','#aaa').children('div').css('background','#aaa')
			})
			// 境内游
			$('div.box>.main>.select>div>ul>li').eq(3).click(function(){
				$(this).parentsUntil('select').nextUntil('content').children().eq(4).show().siblings().hide();
				$(this).css('color','#000').children('div').css('background','#000').parent().siblings().css('color','#aaa').children('div').css('background','#aaa')
			})
			
			// 境外游
			$('div.box>.main>.select>div>ul>li').eq(4).click(function(){
				$(this).parentsUntil('select').nextUntil('content').children().eq(5).show().siblings().hide();
				$(this).css('color','#000').children('div').css('background','#000').parent().siblings().css('color','#aaa').children('div').css('background','#aaa')
			})

			// 跟团游
			$('div.box>.main>.select>div>ul>li').eq(5).click(function(){
				$(this).parentsUntil('select').nextUntil('content').children().eq(6).show().siblings().hide();
				$(this).css('color','#000').children('div').css('background','#000').parent().siblings().css('color','#aaa').children('div').css('background','#aaa')
			})
		})
	})
	// 行内新闻
	$(function(){
		var effect=true;
		$('div.box>.news>.body>div').mouseenter(function(){
			if(effect){
				effect=false;
				$(this).children().first().css('color','#609AB1').next().animate({'height':'150px'},500).next().animate({'left':'202px'},500).next().animate({'left':'702px'},500,function(){
					effect=true;
				});
			}	
		})
		$('div.box>.news>.body>div').mouseleave(function(){
			$(this).children().first().css('color','#aaa').next().animate({'height':'0px'},500).next().animate({'left':'182px'},500).next().animate({'left':'682px'},500);
		})	
	})
	// 服务优势
	$(function(){
		var k;
		$(window).scroll(function(){
			k=document.documentElement.scrollTop || document.body.scrollTop;
			if(k>150){
				$('div.box>.service>.health>.main>div').animate({'opacity':'1','height':'250px'},500);
			}		
		})
		var move=true;
		$('div.box>.service>.health>.main>div').mouseenter(function(){
			if(move){
				move=false;
				$(this).children('div').animate({'width':'300px'},500,function(){
					move=true;
				})
			}
		})
		$('div.box>.service>.health>.main>div').mouseleave(function(){
			$(this).children('div').animate({'width':'0px'},500)
		})
	})
	// 关于我们
	$(function(){	
		var move=true;
		$('div.box>.about>.body>.right>div').mouseenter(function(){
			if(move){
				move=false;
				$(this).children('div').css({'width':'0px','height':'2px','background':'#609AB1'}).animate({'width':'600px',},500,function(){
					move=true;
				})
			}
		})
		$('div.box>.about>.body>.right>div').mouseleave(function(){
			$(this).children('div').css({'width':'600px','height':'1px','background':'#aaa'})
		})
		$('div.box>.about>.body>.left').mouseenter(function(){
			$(this).children('div').css({'width':'0px','height':'2px','background':'#609AB1'}).animate({'width':'330px',},500)
		})
		$('div.box>.about>.body>.left').mouseleave(function(){
			$(this).children('div').css({'width':'330px','height':'1px','background':'#aaa'})
		})
	})
	
})