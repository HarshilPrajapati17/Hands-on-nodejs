var async = require('async');
var request = require('request');

var collection = [1, 2, 3, 4];

function iterator(element, next) {
    request({ uri: 'http://localhost:4001/',
    body: element.toString() },
    function(err, res, body) {
    next(err, parseInt(body, 10));
    });
}

function callback(err, result) {
    console.log('finished.');
    for (var i in collection) {
    console.log('the square of %d is %d', collection[i], result[i]);
    }
}
async.map(collection, iterator, callback);