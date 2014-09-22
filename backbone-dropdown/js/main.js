
window.App = {
  views: {}
};


$(function(){
  var routes = {
    '/': function() {
      var view = new App.views.addItemView;
      view.loadAndRender();
    }
  };

  var router = Router(routes);
  router.init('/');

});
