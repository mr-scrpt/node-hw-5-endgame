module.exports = io => {
  const users = new Set();
  io.on("connection", sck => {
    sck.on("users:connect", userConnect => {
      const userNew = {
        username: userConnect.username,
        id: sck.id
      };
      users.add(userNew);
      console.log([...users]);

      sck.emit("users:list", [...users]);

      sck.broadcast.emit("users:add", userNew);

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
