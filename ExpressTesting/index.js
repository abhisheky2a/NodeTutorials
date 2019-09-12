var express = require('express');
var app = express();
var bodyParser =  require('body-parser');

var port = process.env.PORT || 3000;
app.set('view engine', 'ejs')
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
    console.log(req.url);
    next();
});

app.get('/', function(req, res){
    res.send('<html><head><link href=/assets/style.css type=text/css rel=stylesheet/></head><body><h1><b>Hello I am using Express</b></h1></body></html>');
});

app.get('/ejs', function(req, res){
    res.render('index');
});

app.get('/json', function(req, res){
    res.json({name : 'John', surname : 'Doe'});
});


app.get('/person/:id', function(req, res){
    res.send('<html><body><h1><b>Person:' + req.params.id + '</h1></body></html>');
});

app.get('/personejs/:id', function(req, res){
    res.render('person', { ID : req.params.id, QueryString : req.query.qstr});
});

var urlEncodedParser = bodyParser.urlencoded({ extended : false });
var jsonParser = bodyParser.json();

app.post('/person', urlEncodedParser, function(req, res){
    res.send('Thank You');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.post('/personjson', jsonParser, function(req, res){
    res.send('Thank You For the Json Data');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});
app.listen(port);