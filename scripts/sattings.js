var settings = {}
setting.data = null;
settings.init = function(oSettingsData){
    settings.data = oSettingsData;
}
setting.get = function(sSettingName){
    return setting.data[sSettingName]
}