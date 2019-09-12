var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet/greetings.json',
{
    encoding : 'utf8',
    highWaterMark : 1024
});

var writtable = fs.createWriteStream(__dirname + '/greetingsCopy.json')

readable.on('data', function(chunk){
    console.log(chunk);
    writtable.write(chunk);
});