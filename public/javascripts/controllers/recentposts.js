
app.controller('RecentPostsCtrl', ['$scope','posts', 'userMessages', 'auth','$http', function($scope, posts, userMessages, auth,$http){
    // GET THE POSTS

       $http({
    method:'POST',
    url:'/api/allUsers',
}).then(function successCallback(response){
    
       
},
function errorCallback(response){
        $scope.users = response.data;
         //console.log($scope.users);
});
    
//        for(var i in users.allUsers)
//      users.allUsers()
//      .then(function(count){
//         console.log(count.data);
//      },function(err){
//         console.log(err);
//      })

// }



 
    //console.log($scope.totalUsers);
    $scope.count = posts.posts.length;
    $scope.posts = posts.posts;
    

        $scope.search = {};
        $scope.currentPage = 1;
        $scope.totalItems = $scope.posts.length;
        $scope.entryLimit = 9; 
        $scope.noOfpages = Math.ceil($scope.totalItems / $scope.entryLimit);
    
    // GET USER INFORMATION
    $scope.isLoggedIn = auth.isLoggedIn();
    $scope.isAdmin = auth.isAdmin();
    
    //HANDLE USER MESSAGES
    $scope.userMessage = userMessages.getMessage();
    $scope.hideMessage = function(){
        userMessages.hideMessage();
        $scope.userMessage = userMessages.getMessage();
    }
 
    // DISPLAY ORDERING
    $scope.orderByTitle = function(){
        if($scope.rowFilter == 'title'){
            $scope.rowFilter = '-title';
        }
        else{
            $scope.rowFilter = 'title';
        }
    };
    $scope.orderByVotes = function(){
        if($scope.rowFilter == '-upvotes'){
            $scope.rowFilter = 'upvotes';
        }
        else{
            $scope.rowFilter = '-upvotes';
        }
    };
    $scope.orderByView = function(){
        if($scope.rowFilter == '-views'){
            $scope.rowFilter = 'views';
        }
        else{
            $scope.rowFilter = '-views';
        }
    };
    $scope.orderByReplies= function(){
        if($scope.rowFilter == '-comments.length'){
            $scope.rowFilter = 'comments.length';
        }
        else{
            $scope.rowFilter = '-comments.length';
        }
    };
    $scope.orderByunanswered= function(){
        if($scope.rowFilter == 'comments.length == 0'){
            $scope.rowFilter = 'comments.length';
        }
        else{
            $scope.rowFilter = 'comments.length';
        }
    };
    
}]);

