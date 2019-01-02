const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//authentication
//create ninja Schema & mmodel
const imageSchema = new Schema({
    path: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true,
        // type: mongoose.Schema.ObjectId, ref: 'property'
    }


})








const upload = mongoose.model('upload', imageSchema);

module.exports = upload; 
