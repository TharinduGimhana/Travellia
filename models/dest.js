const mongoose = require('mongoose');
const Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;
const destSchema = new Schema({

    propertyId  : ObjectId,
     desname:{
         type:String,
     },
     city:{
        type:String,
        
     },
     descripttion:{
         type:String
        
     },
     address:{
        type:String
       
    },
     photos: [{ 
        data: Buffer, contentType: String 
    }],

   

    location:{
        address:{
            type:String,
        },
        cordinates:[{lat:Number, lng:Number}],
    }
    
    
     // add in geo location
})


const dest = mongoose.model('dest',destSchema);

module.exports= dest; 
