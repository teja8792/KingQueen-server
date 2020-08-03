module.exports = function(io) {
  io.on("connection", conn => {
    console.log(conn);
  });
};
