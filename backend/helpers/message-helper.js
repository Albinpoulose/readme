const Message = require("../models/messgeModel");


module.exports = {
    storeMessage : (data)=>{
        //console.log(data);
        const {message,chatId} = data;
      
        return new Promise(async(resolve,reject)=>{
            const newMessage = new Message({ chatId:chatId, content:message });
        const insertedMessage = await newMessage.save();
        //console.log("Inserted message is"+insertedMessage);
         resolve();
        })
    },
}