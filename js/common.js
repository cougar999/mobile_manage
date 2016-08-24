/*
 * 定义弹窗，基于Jquery colorbox
 */

//进度条,title标题，message信息
function cbProgress (title, callback, box, message) {
	var box = box || $.colorbox;
	if (!message) message = '';
	var content = '<div class="tc">' + 
		'<div class="progresshead"><p><span id="progresstit">' + title +'</span></p></div>' +
		'<div class="progressbar"><div id="progresspoint" class="progress"><div class="progressbg"></div></div></div>' +
		'<table class="progressfoot fixwidth" style="width:100%;"><tr><td class="fixwidth"><span id="progressmsg">' + message + '</span></td></tr></table>' +
		'</div>';
	$.colorbox({html:content,width:'500px',height:'200px', close:false, overlayClose:false, opacity:0.5},function(){
		if (callback) {
			callback(box, $('#progressmsg').get(0), $('#progresspoint').get(0));
		}
	});
}

//等待条,title标题，message信息，barcallback回调,box指定窗口
function cbWaiting(title, barcallback, box, message) {
	var box = box || $.colorbox;
	if (!message) message = '';
	var content = '<div class="tc">' + 
		'<div class="progresshead"><p><span id="progresstit">' + title +'</span></p></div>' +
		'<div class="progressbar"><div id="progresswait" class="waiting"><div class="progressbg"></div></div></div>' +
		'<table class="progressfoot fixwidth" style="width:100%;"><tr><td class="fixwidth"><span id="progressmsg">' + message + '</span></td></tr></table>' +
		'</div>';
	$.colorbox({html:content, width:'600px', height:'180px', close:false, overlayClose:false, opacity:0.5}, function(){
		if (barcallback) {
			barcallback(box, $('#progressmsg').get(0), $('#progresswait').get(0));
		}
	});
};

//提示窗口，点击确定关闭
function cbMessage(title, okcallback, box, message) {
	box = box || $.colorbox;
	if (!message) message = '';
	var content = '<div class="tc">' + 
		'<div class="messagehead"><p><span id="messagetit">' + title +'</span></p></div>' +
		'<div class="messagebar"><p id="messagesmsg">' + message + '</p></div>' +
		'<p class="messagefoot"><input id="messageok" type="button" value="确定" class="f1 b btn" /></p>' +
		'</div>';
	box({html:content,width:'600px', height:'180px', close:false, scrolling:false, overlayClose:false, opacity:0.5},function(){
		$('#messageok').one('click', function(){
			$(this).unbind('click');
			if (okcallback)	{ okcallback(box, $('#messagesmsg').get(0)); }
			else { box.close(); }
		});
	});
};

//确认窗口,点击确定执行下一步
function cbConfirm(title, okcallback, cancelcallback, box, message) {
	box = box || $.colorbox;
	if (!message) message = '';
	var content = '<div class="tc">' + 
		'<div class="confirmhead"><p><span id="confirmtit">' + title +'</span></p></div>' +
		'<div class="confirmbar"><p id="confirmmsg">' + message + '</p></div>' +
		'<p class="confirmfoot"><input id="confirmok" type="button" value="确定" class="f1 b btn" />&nbsp;&nbsp;&nbsp;<input id="confirmcancel" type="button" class="f1 b btn" value="取消" class="f1 b btn" /></p>' +
		'</div>';
	box({html:content, width:'600px', close:false, overlayClose:false, opacity:0.5}, function(){
		$('#confirmok').one('click', function(){
			if (okcallback)	{ okcallback(box, $('#confirmmsg').get(0)); }
			else { box.close(); }
		});
		$('#confirmcancel').one('click', function(){
			if (cancelcallback)	{ cancelcallback(box, $('#confirmmsg').get(0)); }
			else { box.close(); }
		});
	});
};