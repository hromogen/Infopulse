function b_menu (sSelector){
 var m = this;
 //console.log('b_menu this', this);
 // 1. Data ====================
 // class_pointer.propertyName = null;
 m.menu = $(sSelector);
 // 2. Logic ===================
 // class_pointer.methodName = function (){}
 m.toggleSubmenu = function(oMenuItem){
 	//console.log('Showsubmenu this', this);
 	$(oMenuItem).children('.b-submenu').stop().slideToggle();
 }
 
m.showSubmenu = function(){
  //  m.toggleSubmenu(this);
	console.warn('showSubmenu this', this);
	$(this).children('.b-submenu')
	.css({
		'display':'block'
	})
	.stop().animate({
		'opacity':1

	},400);
}
m.hideSubmenu = function(){
 //   m.toggleSubmenu(this);
	console.warn('showSubmenu this', this);
		$(this).children('b-submenu')
	.stop().animate({
		
	},400)
}

 // 3. Events ==================
 // class_pointer.jqHTMLElement.eventName(class_pointer.eventHandler);
 m.menu.find('.b-menu__item').mouseover(m.showSubmenu)
                             .mouseout(m.hideSubmenu);

 }

