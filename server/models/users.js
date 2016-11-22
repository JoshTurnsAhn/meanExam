var mongoose =require('mongoose');
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name cannot be blank."]
  }
},{timestamps: true});

mongoose.model('User', UserSchema);
