/*option 3*/	


(function() {
		
		var CustomersController =  function($scope, customersFactory, $log, appSettings) {
            $scope.customers = [];
            $scope.sortBy="name";
            $scope.customers = [];
            $scope.appSettings = appSettings;

            function init ()
            {
               customersFactory.getCustomers().
               then(function(response){
                    $scope.customers = response.data;
               },
               function(data, status, headers, config){
                    log.log(data.error + " " + status);
               });
                
            }
            
             init();
        	
			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !$scope.reverse;
			};
		};
    /*CustomersController.$inject = ['scope', 'customersFactory'];*/

angular.module("customersApp")
		.controller("CustomersController", CustomersController);

}());



