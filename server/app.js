// import files and packages up here
var data = require('./data.json');

// create your express server below
var express = require('express');
var app = express();


// add your routes and middleware below
var morgan = require('morgan');
app.use(morgan('combined'));

app.get('/', function (req,res) {
    res.status(200);
    res.setHeader('content-type', 'text/html')
    res.end('hello world!');
    
});
app.get('/data', function(req,res){
    res.json(data);
});

// finally export the express application
module.exports = app;
