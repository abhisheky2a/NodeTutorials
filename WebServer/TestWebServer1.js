var http = require('http');
var fs = require('fs');


http.createServer(function(req, res)
{
    var htmlData = fs.readFileSync(__dirname + '/html/index.html', 'utf8');
    res.writeHead(200, {'Content-Type' : 'text/html'})
    var message = 'My Node Test Web Server';
    htmlData = htmlData.replace('{Message}', message);
    res.end(htmlData);
}).listen('9090', '127.0.0.1');