var models = require('../models/appModel')
var helper = require('../helperFN/helpers.js')

// '/notes'
// '/notes/ham'






module.exports = {
  'notes': {
    get: function(req, res){
          console.log('Controller  get notes');
//          models.notes.get(function(data){
//            res.json(data);
//        });
         helper.fetchNotes(req, res)

//             res.json()
//         })

    },

    post: function(req, res){
      console.log( "Controller posts notes");
     //models.save
     var newNote = {title: req.body.title,
                    img: req.body.img,
                    date: req.body.date,
                    content: req.body.content
                   }
//      models.notes.post(function(data){
//        res.send(data);
//      }, req.body);
    helper.create(newNote);
    },
    put: function(req, res){

    },
    delete: function(req, res){

    }
  },
  'notes/:id': {
    get: function(req, res){
      // req.body.id
      // console.log('Controller  get notes');
      // models.notes.get(function(data){
      //   res.json(data);
      // });
    },
    post: function(req, res){
      // req.body.id
      // console.log('Controller  get notes');
      // models.notes.get(function(data){
      //   res.json(data);
      // });
    },
    put: function(req, res){
//      models.notes.put(function(data){
//        res.send(data);
//      }, req.body);
    console.log("PUTS req.body", req.body)
    console.log("PUTS req.params", req.params)
        helper.UpdateNote(req, res)

    },
    delete: function(req, res){
      console.log("line 45 : appController")
//      models.notes.delete(function(data){
//        console.log(data, "req.body", req.body)
//        res.send(data);
//      }, req.body);
//    }
    console.log("req.body", req.body)
    console.log("req.params", req.params)

    helper.deleteNote(req ,res)
  }

  }
}




















