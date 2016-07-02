var _ = require('lodash');
global.myStorage = [];

// function(req, res){
//   var idOfNote = req.body;
//   var noteToUpdate = _.find(global.myStorage, {id:idOfNote})
//   noteToUpdate.message = "feafea"
// }

exports.saveData = function(callback, params){
  global.myStorage.push(params);
  console.log("Global storage obj" , global.myStorage)
  callback('your note has been is saved');
}
exports.retrieveData = function(callback){
  return global.myStorage;
}

exports.deleteData = function(callback, params){
  console.log(params)
    var notes = global.myStorage;
    for(var i = 0 ; i < notes.length ; i++){
      if(notes[i].id === params.id){
        var index = i;
      }
    }
    global.myStorage.splice(index, 1)
    console.log("all my notes in helpers delete " , global.myStorage)
    callback("your note has been deleted success")
}
