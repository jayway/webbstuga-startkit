var $ = require('jquery');

var Backbone = require('backbone');
Backbone.$ = $;

var api = require('./api');
var ItemsView = require('./views/items');

var $root = $('.root');

var TodoRouter = Backbone.Router.extend({
  routes: {
    '': 'items',
    'items': 'items'
  }
});

var router = new TodoRouter();

router.on('route:items', function () {
  api.getItems().then(function (items) {
    var items = new ItemsView({ items: items });
    items.render();
    $root.html(items.$el);
  }, console.error);
});

Backbone.history.start();
