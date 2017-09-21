function Component(){
    this.elem = null;                   // the main html conainer element (g.gallery, f.form and so on)
    //this.container = null;
    this.init = function(sSelector){
        this.elem = $(sSelector);
    }
    this.find = function(sSelector){
     return this.elem.find(sSelector)    
    }
}