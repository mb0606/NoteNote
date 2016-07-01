global.myStorage = [];

exports.saveData = function(callback, params){
  global.myStorage.push(params);
  console.log("Global storage obj" , global.myStorage)
  callback('your note has been is saved');
}
exports.retrieveData = function(callback){
  callback(myStorage);
}
