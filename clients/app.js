var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
  .when('/logreg', {
		templateUrl: 'partials/logreg.html'
	})
  .when('/dashboard', {
		templateUrl: 'partials/dashboard.html'
	})
	.when('/show/:id', {
		templateUrl: 'partials/show.html'
	})
  .otherwise({
    redirectTo: '/logreg'
  })
})
