var express = require('express');
const { response } = require('../app');
var router = express.Router();
const userHelper = require('../helpers/user-helper')

/* GET home page. */
router.post('/', function(req, res, next) {

  userHelper.doSignup(req.body).then((response)=>{
    // console.log(response);
    res.send(response);
  })
  

  
});

module.exports = router;
