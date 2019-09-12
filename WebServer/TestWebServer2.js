var http = require('http');
var fs = require('fs');


http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/html/index2.html', 'utf8').pipe(res);
}).listen('9090', '127.0.0.1');