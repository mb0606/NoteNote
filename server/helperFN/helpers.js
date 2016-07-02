var db = require('../db.js');
var Note = require("../models/note.js");
var _ = require('lodash');
var Q  = require('q')
global.myStorage = [];

// function(req, res){
//   var idOfNote = req.body;
//   var noteToUpdate = _.find(global.myStorage, {id:idOfNote})
//   noteToUpdate.message = "feafea"
// }
exports.updateData = function(callback, params){
  console.log("Global up date storage obj" , params)
}


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
    console.log("index of note deleted " , index)
    callback("your note has been deleted success")
}


exports.create =  function(newNote){
   Note.create(newNote, function(err, newlyCreated){
    if(err){
        console.log(err);
    }else {
        console.log("has been created:" , newlyCreated);
    }
  })
}




exports.fetchNotes = function(req, res){
    return new Q (Note.find({}, function(err, data){
        if(err){
          console.log(err);
        }else {
            console.log(data)
            res.send(data);
        }
    })
    )
}



exports.UpdateNote = function(req, res){
    var updatedNote = {
        title: req.body.title,
        date: req.body.date,
        img: req.body.img,
        content: req.body.content
    }
    console.log("inside helper update", req.params)
    Note.update({_id: req.body._id}, updatedNote ,function(err){
        if(err){
          console.log(err);
        } else {
         res.send("Successfully updated");
        }
    }
   );
}

exports.deleteNote = function(req, res){
    Note.remove({_id: req.params.id}, function(err){
        if(err){
            console.log(err);
        }else {
            console.log("has been DELETED:" );
            res.send("Success Deleted");
        }
    })

}




//              , function(err, notes) {
//        if(err){
//            console.log(err);
//        }else {
//
//        console.log("All notes" , notes);
//        res.json(noteMap);
//
//    }
//  });




































