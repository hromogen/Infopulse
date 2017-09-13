function b_form(sSelector){
	var f = this;
 
	// 1. Data ====================
	f.form = $(sSelector);
 
	// 2. Logic ===================
	f.label = function (sSelector){
		return f.form.find(sSelector).html();
		}

	// 2. Logic ======================================
	f.val = function (sSelector){
        var jqField  = f.form.find(sSelector)
        , sFieldType = jqField.attr("type")
        , sTagName = jqField.prop("tagName");
                
         if(sFieldType == "radio"){                                 //1. Перемикач (type=radio)
          return jqField.filter(':checked').val();
            
        } else if(sTagName == "SELECT") {                          //2. Тег SELECT
          return jqField.children("option").filter(':selected').html()                                   
            
        } else if(sFieldType == "checkbox") {                       //3. Type check
            var sCheckBoxes = "";
            sCheckboxes += (sCheckboxes ? ', ' : '') + jqCheckbox.val();
			return sCheckboxes;                           
        } else {                                //4. text field   
                                              
		return jqField.val();
        }
		}

	f.getLanguages = function (){
		var aLanguages =  { 
			 "ru" : "Р СѓСЃСЃРєРёР№"
			,"en" : "РђРЅРіР»РёР№СЃРєРёР№"
			,"uk" : "РЈРєСЂР°РёРЅСЃРєРёР№"
			,"de" : "РќРµРјРµС†РєРёР№"
			};

		var sLanguages = '';

		$.each(aLanguages, function (sLanguageCode, sLanguageName) {
			sLanguages += (sLanguages ? '\n' : '') + sLanguageCode + '   ' + sLanguageName;
			});

		return sLanguages;
		}

	f.showInfo = function (){
		var sSeasons = '';
		f.form.find('.b-form__season:checked').each(function () {
			var jqSeason = $(this);

			sSeasons += (sSeasons ? ', ' : '') + jqSeason.val();
			})

		// f.form.find('.b-form__season:checked').each(function () {
		// 	var jqSeason = $(this);

		// 	sSeasons += (sSeasons ? ', ' : '') + jqSeason.children('label').html();
		// 	})

		alert(
			setting.get("b-form__yourform") + 
			+ '\n' + f.label('.b-form__label_name')			+ ': '			+ f.val('.b-form__name')
			+ '\n' + f.label('.b-form__label_surname') 		+ ': '			+ f.val('.b-form__surname')
			+ '\n' + f.label('.b-form__label_season') 		+ ': '			+ sSeasons
			+ '\n' + f.label('.b-form__label_fruit') 		+ ': '			+ f.val('.b-form__fruit')
			+ '\n' + f.label('.b-form__label_animals') 		+ ': '			+ f.val('.b-form__animals>option:selected')
			+ '\n' + f.label('.b-form__label_review') 		+ ': '			+ f.val('.b-form__review')
			+ '\nРЇР·С‹РєРё: \n'													+ f.getLanguages()
			);
		}
 
	// 3. Events ==================
	f.form.find('.b-form__ok-button').click(f.showInfo);

	}