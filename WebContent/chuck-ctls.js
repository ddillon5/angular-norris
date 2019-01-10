var app = angular.module("myChuckApp", ["ngRoute"]);

//no nav.
app.config(navCFG);
app.controller("myChuckCTL", myChuckCTL);
app.service("myChuckService", ['$http', myChuckService]);

function myChuckCTL(myChuckService, $scope){
	 
	//console.info(data);
	//$scope.quote = $scope.data.value;
	 $scope.refresh = function(){
		 myChuckService.getChuckQuote(function(response){$scope.quote = response.data.value});
	 }
}

function myChuckService($http, $scope){
	this.getChuckQuote = function (callback){
		console.info('in getChuckQuote');
		var request = {
				method: 'GET',
				url: 'https://api.chucknorris.io/jokes/random'
		}
		$http(request).then(function(response, $scope){
			callback(response);
		});
		
	}
	
}

var case1 = {
		templateUrl : "./chuck-chuck.html",
		controller : "myChuckCTL"
}

function navCFG($routeProvider, $locationProvider){
	$routeProvider
	.when('/', case1)
	.otherwise({
		redirectTo: '/'
	});
}

 
