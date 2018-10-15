const express = require('express');
const router = express.Router();
const User = require('../models/room');

//get a list of ninjas from the db
router.get('/room',function(req,res){
    res.send({type:'GET'});
}); 

// add a new ninja to the db
router.post('/room',function(req ,res){
    User.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"room created"});
        }
        
    });
});
router.put('/room/:id',function(req,res){
    res.send({type:'PUT'});
});

router.delete('/room/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;