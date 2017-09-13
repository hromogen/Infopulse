function b_form (sSelector){
 var f = this;
 //console.log('b_menu this', this);
 // 1. Data ====================
 // class_pointer.propertyName = null;
 f.form = $(sSelector);
 // 2. Logic ===================
 // class_pointer.methodName = function (){}
    
    f.getLanguages = function(){
        sLanguages = "Мови: ";
        var alanguages =  { 
         "ru" : "Русский"
        ,"en" : "Английский"
        ,"uk" : "Украинский"
        ,"de" : "Немецкий"
        }
        $.each(alanguages, function(sLanguageName,sLanguageCode){
            sLanguages+= "\n" + sLanguageCode +": " + sLanguageName;
        })
        return sLanguages;
    }
    f.showInfo = function(){
        var sSeasons = "";
        f.form.find('.b-form__season > input').each(function(){
                                        var jqSeason = $(this);
                                        sSeasons += (sSeasons  ? "," : "") + jqSeason.val()
                                    })
        alert(
        settings.get('b-form__yourform')+ "\nІм\'я:"    + f.form.find('.b-form__name').val()
                                        + "\nПрізвище:" + f.form.find('.b-form__surname').val()
                                        + "\nПора року:" + sSeasons
                                        + "\nУлюблений фрукт:"    + f.form.find('.b-form__fruit>:checked').val()
                                        + "\nУлюблена тварина:"+ f.form.find('.b-form__animals>option:selected').html()
                                     + "\nВідгук:"+ f.form.find('.b-form__review').val()
                                     + '\nМови: '     + f.getLanguages()
            
        ); 
    }



 // 3. Events ==================
 // class_pointer.jqHTMLElement.eventName(class_pointer.eventHandler);
f.form.find(".b-form__ok-button").click(f.showInfo);
}
