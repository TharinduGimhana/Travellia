const express = require('express');
const router = express.Router();
// const User = require('../models/upload');
const multer = require('multer');
const mongoose = require('mongoose');

// var Schema = mongoose.Schema;
// ObjectId = Schema.ObjectId;

var destSchema = mongoose.Schema({
    // propertyId  : ObjectId,
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

   
destSchema.virtual('propertyId').get(function() {
    return this._id;
});

// var Image;
var Image = module.exports = mongoose.model('files', destSchema);


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
    cb(null, 'uploads/destinations')
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


router.post('/upload',upload.any(), function (req, res) {




    res.send(req.files);
    console.log(req.files); 


    // res.send(req.imagepath);
     

     

 
 /*req.files has the information regarding the file you are uploading...
 from the total information, i am just using the path and the imageName to store in the mongo collection(table)
 */
  var path = req.files[0].path;
  var imageName = req.files[0].originalname;

  console.log(path); 
      return path;

  
  
  var imagepath = {};
  imagepath['path'] = path;
  imagepath['originalname'] = imageName;
  
  //imagepath contains two objects, path and the imageName
  
  //we are passing two objects in the addImage method.. which is defined above..
  router.addImage(imagepath, function(err) {
  
  });

  return path;
 
  

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