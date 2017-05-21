(function() {
	var customersFactory = function($http)
	{
		var factory = {};
		factory.getCustomers = function ()
		{
			return $http.get('/customers');
		};

		factory.getSpecificCustomer  = function(customerId)
		{
			return $http.get('/customers/' + customerId);
		};

		factory.getOrders = function()
		{
			return $http.get('/orders');
		};


		factory.getSpecificOrders = function(orderId)
		{
			return $http.get('/orders/' + orderId)
		};		

		return factory;
	};
	angular.module('customersApp').factory('customersFactory', customersFactory);
}());

