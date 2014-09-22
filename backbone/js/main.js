
window.App = {
  views: {}
};


$(function(){
  var routes = {
    '/': function() {
      var view = new App.views.showItemList;
      view.loadAndRender();
    },
    '/items/': App.views.showItemList,
    '/items/:id': App.views.showItem
  };

  var router = Router(routes);
  router.init('/');

});
