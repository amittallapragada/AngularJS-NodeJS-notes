(function() {
    
    var app = angular.module('customersApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'loginController',
                templateUrl: 'app/views/login.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .when('/orders/', {
                controller: 'allOrdersController',
                templateUrl: 'app/views/allorders.html'
            })
            .when('/customers/' , {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());