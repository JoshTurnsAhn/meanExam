var session = require('./../controllers/sessionC.js')
var bucket = require('./../controllers/bucketC.js')
module.exports = function(app){
  app.post('/user/login', function(req, res){
    session.logReg(req, res)
  })
  app.get('/logout', function(req, res){
    session.logout(req, res)
  })
  app.get('/user/checksess', function(req, res){
  session.checkSess(req, res)
  })
  app.post('/bucket/add', function(req, res){
    bucket.addBucket(req, res)
  })
  app.get('/bucket/all', function(req, res){
    bucket.allBuckets(req, res)
  })
  app.get('/user/all', function(req, res){
    bucket.allUsers(req, res)
  })
  app.post('/bucket/checked', function(req, res){
    bucket.check(req,res)
  })
  app.get('/bucket/showindex/:id', function(req,res){
    bucket.showindex(req,res)
  })
}
