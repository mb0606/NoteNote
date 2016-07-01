(function() {
  'use strict'

  angular
  .module('myApp.services', [])
    .factory("Welcome", Welcome);

    function Welcome($http) {
      var service = {
        sendUserNote:sendUserNote,
        getUserNote:getUserNote,
      };

      function sendUserNote(note){
        console.log("line 15 : services sendUserNote")
        return $http ({
          method:'POST',
          url:'/api/notes',
          data: note
        })
        .then(function(res){
          console.log(res.data);
          return res.data;
        })
        .catch(function(err){
          console.error("SendUserNote cannot POST ", err)
        })
      }
      function getUserNote(){
        console.log("line 30 : services getUserNote")

        return $http ({
          method:'GET',
          url:'/api/notes',
        })
        .then(function(res){
          return res.data
        })
        .catch(function(err){

        })
      }

      return service;
    }




})();
