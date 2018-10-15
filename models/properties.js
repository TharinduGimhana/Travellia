const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    name:{
        type:String,
        required: true
    },

    city:{
        type:String,
        required: true
    },
    
    star:{
        type:String,
        required: true
    },

    contactno:{
        type:String,
        required: true
    },

    contactname:{
        type:String,
        required: true
    },

    description:{
        type:String,
        required: true
    },

   photos: [{ 
       data: Buffer, contentType: String 
   }],
   
    currency:{
        type:String,
    },
    address:{
        type:String,
        required: true
    },
    postalcode:{
        type:String,
    },

    rooms:[{
       type:{
            type:String,
        },
        number:{
            type:Number
        },
        description:{
            type:String
        },
        photo:{
            type:String
        },
        price:{
            type:String
        }

    }],

  
     

        cordinates:[{lat:Number, lng:Number}],
    

   
    // add in geo location
})

const Property = mongoose.model('property',PropertySchema);

module.exports= Property; 

// Property