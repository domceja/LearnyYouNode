var http = require('http');
var url = require('url');
var port = process.argv[2];


var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query.iso);
    var result;

    if(/^\/api\/parsetime/.test(req.url)){
        result = parseJsonTime(time);
    } else if(/^\/api\/unixtime/.test(req.url)){
        result = unixTime(time);
    }

    if(result){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(result);
    } else{
        res.writeHead(404)
        res.end()

    }
})
server.listen(port);


function parseJsonTime(time){
    return JSON.stringify({
        'hour' : time.getHours(),
        'minute': time.getMinutes(),
        'second': time.getSeconds()
    });
}

function unixTime(time){
    return JSON.stringify({
        'unixtime' : time.getTime()
    });
}
