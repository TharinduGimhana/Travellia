const express = require('express');
const router = express.Router();
const authControll= require("../controllers/authentication-controller");



router.post('/reg',authControll.authenticateUsers);

router.post('/signin',authControll.signinUsers);
  


module.exports = router;