var express = require('express');
var app = express();
var http = require('http').Server(app);
var pg = require('pg');
var bodyParser= require('body-parser');


var path = require('path');
var routes = require('./controllers/routes.js');

var models = require('./models/index.js');
models.sequelize.sync();

var html_creator = require('./helpers/html_creator.js')

app.use(express.static('./client'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.use('/', routes);
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client/html/index.html'));
});


http.listen(3000, function(){
  console.log('listening on Port 3000');
});
