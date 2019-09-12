var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet/greetings.json',
{
    encoding : 'utf8',
    highWaterMark : 1024
});

var writtable = fs.createWriteStream(__dirname + '/greetingsCopy.json');

var compressed = fs.createWriteStream(__dirname + '/greetingsCopy.json.gz');

var gzip = zlib.createGzip();

readable.pipe(writtable);

readable.pipe(gzip).pipe(compressed);