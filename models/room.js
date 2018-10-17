const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({



           roomtype:{
                type:String,
                required: true,
                // unique: true,

            },
            number:{
                type:Number,
                required: true
            },
            description:{
                type:String,
                required: true
            },
            price:{
                type:String,
                required: true
            }

        // roomtype: String,
        // number: String,
        // description:String,
        // price: String
   
});





const Room = mongoose.model('room', roomSchema);

module.exports = Room;

// Property