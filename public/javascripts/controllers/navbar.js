app.controller('NavCtrl', ['$scope','$state','$location','auth','dataService','$http', function($scope, $state,$location, auth,dataService,$http){
  
  // NAVIGATION ACTIVATION
 /* $scope.submitData = function(){
    $http({
      method:'POST',
      url:'/api/search',
      data:{title:$scope.searchData},
    }).then(function successCallback(response){
      console.log(response);
    },function errorCallback(error){
      console.log(error);
    })
      
  }*/
 
 $scope.submitData = function(name){
    dataService.search(name).then(function(data){
        $scope.list = data;
    })
 }

 $scope.isCurrentPath = function(path){
    var pathin = $location.path();
    return !pathin.search(path);
  };
  
  // NAVIGATION BAR USER INFORMATION
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser; // set our nav bar variable to the current user
  $scope.logOut = function(){
      auth.logOut();
      $state.go('categoryList',{},{ reload: true });
  }

}]);