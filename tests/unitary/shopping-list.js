describe('Purchasing Unit List', function () {

    describe('ShoppingListController', function () {
        beforeEach(function () {
            this.$scope = {};
            this.controller = new ShoppingListController(this.$scope);
        });

        it('should create "items" with 2 items', function () {
            expect(this.$scope.items.length).toBe(2);
        });

        describe('addedItem', function () {
            it('You must add a new item to the list with scope data', function () {
                this.$scope.item = {};
                this.$scope.item.product = 'Carne';
                this.$scope.item.quantity = 5;
                this.$scope.addedItem();
                expect(this.$scope.items.length).toBe(3);
                expect(this.$scope.items[2].product).toBe('Carne');
                expect(this.$scope.items[2].quantity).toBe(5);
                expect(this.$scope.items[2].bought).toBeFalse;
            });
        });

    });

});
