function togglingMenu (sSelector){
 var m = this;
 m.menu = $(sSelector);
 m.toggleSubmenu = function(oMenuItem){
  $(oMenuItem.target).next(".submenu").slideToggle().stop();
 }
m.hideSubmenu = function(oMenuItem){
		$(oMenuItem.target).next('.submenu').addClass("invisible").stop().slideUp(400) 
}

 m.menu.find('.menu__text').click(m.toggleSubmenu)
// m.menu.find('.menu__text').mouseleave(m.hideSubmenu);

 }