var http = require('http'),
fs= require('fs');


require('http').createServer(function(req, res) {
console.log("writing " + process.argv[4]);
var writeStream = fs.createWriteStream(process.argv[4]);
req.pipe(writeStream);
req.on('end', function() {
res.writeHead(200);
res.end();
});
}).listen(3000);

if (process.argv.length < 5) {
console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + '');
return;
}

var options = {
host: process.argv[2],
port: parseInt(process.argv[3], 10),
path: '/',
method: 'PUT'
};

var req = http.request(options);

console.log('piping ' + process.argv[4]);
fs.createReadStream(process.argv[4]).pipe(req);