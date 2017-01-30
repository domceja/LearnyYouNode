const BufferList = require('bl');

var bl = new BufferList();

bl.append(new Buffer('abcd'));
bl.append(new Buffer('efg'));
bl.append('hi');

console.log(bl.slice(0,4).toString('ascii'));
