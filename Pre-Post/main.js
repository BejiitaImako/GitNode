const debug = require('debug')('Bejiita');

console.log("Console message");
debug('Debug messsage');
let arr=[].fill(123,0,100000);
let arr2 = arr.map(iten=>iten*2);
debug ('Debug after loop');