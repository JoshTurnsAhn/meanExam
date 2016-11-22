app.controller('bucketController', function($scope, sessionFactory, $location, bucketFactory, $routeParams, $route){

  sessionFactory.checkSess(function(data){
      $scope.session_user=data.name;
    })
    $scope.addBucket = function(){
      if($scope.newBucket.title == undefined || $scope.newBucket.description == undefined || $scope.newBucket.title.length<5 || $scope.newBucket.description.length<10){
        $scope.error="Title must have at least 5 chars and description must at least 10.";
      }
      else{
        console.log($scope.newBucket.title);
        bucketFactory.addBucket($scope.newBucket, function(data){
          if(data.errors){
            $scope.error=data.errors.bucket.message;
          }
          if(data.status == true){
            $location.url('dashboard')
          }
        });
      }
    }
    bucketFactory.bucketindex(function(data){
      $scope.buckets = data;
    })
    bucketFactory.userindex(function(data){
      $scope.users = data;
    })
    $scope.check = function(id){
        var data = {bucket_id: id};
        bucketFactory.checked(data);
          $location.url('dashboard')
    }
  })
