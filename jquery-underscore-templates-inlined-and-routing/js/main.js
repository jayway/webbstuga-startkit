$(function(){

  var showItemList = function(){
    var template = $("#todo-list-template").text(); 
    var rendered = _.template(template, {items: window.items});
    $(".template-test-container").html(rendered);
  }

  var showItem = function(id){
    var template = $("#todo-item-template").text(); 
    var rendered = _.template(template, window.items[0]); // TODO Find the correct item instead of the first

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
