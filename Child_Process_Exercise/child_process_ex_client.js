var fs = require('fs');

var conn = require('net').createConnection('/home/harshil/example.sock');
;
conn.on('fd', function(fileDesc) {
fs.write(fileDesc, "this is the child!\n", function() {
conn.end();
});
});