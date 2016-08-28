var http = require('http');
var fs = require('fs');
var path = require('path');
var wss = require('./websockets-server');

var server = http.createServer(function (req, res) {
      console.log('Responding to a Request.');
       var url = req.url;
       var fileName = 'index.html';
       
       if (url.length > 1) {
        fileName = url.substring(1);
       }
       console.log(fileName);

       var filePath = path.resolve(__dirname, 'app', fileName);
       fs.readFile(filePath, function (err, data) {
        res.end(data);
      });
});
server.listen(3000);
