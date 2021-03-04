var buf = new Buffer(100);
var i
for(i=0;i<100;i++)
{
    buf[i]=i;
}
var slice = buf.slice(20,40)
console.log(slice);