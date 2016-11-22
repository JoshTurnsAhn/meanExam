app.factory('sessionFactory', function($http, $location){
  var factory = {};

  factory.checkSess = function(cb){
    $http.get('/user/checksess').success(function(data){
      if(!data){
        $location.url('/logreg')
      }
      else{
        cb(data);
      }
    })
  }
  factory.logReg = function(user,cb){
    $http.post('/user/login', user).success(function(data){
      cb(data);
    })
  }
  return factory
})
