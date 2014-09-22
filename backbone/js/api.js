App.api = {
  getItemList: function(){
    return $.getJSON("api/items/index.json");
  },
  getItem: function(id){
    return $.getJSON("api/items/" + id + ".json");
  }
}
