var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var BucketSchema = new mongoose.Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  _tagged: {type: Schema.Types.ObjectId, ref: 'User'},
  title: {type: String, min: [5, "Title must have at least 5 chars."]},
  description: {type: String, min: [10, "Description must have at least 10 chars."]},
  checked: {type: Boolean, default: false},
},{timestamps: true});

mongoose.model('Bucket', BucketSchema);
