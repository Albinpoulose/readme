var socket_io = require('socket.io');
const messageHelper = require('../../helpers/message-helper');
var io = socket_io({ 
    cors:{
        origin: "http://localhost:3000",
        methods:["GET","POST"]
    }
});
var socketApi = {};

socketApi.io = io;

io.on('connection', function(socket){
    console.log(`user connected ${socket.id}`);

    // socket.on("message",(msg)=>{
    //     console.log(msg);
    //     socket.broadcast.emit("recived",msg);
    // });
    socket.on("setup",(roomId)=>{
        console.log("user roomdid"+roomId);
        socket.join(roomId);
    })

    socket.on("send message", async(data)=>{
        console.log(data);
       await messageHelper.storeMessage(data)
        io.to(data.chatId).emit("message saved")
    })
});
 


module.exports = socketApi;