var mod = angular.module('check_out',['ngRoute','ui.select','ngSanitize']);
mod.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider
		.when('/addprofile',{
			controller: 'AddProfileCtrl',
			templateUrl: 'temp/addProfile.html',
			controllerAs : 'add'
		})
		.when('/dashboard',{
			controller : 'DashBoard',
			templateUrl : 'temp/dashBoard.html'
		})
		.when('/viewprofile:email?',{
			controller : 'ViewProfile',
			templateUrl : 'temp/viewProfile.html'
		})
		// .otherwise('/');
		$locationProvider.html5Mode(true);

}]);