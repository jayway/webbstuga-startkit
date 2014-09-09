
window.App = {
  views: {} 
};


$(function(){
  var routes = {
    '/': App.views.showItemList,
    '/items/': App.views.showItemList,
    '/items/:id': App.views.showItem
  };

  var router = Router(routes);
  router.init();

});
