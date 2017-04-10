/**
 * Created by Steve on 3/13/2017.
 */

'use strict';

angular
.module('iDeel')
.controller('indexCtrl', ['$scope', '$rootScope', '$http', '$route', '$location',
	function ($scope, $rootScope, $http, $route, $location) {
		$scope.user = {};
		$scope.user.firstName ="name";
		$scope.user.lastName="";
		$scope.user.email="";
		$scope.user.businessName="";

		$scope.SubmitUser = function () {
			console.log("SubmitUser is called: ");
			var url = '/#/user';
			$http.post(url, $scope.user).success(function(data, status, headers, config){
				console.log("Called the server");
			});
		}

		$scope.changeView = function (view) {
			$scope.view = view;
		}
	}
]);




