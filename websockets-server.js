var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({ 
   port: port
});
var messages = [];
console.log('websockets server started');

ws.on('connection', function(socket) {
  console.log('client connection established');

  socket.on('message', function (data) {
   console.log( data);
   socket.send(data);  
  })  
});

