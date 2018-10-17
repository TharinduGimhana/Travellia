const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    name:{
        type:String,
        // required: true
    },

    city:{
        type:String,
        // required: true
    },
    
    star:{
        type:String,
        // required: true
    },

    contactno:{
        type:String,
        // required: true
    },

    contactname:{
        type:String,
        // required: true
    },

    description:{
        type:String,
        // required: true
    },

   photos: [{ 
       data: Buffer, contentType: String 
   }],
   
    currency:{
        type:String,
    },
    address:{
        type:String,
        // required: true
    },
    postalcode:{
        type:String,
    },

    roomtype1:{
        type:String,
    },
    price1:{
        type:String,
    },
    quntity1:{
        type:String,
    },
    sleeps1:{
        type:String,
    },

    roomtype2:{
        type:String,
    },
    price2:{
        type:String,
    },
    quntity2:{
        type:String,
    },
    sleeps2:{
        type:String,
    },

    roomtyp3:{
        type:String,
    },
    price3:{
        type:String,
    },
    quntity3:{
        type:String,
    },
    sleeps3:{
        type:String,
    },

    roomtyp4:{
        type:String,
    },
    price4:{
        type:String,
    },
    quntity4:{
        type:String,
    },
    sleeps4:{
        type:String,
    },

   

  
     

        cordinates:[{lat:Number, lng:Number}],
    

   
    // add in geo location
})

const Property = mongoose.model('property',PropertySchema);

module.exports= Property; 

// Property