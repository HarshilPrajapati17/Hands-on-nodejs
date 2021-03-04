var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Ticker = function (){
    setInterval(() => {
        this.emit("Tick");
        
    }, 1000);
};
util.inherits(Ticker, EventEmitter);


var ticker = new Ticker();
ticker.on('Tick',function(){

    console.log("TICK");
});

