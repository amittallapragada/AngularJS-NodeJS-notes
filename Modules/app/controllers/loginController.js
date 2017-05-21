(function(){
	var loginController = function($scope, customersFactory, $location)
	{

		$scope.authenticate = function (user, pass)
		{
			if(user == 'admin' && pass == "admin")
			{
				window.alert("it works");
				$location.path('/customers/');
			}
			else{
				window.alert('try again')
			}
		};
	}

	angular.module("customersApp").controller("loginController", loginController);
})();