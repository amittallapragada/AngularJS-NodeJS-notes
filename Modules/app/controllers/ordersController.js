(function() {
    
    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        $scope.sortBy = 'name';

        function init() {
            customersFactory.getSpecificCustomer(customerId)
            .then(function(response){
                $scope.customer = response.data;
            },
            function(data, status, headers, config){
                //handle error
            });

        }

        init();
    };
    
    /*OrdersController.$inject = ['$scope', '$routeParams'];*/
    angular.module('customersApp')
     .controller('OrdersController', OrdersController);

}());


