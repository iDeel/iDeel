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
				templateUrl: 'modules/index/views/register.html',
				controller: 'indexCtrl'
			})
			.when('/user', {
				templateUrl: 'modules/index/views/register.html',
				controller: 'indexCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});