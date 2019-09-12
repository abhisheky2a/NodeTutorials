var fileSystem = require('fs');

var fileData = fileSystem.readFileSync(__dirname + "/greet/greetings.json", 'utf8');

console.log(fileData);

var fileData = fileSystem.readFile(__dirname + "/greet/greetings.json", 'utf8',  function(err, data){
    console.log(data);
});

console.log('File Reading Complete');