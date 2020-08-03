var http = require("http");
const socket = require("socket.io");
//create a server object:
const server = http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

const io = socket({
  path: "/game"
});
io.attach(server);

require("./kqSocketio.js")(io);
