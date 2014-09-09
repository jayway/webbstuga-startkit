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
              expect($(".completed", view).text()).toBe('false');
            });
        });

        describe('that is not completed', function () {
  
            var view;

            beforeEach(function(){
              var template = $("#foo-template").text();
              var rendered = _.template(template, { name: "Drink water", completed: true });

              view = rendered;
            });

            it('displays its name', function () {
              expect($(".name", view).text()).toBe("Drink water");
            });

            it('displays its truthy state', function () {
              expect($(".completed", view).text()).toBe('true');
            });
        });

    });
})();
