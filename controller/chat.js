module.exports = io => {
  const users = new Set();
  io.on("connection", sck => {
    sck.on("users:connect", userConnect => {
      const userNew = {
        username: userConnect.username,
        id: sck.id
      };
      users.add(userNew);

      sck.emit("users:list", [...users]);

      sck.broadcast.emit("users:add", userNew);

      sck.on("message:add", msg => {
        //sck.broadcast.to(msg.roomId).emit("message:add", userNew.id, msg.text);
        //io.to(data.roomId).emit('message:add', data, socketId);
        //io.to(msg.roomId).emit("message:add", msg, sck.id);
        //sck.to(msg.roomId).emit("message:add", msg, userConnect.id);
        //io.to(msg.roomId).emit("message:add", msg, userConnect.id);
        //io.to(msg.roomId).emit("message:add", msg, sck.id);
        sck.broadcast.to(msg.roomId).emit("message:add", msg, sck.id);
        sck.json.emit("message:add", {
          senderId: msg.senderId,
          text: msg.text
        });
        /* socket.on("message:add", data => {
          if (io.sockets.connected[data.roomId]) {
            io.to(data.roomId).emit("message:add", data, id);
          }
        }); */
      });

      sck.on("disconnect", userDisconnect => {
        sck.broadcast.emit("users:leave", userNew.id);

        users.delete(userNew);
      });
    });
  });
};

const obj = {
  id1: {
    username: "username1",
    id: "id1"
  },
  id2: {
    username: "username2",
    id: "id2"
  }
};
console.log(obj);
