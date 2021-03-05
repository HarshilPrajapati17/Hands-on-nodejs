
var path = '/home/harshil/JS_Demo/Hands-on-nodejs/File_System_Exercise/file_system_ex-1.js'

var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  fs.readFile(path + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(4000);