
// TODO Refactor this as the same pattern as showItemListView
App.views.showItem = function(id){
  App.api.getItem(id).then(function(response){
    var template = $("#todo-item-template").text(); 
    var rendered = _.template(template, response); // TODO Find the correct item instead of the first

    $(".template-test-container").html(rendered);
  });
}

