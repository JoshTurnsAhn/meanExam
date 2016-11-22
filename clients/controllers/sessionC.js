app.controller('sessionController', function($scope, sessionFactory, $location){
  sessionFactory.checkSess(function(data){
    $scope.session_user=data.name;
  })
  $scope.logReg = function(){
    if($scope.newUser == undefined || $scope.newUser.name.length<3){
      $scope.error='check your name length(3min) & Please Try Again';
    }
    else{
    sessionFactory.logReg($scope.newUser, function(data){
      if(data.errors){
        $scope.error=data.errors.name.message;
      }
      if(data.status == true){
        $location.url('dashboard')
      }
    });
  }
}
})
