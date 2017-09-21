function interactiveMenu (sSelector/*, parameters*/ ){
    var m = this;
    m.init(sSelector);
    m.menuItems     = m.find(".menu__item");
	m.toggleSubmenu = null;
	m.hideOnOut     = null;
    m.showOnEnter   = null;
    m.aParameters   = Array.from(arguments);
    m.clicking      = (m.aParameters.indexOf("clicking" ) > 0);
    m.hovering      = (m.aParameters.indexOf("hovering")  > 0);
    m.closed        = (m.aParameters.indexOf("closed")    > 0);
    m.placeholder   = (m.closed) ? $("<span/>",{
        "class": "placeholder"
        ,"text": "Click me!"
        }) : "";
    
    m.toggleSubmenu = function(){
        $(".placeholder").detach(); 
        m.elem.removeClass("closed");
        $(this).find(".submenu").toggleClass("closed").stop();
    }
    
        m.showOnEnter = function(){
        $(this).find(".submenu").stop().removeClass("closed");
    }

    m.hideOnOut = function(event){
        var from = event.target
        , to = event.relatedTarget
     
        if(getItemParent(to) != getItemParent(from)){
            window.getSelection().empty();
            $(from).closest(".menu__item").find(".submenu").stop().addClass("closed");
        }
        if($(to).find(m.elem).get(0) && m.closed){
            m.elem.addClass("closed");
            setTimeout(function(){
                m.elem.prepend(m.placeholder)
            },1000);
        }
    }

    function getItemParent(oDOM){
        return $(oDOM).closest(".menu__item").get(0)
    }
	
	$(".placeholder").remove();
	m.menuItems.off("click").off("mouseover");
	m.elem.off("mouseout");
    m.elem.removeClass("closed clicking hovering");
    if (m.closed){
        m.elem.addClass("closed");
        if(!m.elem.find(".placeholder").get(0)){
            m.elem.prepend(m.placeholder);
        }
    }
    if(m.clicking){
        m.menuItems.click(m.toggleSubmenu)
    }
    if(m.hovering){
        m.menuItems.mouseover(m.showOnEnter)
    }
    if(m.placeholder){
        $(m.placeholder).click(m.toggleSubmenu);
    }
    m.elem.mouseout(m.hideOnOut);
}
interactiveMenu.prototype = new Component();
/*window.onbeforeunload = function (){return 'You are going to lose your changes. Reload page?';}*/