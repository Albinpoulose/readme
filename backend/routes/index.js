var express = require("express");
const { response } = require("../app");
var router = express.Router();
const userHelper = require("../helpers/user-helper");
const session = require("express-session");

/* GET home page. */
router.post("/signup", function (req, res, next) {
  userHelper.doSignup(req.body).then((response) => {
    //console.log(response);
    req.session.loggedIn = true;
    req.session.user = response;
    res.send(req.session);
  });
});

router.post("/login",(req,res)=>{
  //console.log(req.body);
  userHelper.doLogin(req.body).then((response)=>{
    // console.log(response);
    req.session.loggedIn = true;
    req.session.user = response;
    res.json(req.session);

  })
});

router.get('/logout',(req,res)=>{
 // console.log("Logout");
 req.session.destroy();
 res.json({loggedOut:true})
})

module.exports = router;
