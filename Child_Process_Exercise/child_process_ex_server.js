
var spawn = require('child_process').spawn;

require('fs').open(__dirname + '/example.txt', 'a', function(err, fileDesc)
{

var server = require('net').createServer(function(socket) {

socket.write('Here you go', fileDesc);
socket.end();
server.close();
});

server.listen('/home/harshil/exercise.sock', function(err) {

var child = spawn(process.argv[0], [__dirname + '/child_process_ex_client.js']);
child.on('exit', function() {
console.log('child exited');
});

});
});