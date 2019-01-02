const User = require('../models/dest');

addDestinations = function(req,res,next){
    User.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"dest created"});
        }
        
    });
}

module.exports.addDestinations = addDestinations;



viewDestinations = function(req,res,next){
    res.send({type:'GET'});
}

module.exports.viewDestinations = viewDestinations;



deleteDestinations = function(req,res,next){
    res.send({type:'DELETE'});
}

module.exports.deleteDestinations = deleteDestinations;



updateDestinations = function(req,res,next){
    res.send({type:'PUT'});
}

module.exports.updateDestinations = updateDestinations;