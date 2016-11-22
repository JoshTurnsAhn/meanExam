app.factory('bucketFactory', function($http, $location){
  var factory = {};

  factory.addBucket = function(bucket, cb){
    $http.post('bucket/add', bucket).success(function(data){
      cb(data);
    })
  }
  factory.bucketindex = function(cb){
    $http.get('bucket/all').success(function(data){
        cb(data);
    })
  }
  factory.userindex = function(cb){
    $http.get('user/all').success(function(data){
        cb(data);
    })
  }
  factory.checked = function(bucket){
    $http.post('bucket/checked', bucket);
  }
  factory.showindex = function(id, cb){
    $http.get('bucket/showindex/'+id).success(function(data){
      cb(data);
    })

  }
  return factory
})
