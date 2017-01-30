var net = require('net');
var time = require('strftime');
var port = process.argv[2];

var server = net.createServer(function(socket){
    socket.write(console.log(strftime('%F %T', new Date()) + '\n'));
    socket.end();
})

server.listen(port);