'use strict';

angular
	.module('iDeel', [
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ngCookies'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'modules/homePage/views/homePage.html',
				controller: 'homePageCtrl'
			})
			.when('/register', {
				templateUrl: 'modules/makePlan/views/makePlan.html',
				controller: 'makePlanCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});