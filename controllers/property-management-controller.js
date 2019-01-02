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

module.exports.deleteProperties = deleteProperties;