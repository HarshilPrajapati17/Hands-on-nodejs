const { Buffer } = require('buffer');
var fs = require('fs');
fs.open('a.txt','a',function(err,fd){
    if (err){throw err}
    var writebuf = new Buffer.from('abc');
    bufferoffset = 0;
    bufferlength = writebuf.bufferlength;
    filepos = 0;

    fs.write(fd,writebuf,bufferoffset,bufferlength,filepos,function(err,writeByte){
        if(err){throw err;}
        writebuf.toString();
        console.log("Written "+writeByte+" Bytes")

    });
});