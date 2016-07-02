var mongoose    = require('mongoose');

var dbURL = 'mongodb://admin:password@ds011755.mlab.com:11755/notenote'
mongoose.connect(dbURL)
var dbm = mongoose.connection;
dbm.on('error', console.error.bind(console, 'connection error'));
dbm.once('open', function(){
    console.log('connection to database')
})


