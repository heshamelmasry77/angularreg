var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

// check for the authentication error event by adding something to myApp called run
myApp.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (even, next, prevoius, error) {
        if (error == 'AUTH_REQUIRED') {
            $rootScope.message = 'Sorry, you must log in to access that page';
            $location.path('/login');
        } //Auth Required
    }); //$routeChangeError
}]); //run
myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'RegistrationController'
    }).when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationController'
    }).when('/success', {
        templateUrl: 'views/success.html',
        controller: 'SuccessController',
        resolve: {
            currentAuth: function (Authentication) {
                return Authentication.requireAuth();
            } //currentAuth
        } //resolve
    }).otherwise({
        redirectTo: '/login'
    });

}]);
