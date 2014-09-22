App.api = {
  getItemPriorities: function(){
    return Q($.getJSON("api/priorities.json"));
  },
  getUserSettings: function(id){
    return Q($.getJSON("api/user-settings.json"));
  }
}
