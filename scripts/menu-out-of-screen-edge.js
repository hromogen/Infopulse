function menuOutOfScreen(sSelector){
 var m = this;
 m.menu = $(sSelector);
 m.menu.addClass("closed");
    
 m.toggleSubmenu = function(event){
  var target = event.target
  ,oSubmenuParent = $(target).closest(".submenu")
  ,oParent = $(target).closest(".menu__item");
 if(!oSubmenuParent.length){
     oParent.find(".submenu").slideToggle().stop().toggleClass("closed");
 }
 }
 m.hideOnOut = function(event){
    var from = event.target
    , to = event.relatedTarget;
     
    if(getItemParent(to) != getItemParent(from)){
        $(from).closest(".menu__item").find(".submenu").stop().addClass("closed");
        m.menu.addClass("closed");
    }
}
 
 function getItemParent(oDOM){return $(oDOM).closest(".menu__item").get(0)}
m.menu.click(m.toggleSubmenu)
    .mouseout(m.hideOnOut);
 }