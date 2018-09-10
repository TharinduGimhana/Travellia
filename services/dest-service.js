const express = require('express');
const router = express.Router();
const User = require('../models/dest');

//get a list of ninjas from the db
router.get('/dest',function(req,res){
    res.send({type:'GET'});
}); 

// add a new ninja to the db
router.post('/dest',function(req ,res){
    User.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"dest created"});
        }
        
    });
});
router.put('/dest/:id',function(req,res){
    res.send({type:'PUT'});
});

router.delete('/dest/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;