$(document).ready(function(){
	//菜单弹出
	$("#AdminMenuMain > li, #AdminCurrentUserMenu > li, #AdminStorefrontMenu > li").hover(
        function () {
            /*Handles mouse over*/
            $(this).addClass("hover");
        },
        function () {
            /*Handles mouse leave*/
            $(this).removeClass("hover");
        }
    ).click(function() {
        var $this = $(this);
        if (!$this.hasClass("hover")) $this.addClass("hover");
    });
	
	$(".SubMenuWrapper li").not(".endspacer").mouseover(function () {
        $(".SubMenuWrapper li.hover").removeClass("hover");
        $(this).addClass("hover");
    });
	
	//复选框
	$('input#selector').live('click', function(){
		if (this.checked) {
			if (this.value && this.value != 'on') {
				$(this.value).find('input:not(:checked)').each(function(){
					if (!this.disabled)
						this.checked = true; 
				});
			} else {
				$(this).closest('tbody').find('tr input:not(:checked)').each(function(){
					//$(this).closest('tbody').find('tr input:not(:checked)').closest('tr').addClass('onthisline');
					if (!this.disabled)
						this.checked = true; 
				}); 
			}
		} else {
			if (this.value && this.value != 'on') {
				$(this.value).find('input:checked').each(function(){
					if (!this.disabled)
						this.checked = false; 
				});
			} else {
				$(this).closest('tbody').find('tr input:checked').each(function(){ 
					//$(this).closest('tbody').find('tr input:not(:checked)').closest('tr').removeClass('onthisline');
					if (!this.disabled)
					this.checked = false; 
				});
			}
		}
	});
	
	//下拉菜单
	var $mainButton = $('.v13-menubutton-main');
	var $menuTrigger = $('.v13-menubutton-menutrigger');
	var $menu = $('.v13-menubutton-menu').children('ul');
	var $menuItems = $menu.children();
	
	var showMenu = function(me){
		//var me = $(this);
		$menu.css('left', -$mainButton.outerWidth());
		$(me).parent().find($menu).fadeIn(200, function () {
			$(document).bind("click", hidemenuTrigger );
	    });
		$menuTrigger.addClass('v13-active');
	};
	
	var hideMenu = function(){
		//var me = $(this);
		$menu.fadeOut(200, function () {
			$(document).unbind("click", hidemenuTrigger );
	    });
		$menuTrigger.removeClass('v13-active');
	};
	
	$menuTrigger.click(function(){
		var me = $(this);
		showMenu(me);
	});
	
	var hidemenuTrigger = function(){
		if ($menuTrigger.hasClass('v13-active')) {
			hideMenu();
		}
	}
	
	//弹出框触发
	$("#deleteBtn").bind("click", function(){
		if ($('#tableviewer input:checked').length == 0) {
			cbMessage('没有找到要删除的内容');
			return false;
		}
		cbConfirm('您确定要删除所选内容吗？',function(){
			alert("删除成功！");
			$.colorbox.close();
		}, function(){
			alert("取消操作！");
			$.colorbox.close();
		}, null, '删除后，这些内容不可恢复。');
	});
	
	//添加页展开按钮
	$(".slideTrigger").click(function(){
		$(this).parent().next('.pdcontent').slideToggle('500');
	});
	
	//上传图片按钮
	$("#uploadbtn").click(function(){
		$.colorbox({href:'/upload.html', iframe:true, width:'600px', height:'250px', close:false, overlayClose:false, opacity:0.5}, function(){
			
		});
	});
	
});


