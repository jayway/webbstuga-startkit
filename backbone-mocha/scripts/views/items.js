define(['backbone', 'api', 'views/item'], function (backbone, api, ItemView) {
  return Backbone.View.extend({
    tagName: 'ul',
    render: function () {
      var self = this;

      // Add all items.
      _.each(self.items, function (item) {
        var view = new ItemView({ item: item });
        self.$el.append(view.render().$el);
      });

      return self;
    },
    loadAndRender: function() {
      var self = this;
      return api.getItems().then(function (items) {
        self.items = items;
        return self.render();
      });
    }
  });
});
