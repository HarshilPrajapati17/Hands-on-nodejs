var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Ticker = function (){
    setInterval(() => {
        this.emit("Tick");
        
    }, 1000);
};
