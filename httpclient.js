var http = require('http');

var url = process.argv[2].toString();

http.get(url, function(res) {

        const statusCode = res.statusCode;
        const contentType = res.headers['content-type'];

        var rawData = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
                console.log(chunk);
        });
});
