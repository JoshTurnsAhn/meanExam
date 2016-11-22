var mongoose = require('mongoose');
var Bucket = mongoose.model('Bucket');
var User = mongoose.model('User');
module.exports = (function(){
  return{
    addBucket: function(req, res){
      var bucket = new Bucket({_user: req.session.user._id, _tagged: req.body.tagged, title: req.body.title, description: req.body.description})
      bucket.save(function(err, bucket){
        if(err){
          res.json(err);
        }
        else{
          res.json({status: true})
        }
      })
    },
    allBuckets: function(req, res){
      Bucket.find({$or:[{_user:req.session.user._id},{_tagged: req.session.user._id}]}).populate('_user').populate('_tagged').exec(function(err,data){
        res.json(data)
      })
    },
    allUsers: function(req,res){
      User.find({}, function(err, data){
        res.json(data)
      })
    },
    check: function(req,res){
      Bucket.findOne({_id: req.body.bucket_id}, function(err, bucket){
        if(bucket.checked == false){
          bucket.checked = true;
        }
        else{
          bucket.checked = false;
        }
        bucket.save();
      })
    },
    showindex: function(req,res){
      Bucket.find({$or:[{_user:req.params.id},{_tagged: req.params.id}]}).populate('_user').populate('_tagged').exec(function(err,data){
        res.json(data)
      })
    }
  }
})();
