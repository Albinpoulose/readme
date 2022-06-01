const Chat = require("../models/chatModel");
//const User = require("../models/userModel");


module.exports = {
  createChat: (chatDetails) => {
    //console.log(chatDetails);
    const { senderId, reciverId } = chatDetails;
    return new Promise(async (resolve, reject) => {
      const chatExist = await Chat.findOne({
        senderId: senderId,
        reciverId: reciverId,
      }).exec(); 
     // console.log(chatExist);

      if (chatExist == null) {
        const chat = new Chat({ senderId, reciverId });
        const insertedChat = await chat.save();
      //  console.log(insertedChat);
      resolve(insertedChat);
        } else {
        console.log("Chat already exist");
      }
    });
  },
  getChatList : (user)=>{
    // console.log(`user : ${user._id}`);
    return new Promise (async(resolve,reject)=>{
      const chatList= await Chat.find({$or: [{senderId:user._id},{reciverId:user._id}]}).populate('senderId').populate('reciverId').exec();
        // console.log(chatList);
        resolve(chatList)

    })
  }
};
