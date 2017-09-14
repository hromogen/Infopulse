function togglingMenu (sSelector){
 var m = this;
 m.menu = $(sSelector);
 m.toggleSubmenu = function(oMenuItem){
  var target = oMenuItem.target
  ,oSubmenuParent = $(target).closest(".submenu")
  ,oParent = $(target).closest(".menu__item");
 if(!oSubmenuParent.length){
     oParent.find(".submenu").toggleClass("closed").stop();
 }
 }
 m.hideOnOut = function(oMenuItem){
    var from = oMenuItem.target
    , to = oMenuItem.relatedTarget;
     
    if(getItemParent(to) != getItemParent(from)){
        $(from).closest(".menu__item").find(".submenu").stop().addClass("closed")
    }
}
 
 function getItemParent(oDOM){return $(oDOM).closest(".menu__item").get(0)}
m.menu.click(m.toggleSubmenu)
    .mouseout(m.hideOnOut);
 }