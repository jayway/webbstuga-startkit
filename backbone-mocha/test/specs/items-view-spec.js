define(['views/items'], function (ItemsView) {
  describe('ItemsView', function () {

    it('displays all items', function (done) {
      var view = new ItemsView();

      view.loadAndRender().then(function (view) {
        var $listItems = view.$el.children();

        $listItems.each(function (i) {
          var $listItem = $(this);
          var item = view.items[i];

          $listItem.text().should.contain(item.name);
        });
      }).then(done, done);

    });
  });
});
