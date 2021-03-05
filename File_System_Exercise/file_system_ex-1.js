var fs = require('fs');
fs.stat('a.txt',function(err,fd){
    if (err){throw err}
    console.log('this file is '+fd.size+ ' bytes long')
});