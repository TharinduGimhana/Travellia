const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//authentication
//create ninja Schema & mmodel
const destSchema = new Schema({
     destName:{
         type:String,
     },
     city:{
        type:String,
        
     },
     descripttion:{
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
