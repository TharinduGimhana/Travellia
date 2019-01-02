const express = require('express');
const router = express.Router();
const User = require('../models/upload');
const multer = require('multer');
const mongoose = require('mongoose');


var imageSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    

    city: {
        type: String,
        // required: true
    },

    path: {
    type: String,
    required: true,
    trim: true
    },
    originalname: {
    type: String,
    required: true,
    // type: mongoose.Schema.ObjectId, ref: 'User'
    }
    
   });

   imageSchema.virtual('propertyId').get(function() {
    return this._id;
    
});


// var Image;
var Image = module.exports = mongoose.model('file', imageSchema);


router.getImages = function(callback, limit) {
 
    Image.find(callback).limit(limit);
   }
    
    
   router.getImageById = function(id, callback) {
     
    Image.findById(id, callback);
    
   }
    
   router.addImage = function(image, callback) {
    Image.create(image, callback);
   }




   var storage = multer.diskStorage({
    destination: function(req, file, cb) {
    cb(null, 'uploads/hotels')
    },
    filename: function(req, file, cb) {
    cb(null, file.originalname);
    }
   });
    
   var upload = multer({
    storage: storage
   });





router.get('/upload', function (req, res) {
    res.send({ type: 'GET' });
});

// add a new ninja to the db
router.post('/upload',upload.any(), function (req, res) {




    // console.log(req,files)

    res.send(req.files);
     console.log(req.files); 


     

 
 /*req.files has the information regarding the file you are uploading...
 from the total information, i am just using the path and the imageName to store in the mongo collection(table)
 */
  var path = req.files[0].path;
  var imageName = req.files[0].originalname;
  
  
  var imagepath = {};
  imagepath['path'] = path;
  imagepath['originalname'] = imageName;
  
  //imagepath contains two objects, path and the imageName
  
  //we are passing two objects in the addImage method.. which is defined above..
  router.addImage(imagepath, function(err) {
  
  });

  

});
router.put('/upload/:id', function (req, res) {
    res.send({ type: 'PUT' });
});

router.delete('/upload/:id', function (req, res) {
    res.send({ type: 'DELETE' });
});

// router.post("/",upload.single('hotelImage'),(req,res,next)=>{
//     console.log(req.file);
// })










module.exports = router;