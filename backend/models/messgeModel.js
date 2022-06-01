const mongoose = require("mongoose");
const Schema = require('mongoose').Schema

const messageSchema = mongoose.Schema(
  {
    chatId: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
