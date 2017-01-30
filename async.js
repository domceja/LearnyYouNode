var http = require('http');
//const BufferList = require('bl');
var args = [];

 process.argv.forEach(function(ele, index){
    if(index > 1){
        args.push(ele);
    }
});

console.log(args);


var http = require('http');
var bl = require('bl');
var count = 2;

function syncApiCalls(count) {
                http.get(process.argv[count], function(res) {
                    res.pipe(bl(function(err, data){
                        if(err){
                            console.log(err);
                        } else {
                            console.log(data.toString());
                            syncApiCalls(count +1)
                        }
                    }));
                });
}


syncApiCalls(count);

