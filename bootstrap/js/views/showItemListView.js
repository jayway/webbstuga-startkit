
App.views.showItemList = function(){
  App.api.getItemList().done(function(response){
    var template = $("#todo-list-template").text(); 
    var rendered = _.template(template, {items: response.items});
    $(".template-test-container").html(rendered);
  });
}

