$(function(){

   window.api = { // Global scope
    getItemList: function(){
      return $.getJSON("api/items/index.json");
    },
    getItem: function(id){
      return $.getJSON("api/items/" + id + ".json");
    }
  }

  // Some tips: 
  //   * The functions in api will return a promise
  //   * Use the network tab in Chrome/Chromium to inspect the HTTP requests
  //   * console.log(obj) writes to the console log
  //   * JSON.stringify(obj) takes an object and returns a string


  var showItemList = function(){
    var template = $("#todo-list-template").text(); 
    var items = undefined; // TODO: Use a GET request to api/items/index.json
    var rendered = _.template(template, {items: window.items});
    $(".template-test-container").html(rendered);
  }

  var showItem = function(id){
    var template = $("#todo-item-template").text(); 
    var item = undefined; // TODO: Use a GET request to api/items/X.json
    var rendered = _.template(template, item);

    $(".template-test-container").html(rendered);
  }


  var routes = {
    '/': showItemList,
    '/items/':showItemList,
    '/items/:id': showItem
  };

  var router = Router(routes);
  router.init();
});
