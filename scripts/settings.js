var settings = {}
settings.data = null;
settings.init = function(oSettingsData){
    settings.data = oSettingsData;
}
settings.get = function(sSettingName){
    return setting.data[sSettingName]
}