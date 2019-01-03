const mongoose = require('mongoose');
var Schema = mongoose.Schema;




    // ObjectId = Schema.ObjectId;

var PropertySchema = new Schema({

    // propertyId  : ObjectId,
    name: {
        type: String,
        // type: mongoose.Schema.ObjectId, ref: 'User'
        // required: true
    },
    
    // pr_id:12

    city: {
        type: String,
        // required: true
    },

    // star: {
    //     type: String,
    //     // required: true
    // },

    // contactno: {
    //     type: String,
    //     // required: true
    // },

    // contactname: {
    //     type: String,
    //     // required: true
    // },

    // description: {
    //     type: String,
    //     // required: true
    // },

   

    // currency: {
    //     type: String,
    // },
    // address: {
    //     type: String,
    //     // required: true
    // },
    // postalcode: {
    //     type: String,
    // },

    // roomtype1: {
    //     type: String,
    // },
    // price1: {
    //     type: String,
    // },
    // quntity1: {
    //     type: String,
    // },
    // sleeps1: {
    //     type: String,
    // },

    // roomtype2: {
    //     type: String,
    // },
    // price2: {
    //     type: String,
    // },
    // quntity2: {
    //     type: String,
    // },
    // sleeps2: {
    //     type: String,
    // },

    // roomtyp3: {
    //     type: String,
    // },
    // price3: {
    //     type: String,
    // },
    // quntity3: {
    //     type: String,
    // },
    // sleeps3: {
    //     type: String,
    // },

    // roomtyp4: {
    //     type: String,
    // },
    // price4: {
    //     type: String,
    // },
    // quntity4: {
    //     type: String,
    // },
    // sleeps4: {
    //     type: String,
    // },
    // hotelimage:[imageSchema]

    // rooms: [
    //     {
    //         roomtype: String,
    //         price: String,
    //         quentity: String,
    //         slepps: String
    //     }
    // ]







    // add in geo location
})

const Property = mongoose.model('property', PropertySchema);

module.exports.addNewFile = (newFile, callback) => {
    newFile.save(callback);
}

module.exports = Property;

// Property