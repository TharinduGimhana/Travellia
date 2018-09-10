const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    name:{
        type:String,
    },

    city:{
        city:String,
    },
    
    star:{
        type:String,
    },

    description:{
        type:String,
    },

   photos: [{ 
       data: Buffer, contentType: String 
   }],
   
    currency:{
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

    location:{
        address:{
            type:String,
        },
        cordinates:[{lat:Number, lng:Number}],
    }

   
    // add in geo location
})

const Property = mongoose.model('property',PropertySchema);

module.exports= Property; 

// Property