var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var index = require('./routes/index');

//connect to DB
mongoose.connect('mongodb://zain:zain123@ds133162.mlab.com:33162/flashmatics', ()=>{console.log("connected to DB")})

//app setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app universal middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//set up app middleware routes
app.use('/', index);

var server = app.listen(port, () => {
  console.log("Listening on port " + port)
})
