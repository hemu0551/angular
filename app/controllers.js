function ShoppingListController($scope) {

    $scope.item = {};

    $scope.items = [
        {product: 'Hemanth', quantity: 2, bought: false},
        {product: 'Ravi', quantity: 12, bought: false}
    ];

    $scope.addedItem = function () {
        $scope.items.push({product: $scope.item.product, quantity: $scope.item.quantity, bought: false});
        $scope.item.product = $scope.item.quantity = '';
        toastr.success("Item added successfully.");
    };

    $scope.editItem = function(index){
        $scope.item = $scope.items[index];
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.item = {};
        $scope.edit = false;
        toastr.success("Item successfully changed.");
    };

    $scope.deleteItem = function(index){
        $scope.items.splice(index, 1);
        toastr.success("Item successfully removed.");
    };
}