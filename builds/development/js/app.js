var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.
    when('/login', {
        templateUrl: 'views/login.html',
        controller: 'RegistrationController'
    }).
    when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationController'
    }).
    when('/success', {
        templateUrl: 'views/success.html',
        controller: 'SuccessController'
    }).
    otherwise({
        redirectTo: '/login'
    });

}]);
