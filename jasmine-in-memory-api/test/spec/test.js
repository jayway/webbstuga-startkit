/*global describe, it, beforeEach, App */
'use strict';

(function () {
    describe('API', function () {

        describe('getAll', function () {
            var brewBeer;
            var cookDinner;

            beforeEach(function(){
                App.api.clear();
                brewBeer = App.api.save({ name: 'Brew Beer' });
                cookDinner = App.api.save({ name: 'Cook Dinner' });
            });

            it('returns all items', function () {
                expect(true).toEqual(false, "This is your first failing test"); // TODO Remove
                return; // TODO Remove

                var items = App.api.getAll();
                expect(items).toContain(brewBeer);
                expect(items).toContain(cookDinner);
            });
        });

        describe('save', function () {
          // TODO
        });

        describe('remove', function () {
          // TODO
        });
    });
})();
