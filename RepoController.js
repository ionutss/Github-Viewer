(function() {

	var module = angular.module("githubViewer"); //reference to the app

	var RepoController = function($scope, github, $routeParams){

		var onRepo = function(data){
			$scope.repo = data;
		};

		var onError = function(reason){
			$scope.error = reason;
		};

		var reponame = $routeParams.reponame;
		var username = $routeParams.username;

		github.getRepoDetails(username, reponame)
				.then(onRepo, onError);
	};

	module.controller("RepoController", RepoController); //tell the module that i register a new controller

}());