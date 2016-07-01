var helper = require('../helperFN/helpers.js')


module.exports = {
  'notes': {
    get: function(callback, params){
      console.log('Model get inside Notes ');
    },
    post: function(callback, params){
      console.log( "Model post inside Notes")
      helper.saveData(callback, params)
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
