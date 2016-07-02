var models = require('../models/appModel')
// '/notes'
// '/notes/ham'
module.exports = {
  'notes': {
    get: function(req, res){
      console.log('Controller  get notes');
      models.notes.get(function(data){
        res.json(data);
      });
    },

    post: function(req, res){
      console.log( "Controller posts notes");
      models.notes.post(function(data){
        res.send(data);
      }, req.body);
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

    },
    delete: function(req, res){
      console.log("line 45 : appController")
      models.notes.delete(function(data){
        console.log(data, "req.body", req.body)
        res.send(data);
      }, req.body);
    }

  }
  // 'links': {
  //   get: function(req, res){
  //     console.log('GET links ');
  //   },
  //   post: function(req, res){
  //     console.log("POST links")
  //   }
  // }

}
