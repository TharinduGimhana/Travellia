const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


// const bcrypt = require('bcrypt');

//authentication
//create ninja Schema & mmodel
const UserSchema = new Schema({
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required: true
    // },
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



// UserSchema.pre('save', function(next) {
//     var User = this;
//     if (!User.isModified('password')) {
//       return next();
//     }
//     bcrypt.genSalt(10, function(err, salt) {
//       bcrypt.hash(User.password, salt, function(err, hash) {
//         User.password = hash;
//         next();
//       });
//     });
//   });



//   UserSchema.methods.comparePassword = function(password, done) {
//     bcrypt.compare(password, this.password, function(err, isMatch) {
//       done(err, isMatch);
//     });
//   };


const User = mongoose.model('User', UserSchema);

module.exports = User;

//authentication




