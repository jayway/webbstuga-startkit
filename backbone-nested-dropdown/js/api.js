App.api = {
  getItemPriorities: function(){
    return $.getJSON("api/priorities.json");
  },
  getUserSettings: function(id){
    return $.getJSON("api/user-settings.json");
  }
}
