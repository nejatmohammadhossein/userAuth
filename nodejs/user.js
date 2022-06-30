const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  name:{type:String, require: true},
  userId:{type:String,require:true, unique:true},
  password:{type:String,require:true},
  role:{type:String,require:true}
});

userSchema.pre('save',function(next){
  bcrypt.hash(this.password, bcrypt.genSaltSync(15), 
  (err, hash) => {
    this.password = hash;
    next();
  });
})

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password,this.password);
}



module.exports = mongoose.model('User',userSchema);
