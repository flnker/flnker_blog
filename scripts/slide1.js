/*模块展开和关闭*/
// $(function(){
// 		 $(".module_up_down").toggle(function(){
// 					var $self = $(this);
// 					$self.prev().slideToggle(600,function(){
// 						  $("img",$self).attr("src","images/up.gif");
// 					});
// 			 },function(){
// 					var $self = $(this);
// 					$self.prev().slideToggle(600,function(){
// 						  $("img",$self).attr("src","images/down.gif");
// 					});
// 		 })
// })


$(function(){
	$('.module_up_down').toggle(function(){
		var $self = $(this);
		$self.prev().slideToggle(400,function(){
			$('img',$self).attr('src',"images/down.gif");
		});
	},function(){
		var $self = $(this);
		$self.prev().slideToggle(800,function(){
			$('img',$self).attr("src","images/up.gif");
		});
	});
})