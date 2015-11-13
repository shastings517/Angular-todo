var app = angular.module('todoApp', []); 

app.controller("TodosController", function($scope) { // What's missing?
	$scope.vm = {};
  $scope.todos = []; // Store todo items here. What is the data type?
  $scope.addTodo = function() { // Rewrite to make this function abailable in your view
    // Add code here
    $scope.todos.push($scope.vm);
    $scope.vm = {};
    // debugger
	};
	 $scope.deleteAll = function() { // Rewrite to make this function abailable in your view
		// Add code here
    $scope.todos = [];
    
	};
});