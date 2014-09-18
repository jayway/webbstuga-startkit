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
            beforeEach(function(){
                App.api.clear();
            });

            xit('saves the item', function () {
               var brewBeer = App.api.save({ name: 'Brew Beer' });
                var items = App.api.getAll();
                expect(items).toContain(brewBeer);
            });
        });

        describe('remove', function () {
            var brewBeer;

            beforeEach(function(){
                App.api.clear();
                brewBeer = App.api.save({ name: 'Brew Beer' });
            });

            xit('removes the item if it exists', function (id) {
                var success = App.api.remove(brewBeer.id);

                expect(success).toBe(true);

                var items = App.api.getAll();
                expect(items).not.toContain(brewBeer);
            });

            xit('returns false if the items does not exist', function (id) {
                var success = App.api.remove(-1);

                expect(success).toBe(false);
            });
        });
    });
})();
