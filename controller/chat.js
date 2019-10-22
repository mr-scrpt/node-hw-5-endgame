module.exports = io => {
  const users = new Set();
  io.on("connection", sck => {
    sck.on("users:connect", userConnect => {
      const userNew = {
        username: userConnect.username,
        id: sck.id
      };
      users.add({
        [sck.id]: userNew
      });
      console.log(users);

      sck.emit("users:list", [...users]);

      /* sck.emit("users:add", () => {
        sck.broadcast.send(userNew);
      });

      sck.on("disconnect", userDisconnect => {
        sck.emit("users:leave", () => {
          users.delete(userNew);
          sck.broadcast.send(userNew.id);
        });
      }); */
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
