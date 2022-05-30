const mongoose = require ('mongoose');

const chatSchema = mongoose.Schema({
    senderId : {type:String, required:true},
    reciverId:{trpe:String, required:true},
    //Lastest message
})

