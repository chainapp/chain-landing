appControllers.controller('subscriberCtrl', ['$scope','$http','subscriberService',function UsersCtrl($scope,$http,subscriberService) {




	$scope.subscribe = function() {
		console.log('in subscribe');

		subscriberService.subscribeCall($scope.name,$scope.mail).then(function(res){

			console.log(res);
			$scope.name = "";
			$scope.mail = "";

		});

	}


//Creation du  tableau des utilisateurs
   

}]);