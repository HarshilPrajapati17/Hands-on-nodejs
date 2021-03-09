var fs =require('fs');
var options = {
key: fs.readFileSync(__dirname + '/tls_ex-2/server-key.pem'),
cert: fs.readFileSync(__dirname + '/tls_ex-2/server-cert.pem'),
ca: fs.readFileSync(__dirname + '/private/cakey.pem'),
requestCert: true,
rejectUnauthorized: true
};
require('tls').createServer(options, function(socket) {
socket.on('data', function(data) {
console.log(data.toString());
});
socket.pipe(socket);
}).listen(4001);