var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var routes = require('./routes/routes.js');
var mongodb = require('mongodb')
var mongoose    = require('mongoose');

app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name');
//   next();
// });
//var dbURL = 'mongodb://admin:password@ds011755.mlab.com:11755/notenote'
//mongoose.connect(dbURL)
//var dbm = mongoose.connection;
//dbm.on('error', console.error.bind(console, 'connection error'));
//dbm.once('open', function(){
//    console.log('connection to database')
//})







app.set('port', 1337);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
console.log("client calling /api goes into routes")
app.use('/api', routes);




app.listen(app.get('port'), function() {
    console.log('Express Server listening on port ', app.get('port'));
})
