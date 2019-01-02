const express = require('express');
const router = express.Router();
const propertyControll= require("../controllers/property-management-controller");


router.get('/property',propertyControll.addProperties);

router.post('/property',propertyControll.addProperties);

router.put('/property/:id', propertyControll.updateProperties);

router.delete('/property/:id',propertyControll.deleteProperties );



module.exports = router;