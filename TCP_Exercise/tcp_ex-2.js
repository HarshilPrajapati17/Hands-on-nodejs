var net = require('net');

if (process.argv.length < 3) {
    console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + '');
    return;
}
var host = process.argv[0],
port = process.argv[1];

var conn = net.createConnection(host, port);

process.on('uncaughtException', function (err) {
    console.log(err);
})

process.stdin.resume();
process.stdin.pipe(conn);
conn.pipe(process.stdout, {end: false});