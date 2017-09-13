function b_form (sSelector){
 var f = this;
 //console.log('b_menu this', this);
 // 1. Data ====================
 // class_pointer.propertyName = null;
 f.form = $(sSelector);
 // 2. Logic ===================
 // class_pointer.methodName = function (){}
    
	f.label = function(){
		var labelsForId = {} 
		$("label").toArray().map(function(label){
			labelsForId.id = label.for|| "class_"+label.className();
			labelsForId.value = label.html();
		})
	}
	f.result = []
	
	f.val = function(oEffected){
		var changed = oEffected.target
        , formfield = $(changed).closest("formfield")
        , allFormfields = $(f.form).find("formfield")
		, index = $(allFormfields).index(formfield)
        , answer = "";
		f.result[index] = {"field":"", "answer":[]}
		
		if($(changed).is(".repo-form__value") ){
            answer = changed.val()
			f.result[index].answer = answer 
		} else if($(changed).is(".repo-form__option")){
			f.result[index].answer = changed.html()
		} else if($(changed).is(".repo-form__radio")){
            var answer = $(f.form).find("[for="+changed.id+"]").html())
			f.result[index].answer.push(answer)
		}
	f.result[index].question = formfield.find(".repo-form_field");
	return f.result; 	
	}
	
    f.showInfo = function(){
        var massage = "Your form"
        ,result = f.result;
        for(var i = 0; i < result.length; i++){
            if(result[i]){
                massage += "\n" + result[i].question +": "+ result[i].answer
            }
        }
        alert(massage); 
    }


 // 3. Events ==================
 // class_pointer.jqHTMLElement.eventName(class_pointer.eventHandler);
f.form.find(".repo-form__submit").click(f.showInfo);
f.form.change(f.val)
}