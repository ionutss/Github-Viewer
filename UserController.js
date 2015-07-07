(function() {
	
	var app = angular.module("githubViewer");

	var UserController = function($scope, github, $routeParams) {

		var onUserComplete = function(data)
		{
			$scope.user = data;

			github.getRepos($scope.user)
				.then(onRepos, onError);
		};

		var onRepos = function(data) {
			$scope.repos = data;
			//$location.hash("userDetails");
			//$anchorScroll();
		};

		var onError = function(reason)
		{
			$scope.error = "Could not fetch the data";
		};


		$scope.username = $routeParams.username;

		github.getUser($scope.username).then(onUserComplete, onError);


	};

	app.controller("UserController", UserController);


}());