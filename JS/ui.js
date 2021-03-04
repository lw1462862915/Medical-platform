// ui-search 定义 
$.fn.UiSearch = function (){
	var ui = $(this);
	
	$('.ui-search-selected',ui).on('click',function () {
		$('.ui-search-list').show(); //显示
		return false;
	});
	$('.ui-search-list a',ui).on('click',function () {
		$('.ui-search-selected').text( $(this).text() );
		$('.ui-search-list').hide();
		return false;
	});
	$('body').on('click',function () {
		$('.ui-search-list').hide(); //点击隐藏，
	})
}


//  content ui-tab-header定义
//  {string} TBA组件选项卡切换部分
//  {string} contenr TBA内容区域部分 

$.fn.UiTab = function (header,content) {
	var ui = $(this);
	var tabs = $(header,ui);
	var cons = $(content,ui);
	tabs.on('click',function () {
		var index = $(this).index();
		tabs.removeClass('item_focus').eq(index).addClass('item_focus');
		cons.hide().eq(index).show();
		return false;
	});
}

// 页面脚本逻辑； //运行
$(function(){
	$('.ui-search').UiSearch();
	$('.content-tab').UiTab('.caption > .item','.block > .item');
	// $('.ui-slider').UiSlidder();

});



//ui-slider 
$(document).ready(function(){
	$('.ui-slider .left').click(function(){
		$('.ui-slider .item')
		.css({'left':'-1273px'})

	}),
	$('.ui-slider .right').click(function(){
		$('.ui-slider .item')
		.css({'left':'-638px'})
	});

});

//老师ui-slider 控件投机取巧了，不知怎么增加判断和次数；
//index页面的content中预约通知、停诊信息高度高于content时，底部footed不会相应的始终位于底部求解