(function(){
	var allOrdersController = function($scope, customersFactory)
	{
		$scope.orders = [];
		$scope.total = null;
		function init (){
			customersFactory.getOrders().
               then(function(response){
                    $scope.orders = response.data;
               		calculateTotal();
               },
               function(data, status, headers, config){
                    log.log(data.error + " " + status);
               });
		}

		function calculateTotal()
		{
			var total = 0;
			for(var i=0, len=$scope.orders.length; i<len; i++)
			{
				total = total +  $scope.orders[i].total;
			}
			$scope.total = total;
			$scope.totalType = ($scope.total > 100) ? 'success' : 'danger';
		}


		init();



	};

	angular.module("customersApp").controller("allOrdersController" , allOrdersController);



})();

