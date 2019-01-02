const express = require('express');
const router = express.Router();
const destControll= require("../controllers/destination-management-controller");



router.get('/dest',destControll.viewDestinations); 

router.post('/dest',destControll.addDestinations);

router.put('/dest/:id',destControll.updateDestinations);

router.delete('/dest/:id',destControll.deleteDestinations);

module.exports = router;