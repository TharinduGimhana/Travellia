const User = require("../models/user");
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');



authenticateUsers = function (req, res, next) {


    bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err) {
           return res.status(500).json({
              error: err
           });
        }
        else {
           const user = new User({
              lastName:req.body.lastName,  
              firstName:req.body.firstName,
              email: req.body.email,
              password: hash    
           });
           user.save().then(function(result) {
              console.log(result);
              res.status(200).json({
                 success: 'New user has been created'
              });
           }).catch(error => {
              res.status(500).json({
                 error: err
              });
           });
        }
     });
}



module.exports.authenticateUsers = authenticateUsers;


signinUsers = function (req, res, next){

   User.findOne({email: req.body.email})
   .exec()
   .then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result){
         if(err) {
            return res.status(401).json({
               failed: 'Unauthorized Access'
            });
         }
         if(result) {
           const JWTToken = jwt.sign({
               email: user.email
        
             },
             'secret',
              {
                expiresIn: '2h'
              });
              return res.status(200).json({
                success: 'Welcome to the JWT Auth',
                token: JWTToken
              });

         }
         return res.status(401).json({
            failed: 'Unauthorized Access'
         });

       
      });
   })
   .catch(error => {
      res.status(500).json({
         error: 'mokka'
      });
   });;

}

module.exports.signinUsers = signinUsers;