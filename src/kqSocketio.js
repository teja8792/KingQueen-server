const game = require("./KingQueen.js");

module.exports = function(io) {
  io.on("connection", conn => {
    console.log(conn.id);
    conn.emit("join player", { name: "hello" });
    conn.on("game create", data => {
      let g = game.createGame(data.playerId);
      conn.emit("game created", g);
    });
  });
};
