var models = require('../models/appModel')

module.exports = {
  'notes': {
    get: function(req, res){
      console.log('Controller  get notes');
      model.notes.get(function(data){
        data;
      });
    },
    post: function(req, res){
      console.log( "Controller posts notes");
      models.notes.post(function(data){
        res.send(data);
      }, req.body)
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
