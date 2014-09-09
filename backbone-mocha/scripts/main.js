/*global require*/
'use strict';

require.config({
  baseUrl: 'scripts',
  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    text: '../bower_components/requirejs-text/text'
  },
  packages: [
    { name: 'when', location: '../bower_components/when', main: 'when' }
  ]
});

require([
  'backbone',
  'jquery',
  'views/items'
], function (Backbone, $, ItemsView) {

  var $root = $('.root');

  var TodoRouter = Backbone.Router.extend({
    routes: {
      '': 'items',
      'items': 'items'
    }
  });

  var router = new TodoRouter();

  router.on('route:items', function () {
    var items = new ItemsView();
    items.loadAndRender().then(function (items) {
      $root.html(items.$el);
    });;
  });

  Backbone.history.start();
});
