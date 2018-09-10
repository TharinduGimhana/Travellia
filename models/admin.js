const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//authentication
//create ninja Schema & mmodel
const adminSchema = new Schema({
     userName:{
         type:String,
         required:[true,'Name field is required']
     },
     email:{
        type:String,
        
     },
     password:{
         type:String
        
     },
    
     // add in geo location
})

const admin = mongoose.model('admin',adminSchema);

module.exports= admin; 