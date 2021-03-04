var buf = new Buffer(100);
var i
for(i=0;i<100;i++)
{
    buf[i]=i;
}
var buf2 = new Buffer(20);
buf.copy(buf2,0,40,60);
console.log(buf2);