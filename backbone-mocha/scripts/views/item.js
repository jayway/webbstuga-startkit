define(['backbone', 'text!views/item.ejs'], function (backbone, template) {
  return Backbone.View.extend({
    initialize: function (options) {
      this.item = options.item;
    },
    render: function () {
      var html = _.template(template, this.item);
      this.$el.html(html);
      return this;
    }
  });
});
