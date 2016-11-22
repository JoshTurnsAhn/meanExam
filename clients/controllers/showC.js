app.controller('showController', function($scope, sessionFactory, $location, bucketFactory, $routeParams, $route){
  sessionFactory.checkSess(function(data){
    $scope.session_user=data.name;
  })
  bucketFactory.showindex($routeParams.id, function(data){
    $scope.buckets = data;
  })
})
