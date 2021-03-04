var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Ticker = function (){
    setTimeout(() => {
        this.emit("Tick");
        
    }, 1000);
};
