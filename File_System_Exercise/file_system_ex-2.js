var fs = require('fs');
fs.open('a.txt','r',function(err,fd){
    if (err){throw err}
    var readbuf = new Buffer.alloc(5);
    bufferoffset = 0;
    bufferlength = 5;
    filepos = 9;

    fs.read(fd,readbuf,bufferoffset,bufferlength,filepos,function(err,readBytes){
        if(err){throw err;}
        console.log(readbuf.toString())

    });
});