var dgram = require('dgram');

var client = dgram.createSocket('udp4');

var message = new Buffer.from('this is a message');
client.bind(3001)
client.send(message, 0, message.length, 3000, '127.0.0.1');
client.on('message',function(message,rinfo){
    console.log('response'+ message);
    client.close();

});


var server = dgram.createSocket('udp4');
server.on('message', function(message, rinfo) {
    console.log('server got message: ' + message + ' from ' + rinfo.address +':' + rinfo.port);
});

server.on('listening', function() {
    var address = server.address();
    console.log('server listening on ' + address.address + ':' + address.port);
});

server.bind(3000);