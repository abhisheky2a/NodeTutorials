var http =  require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/')
    {
        fs.createReadStream(__dirname + '/html/index2.html').pipe(res);
    }
    else if (req.url === '/person')
    {
        var person = {
            firstName : 'John',
            lastName : 'Doe'
        }
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(person));
    }
    res.writeHead(404);
    res.end();
}).listen('9090','127.0.0.1');