const User = require('../models/properties');


addProperties = function (req, res, next) {
    User.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"property created"});
        }
        
    });

}

module.exports.addProperties = addProperties;




updateProperties = function(req, res, next){
    res.send({ type: 'GET' });
}

module.exports.updateProperties = updateProperties;



viewProperties = function(req, res, next){
    res.send({ type: 'PUT' });
}

module.exports.viewProperties = viewProperties;


deleteProperties = function(req, res, next){
    res.send({ type: 'DELETE' });
}

searchHotels =function(req,res,next){

    console.log(req.params.id);
    User.find({name:req.params.id},function(err,usr){
        if(usr){
            res.status(200).send(usr);
        }else{
            res.status(401).send("notfound");
        }
    });
    
}

module.exports.searchHotels=searchHotels;

module.exports.deleteProperties = deleteProperties;