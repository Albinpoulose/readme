const mongoose = require('mongoose');

const messageSchema  = mongoose.Schema({
    chatId :{ type: Schema.Types.ObjectId, ref: 'Chat', required: true },
    content: {type:String , required:true},
},
{
    timestamps:true 
})