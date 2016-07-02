var helper = require('../helperFN/helpers.js')


module.exports = {
  'notes': {
    get: function(callback){
      console.log('Model get inside Notes ');
      var data = helper.retrieveData();
      callback(data);
    },
    post: function(callback, params){
      console.log( "Model post inside Notes")
      helper.saveData(callback, params)
    },
    delete: function(callback, params){
        console.log( "Model post DELETE")
        helper.deleteData(callback, params)
      }

  }
  // 'links': {
  //   get: function(callback, params){
  //     console.log('GET links ');
  //   },
  //   post: function(callback, params){
  //     console.log("POST links")
  //   }
  // }

}
