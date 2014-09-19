App.api = {
  getItemList: function(){
    return $.getJSON("api/items/index.json");
  },
  getItem: function(id){
    return $.getJSON("api/items/" + id + ".json");
  },
  getCompletedItems: function(){
    //TODO Only return completed items
  },
  getNonCompletedItems: function(){
    //TODO Only return non-completed items
  },
}
