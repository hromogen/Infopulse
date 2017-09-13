function b-gallery (sSelector){
    var g = this;
    g.gallery = $(sSelector);
    // 1. Data ====================
 // class_pointer.propertyName = null;
g.pictures g.gallery.find('.b-picture')

    g.pictures		= g.gallery.find('.b-picture');
	g.preview		= g.gallery.find('.b-preview');
	g.arrowPrev		= g.gallery.find('.b-preview__arrow_prev');
	g.arrowNext		= g.gallery.find('.b-preview__arrow_next');
	g.previewImage	= g.gallery.find('.b-preview__image');
	g.previewText	= g.gallery.find('.b-preview__text');
User (2:21 PM):
---------------------------------------

 // 2. Logic ===================
 // class_pointer.methodName = function (){}
    g.showPreview  = function(){
        // .b-preview_shown
        // .b-preview_shown
        // g.previewImage src attribute
        // see /images/gallery folder
}
    g.hidePreview  = function(){}
    g.showImage    = function(){}
    g.showPrevious = function(){}
    g.showNext     = function(){}
 // 3. Events ==================
 // class_pointer.jqHTMLElement.eventName(class_pointer.eventHandler);
    
    g.pictures	.click(g.showPreview);
	g.preview	.click(g.hidePreview);
	g.arrowPrev	.click(g.showPrevious);
	g.arrowNext	.click(g.showNext);
    



}
b_gallery.prototype = new Component()
