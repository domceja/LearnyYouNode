
var http = require('http');
var url = process.argv[2].toString();

http.get(url, function(res) {

        const statusCode = res.statusCode;
        const contentType = res.headers['content-type'];

        var rawData = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
                rawData += chunk;
        });

        res.on('end', function() {
                console.log(rawData.length);
                console.log(rawData);
        });
});


    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
