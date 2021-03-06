
require('http').createServer(function(req, res) {
  
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var interval = setInterval(function() {

    for(var i = 0 ; i <100 ;i++){
        res.write((Date.now())+ "\n");
    }

    if (i == 100) {
    clearInterval(interval);
    res.end();
    }
    }, 1000);
    }).listen(3000);