var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', function(clientSocket) {
     //     console.log('this is the client socket', clientSocket);
     console.log('a user connected');

     clientSocket.on('draw', function(twoPoints) {
          clientSocket.broadcast.emit('draw', twoPoints);
          //console.log('hey');
     });

     clientSocket.on("reset", function(resetCanvas){
          io.emit("reset", resetCanvas);
     });
});




http.listen(8000, function() {
     console.log('Listening on 8000');

});
