function b_gallery (sSelector){
    var g = this;
    g.init(sSelector);
    g.pictures	   = g.find('.b-picture');
	g.preview	   = g.find('.b-preview');
	g.arrowPrev    = g.find('.b-preview__arrow_prev');
	g.arrowNext	   = g.find('.b-preview__arrow_next');
	g.previewImage = g.find('.b-preview__image');
	g.previewText  = g.find('.b-preview__text');
    g.current      = 0;
    g.quantity     = g.pictures.length;

    g.showPreview  = function(){
        var jqPicture   = $(this);
        g.current = g.pictures.index(jqPicture);
        g.showImage(0);
        g.preview.addClass('b-preview_shown');
}
    g.hidePreview  = function(event){
        var target = event.target
        ,dIgnoredItem = $(target).closest(".b-preview__arrow,.b-preview__image").get(0);
        
        if(!dIgnoredItem){
            $(g.preview).removeClass("b-preview_shown")
        } 
    }
    g.showImage    = function(iShift){
        g.current +=  iShift - g.quantity*Math.trunc((iShift+1+g.current)/g.quantity);
        var jqPicture    = g.pictures.eq(g.current)
        ,jqBigImage      = jqPicture.find(".b-picture__image")
        ,sLinkToSmallImg = jqBigImage.attr("src")
        ,sLinkToPreviewImg = sLinkToSmallImg.replace("small_","");
    
        g.previewImage.attr("src",sLinkToPreviewImg);
        g.previewText.html(jqBigImage.prop("alt"))
    }
    g.showPrevious = function(){
        g.showImage(-1);
    }
    g.showNext     = function(){
        g.showImage(1);
    }
    g.pictures	.click(g.showPreview);
	g.preview	.click(g.hidePreview);
	g.arrowPrev	.click(g.showPrevious);
	g.arrowNext	.click(g.showNext);
}
b_gallery.prototype = new Component()
/*        var jqPicture   = $(this)
   ,sBigImageSrc  = jqPicture.find('.b-picture__image')
        .attr('src')
        .replace('small_', '')
   ;
        
        g.previewImage.attr('src', sBigImageSrc);
        
        g.preview.addClass('b-preview_shown');*/