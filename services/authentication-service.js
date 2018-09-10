const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get a list of ninjas from the db
router.get('/log',function(req,res){
    res.send({type:'GET'});
}); 

// add a new ninja to the db
router.post('/log',function(req ,res){
    User.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"user created"});
        }
        
    });
});
router.put('/log/:id',function(req,res){
    res.send({type:'PUT'});
});

router.delete('/log/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;