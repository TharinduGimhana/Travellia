const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


// const bcrypt = require('bcrypt');

//authentication
//create ninja Schema & mmodel
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

    password:{
        type: String,
        unique: true,
        required: true
    }
    // hash: String,
    // salt: String



    // add in geo location
});

// Schema.static.hashPassword = function hashPassword(password){
//     return bcrypt.hashSync(password,10);
// }

// Schema.methods.isValid = function(hashedPassword){
//     return bcrypt.compareSync(hashedPassword, this.password);
// }

// UserSchema.methods.setPassword = function (password) {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
// };

// UserSchema.methods.validPassword = function (password) {
//     var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
//     return this.hash === hash;
// };

UserSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      firstname: this.name,
      lastname: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };

 



// UserSchema.statistic.hashPassword = function hashPassword(password){
//     return bcrypt.hashSync(password,10);
// }

// UserSchema.methods.isValid = function(hashedPassword){
//     return bcrypt.compareSync(hashedPassword, this.password);
// }



const User = mongoose.model('User', UserSchema);

module.exports = User;

//authentication




