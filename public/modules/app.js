'use strict';

/**
 * @ngdoc overview
 * @name To Do App
 * @description
 * # To do Application
 *
 * Main module of the application.
 */
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