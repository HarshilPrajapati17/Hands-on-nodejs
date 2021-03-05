var fs = require('fs');
fs.open('a.txt','r',function(err,fd){
    if (err){throw err}
    var readbuf = new Buffer.alloc(5);
    var readbuf2 = new Buffer.alloc(5);
    // bufferoffset = 0;
    // bufferlength = 5;
    // filepos = 4;

    fs.read(fd,readbuf,0,5,4,function(err,readBytes){
        if(err){throw err;}
        readbuf.slice(0,readBytes);
        console.log(readbuf.toString());
    });

    fs.read(fd,readbuf2,0,5,9,function(err,readBytes){
        if(err){throw err;}
        readbuf2.slice(5,readBytes);
        console.log(readbuf2.toString());

    });
});