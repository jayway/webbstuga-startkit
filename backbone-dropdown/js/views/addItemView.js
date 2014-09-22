App.views.addItemView = (function(){
  
  return Backbone.View.extend({

    initialize: function(){
      _.bindAll(this);
      this.item = {};
    },

    load: function(){
      // TODO: This should load whatever the render function needs and return a
      // promise.
      var d = $.Deferred()
      d.resolve(null);
      return d.promise();
    },

    render: function(){
      var template = $("#add-item-template").text(); 
      var rendered = _.template(template, {
        // Here you add the properties that you want to expose to the template.
        item: this.item
      });
      $(".template-container").html(rendered);
    },

    loadAndRender: function() {
      this.load().done(this.render);
    }
  });
}());

