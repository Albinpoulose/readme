var express = require("express");
const chatHelper = require("../helpers/chat-helper");
const userHelper = require("../helpers/user-helper");
var router = express.Router();
const session = require("express-session");
const messageHelper = require("../helpers/message-helper");
const { response } = require("express");



/* GET users listing. */
router.post("/search", function (req, res, next) {
  //console.log(req.body);
  userHelper.searchUser(req.body).then((response) => {
    res.json(response);
  });
});

router.post("/userSelect",(req,res)=>{
  //console.log(req.body);
  chatHelper.createChat(req.body).then((response)=>{
      // console.log("chat inserted from "+response);
      const user = {
        _id : response.senderId
      }
//console.log(user);
      chatHelper.getChatList(user).then((response)=>{
         //console.log(response);
         res.json(response);
      })
  })
});

router.post("/chatList",(req,res)=>{
 // console.log(req.body);
  chatHelper.getChatList(req.body).then((response)=>{
   res.json(response);
  })
})

router.post("/getChat",(req,res)=>{
 // console.log(req.body);
  messageHelper.getAllMessages(req.body).then((response)=>{
   // console.log(response);
    res.json(response)
  })
})

module.exports = router; 
