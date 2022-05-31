const mongoose = require("mongoose");
const Schema = require("mongoose").Schema

const chatSchema = mongoose.Schema({
  senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  reciverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  //Lastest message
});

const Chat = new mongoose.model("Chat", chatSchema);

module.exports = Chat;
