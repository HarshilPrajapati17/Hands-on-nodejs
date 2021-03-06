
var fs = require('fs');


require('http').createServer(function(req, res) {
var fileName = '/home/harshil/JS_Demo/Hands-on-nodejs/HTTP_Exercise/demo.txt';
console.log("writing " + fileName);
var writeStream = fs.createWriteStream(fileName);
req.pipe(writeStream);
req.on('end', function() {
res.writeHead(200);
res.end();
});
}).listen(3000);