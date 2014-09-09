var Backbone = require('backbone');
var when = require('when');
var _ = require('underscore');
var ItemView = require('./item');

module.exports = Backbone.View.extend({
  tagName: 'ul',
  initialize: function (options) {
    this.items = options.items;
  },
  render: function () {
    var self = this;

    // Add all items.
    _.each(self.items, function (item) {
      var view = new ItemView({ item: item });
      view.render();
      self.$el.append(view.$el);
    });

    return self;
  },
  loadAndRender: function() {
    var self = this;
  }
});
