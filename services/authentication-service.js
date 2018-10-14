const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get a list of ninjas from the db
router.get('/log',function(req,res){
    res.send({type:'GET'});
}); 

// add a new ninja to the db
router.post('/reg',function(req ,res){
    User.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"user created"});
        }
        
    });

    // const  user = new authentication-service({
    //     firstName:req.body.userName,
    //     lastName:req.body.userName,
    //     email:req.body.email,
    //     password:req.body.password
    // });

    // let promise =user.save();

    // promise.then(
    //     function (doc) {
    //         return res.status(201).json(doc);
    //     })

    // promise.catch(
    //     function(err){
    //         return res.status(501).json({message:'Error registering user'})
    //     })

});



// router.post('/login',function(req,res,next){
//    let promise = User.findOne({email:req.body.email}).exec();

//    promise.then(function(doc){
//     if(doc) {
//         if(doc.isValid(req.body.password)){

//         }
//         else {
//             return res.status(501).json({message:'Invalid Credentials'});
//         }
//     }
//     else {
//         return res.status(501).json({message:'User email is not registered.'})
//     }
//    });

//    promise.catch(function(err){
//        return res.status(501).json({message:'some internal error'});
//    })
// }); 



// router.put('/put/:id',function(req,res){
//     res.send({type:'PUT'});
// });

router.delete('/del/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;