require.config({
  baseUrl: '../scripts',
  paths: {
    'jquery'        : '../bower_components/jquery/dist/jquery',
    'underscore'    : '../bower_components/underscore/underscore',
    'backbone'      : '../bower_components/backbone/backbone',
    'text': '../bower_components/requirejs-text/text',
    'mocha'         : '../bower_components/mocha/mocha',
    'chai'          : '../bower_components/chai/chai'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },
  packages: [
    { name: 'when', location: '../bower_components/when', main: 'when' }
  ]
});

require(['require', 'chai', 'mocha', 'jquery'], function (require, chai) {
  // Chai
  var should = chai.should();

  mocha.setup('bdd');

  require([
    '../test/specs/items-view-spec.js',
  ], function(require) {
    mocha.run();
  });

});
