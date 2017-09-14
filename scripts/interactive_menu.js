function interactiveMenu (sSelector/*optional*/, options){
 var m = this;
 m.menu = $(sSelector);
    if(options){
        if (options.sInitClass){
            var placeholder = $("<span/>",{
                "id": "placeholder"
                ,"text": "Click me!"
                ,"css":{
                    "display":"block"
                    ,"z-index": "5"
                    ,"width":"15px"
                    ,"height":"170px"
                    ,"background-color": "#eee"
                    ,"writing-mode":"vertical-rl"
                    ,"font-size": "15px"
                    ,"text-align":"center"
                }
            });
            placeholder.mouseover(function(){this.style.cursor = "pointer"});
            m.menu.addClass(options.sInitClass);
            if(!m.menu.find("#placeholder").get(0)){
                m.menu.prepend(placeholder);
            }
        }
    }
 m.toggleSubmenu = function(event){
    var target = event.target
    ,oSubmenuParent = $(target).closest(".submenu")
    ,oParent = $(target).closest(".menu__item");
     
    $("#placeholder").remove(); 
    m.menu.removeClass("closed");
    if(!oSubmenuParent.length){
        oParent.find(".submenu").toggleClass("closed").stop();
    }
 }
 m.hideOnOut = function(event){
    var from = event.target
    , to = event.relatedTarget;
     
    if(getItemParent(to) != getItemParent(from)){
        $(from).closest(".menu__item").find(".submenu").stop().addClass("closed");
    }
     if($(to).find(m.menu).get(0) && options && options.sInitClass){
            m.menu.addClass(options.sInitClass);
            setTimeout(function(){m.menu.prepend(placeholder)},1000);
        }

}
 function getItemParent(oDOM){return $(oDOM).closest(".menu__item").get(0)}
m.menu.click(m.toggleSubmenu)
      .mouseout(m.hideOnOut);
 }