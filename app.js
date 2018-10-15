const express = require("express");
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const authenticationService = require('./services/authentication-service');
const bookingService = require('./services/booking-service');
const propertyService = require('./services/properties-service');
const adminService = require('./services/admin-service');
const destService = require('./services/dest-service');
var passport = require('./config/passport');



//set up express app
const app = express();


mongoose.connect('mongodb://gimhana329:nov02329@ds245532.mlab.com:45532/travellia', function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
})

var cors =require('cors');
app.use(
    cors(
        {
            origin:'http://localhost:4200'
        }
    )
);

 app.use(bodyparser.json());
//  app.use(passport.initialize());
 app.use("/authenticate",authenticationService);
 app.use("/properties",propertyService);
 app.use("/admin",adminService);
 app.use("/dest",destService);
// app.use('/', routesApi);
 




//listen for requests
app.listen(process.env.port || 4000,function(){
    console.log('app is listning on port on port 4000');
})

