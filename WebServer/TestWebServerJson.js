var http = require('http');

http.createServer(function(req,res){

    var person = {
        firstName : 'John',
        lastName : 'Doe'
    }

    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(person));

}).listen('9090','127.0.0.1')