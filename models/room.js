const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({


  
       type:{
            type:String,
            required: true
        },
        number:{
            type:Number,
            required: true
        },
        description:{
            type:String,
            required: true
        },
        photo:{
            type:String,
            required: true
        },
        price:{
            type:String,
            required: true
        }

    });
     

 

const Room = mongoose.model('room',roomSchema);

module.exports= Room; 

// Property