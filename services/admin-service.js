const express = require('express');
const router = express.Router();
const User = require('../models/admin');

//get a list of ninjas from the db
router.get('/admin',function(req,res){
    res.send({type:'GET'});
}); 

// add a new ninja to the db
router.post('/admin',function(req ,res){
    User.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"admin created"});
        }
        
    });
});
router.put('/admin/:id',function(req,res){
    res.send({type:'PUT'});
});

router.delete('/admin/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;