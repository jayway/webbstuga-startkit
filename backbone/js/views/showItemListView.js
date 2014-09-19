
App.views.showItemList = (function(){
  
  return Backbone.View.extend({

    initialize: function(){
      _.bindAll(this);
    },

    load: function(){
      return App.api.getItemList().done(function(response){
        // TODO use the response to set the state that will make render work
      });
    },

    render: function(){
      var template = $("#todo-list-template").text(); 
      var rendered = _.template(template, {items: this.items}); // Uses this.items
      $(".template-test-container").html(rendered);
    },

    loadAndRender: function() {
      this.load().done(this.render)
    }
  });
}());

