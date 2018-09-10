const express = require('express');
const router = express.Router();
const User = require('../models/properties');

//get a list of ninjas from the db
router.get('/property',function(req,res){
    res.send({type:'GET'});
}); 

// add a new ninja to the db
router.post('/property',function(req ,res){
    User.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"property created"});
        }
        
    });
});
router.put('/property/:id',function(req,res){
    res.send({type:'PUT'});
});

router.delete('/property/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;