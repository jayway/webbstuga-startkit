/*global describe, it, beforeEach */
'use strict';

(function () {
    describe('An todo item', function () {

        describe('that is completed', function () {
  
            var view;

            beforeEach(function(){
              var template = $("#foo-template").text();
              var rendered = _.template(template, { name: "Drink coffee", completed: false });

              view = rendered;
            });

            it('displays its name', function () {
              expect($(".name", view).text()).toBe("Drink coffee");
            });

            it('displays its falsy state', function () {
              // TODO
            });
        });

        describe('that is not completed', function () {
          // TODO
        });

    });
})();
