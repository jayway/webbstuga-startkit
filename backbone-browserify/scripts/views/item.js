var Backbone = require('backbone');
var _ = require('underscore');

var template = '<li><%= name %></li>';

module.exports = Backbone.View.extend({
  initialize: function (options) {
    this.item = options.item;
  },
  render: function () {
    var html = _.template(template, this.item);
    this.$el.html(html);
    return this;
  }
});
