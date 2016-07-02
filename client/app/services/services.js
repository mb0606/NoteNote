(function() {
  'use strict'

  angular
  .module('myApp.services', [])
    .factory("Welcome", Welcome)
    .factory("Note", Note);

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
          console.log("line 40: Services ", err)
        })
      }

      return service;
    }

    function Note($http, $localStorage) {
      var service = {
        saveNote: saveNote,
        storedNote: {},
        upDateNote: upDateNote,
        deleteNote:deleteNote
      };

        function saveNote(note){
          $localStorage.note = note;
        }

        function deleteNote(note){
          console.log("line 59 : services DELETE ", note, "noteID: :", note._id);
          return $http ({
            method:'DELETE',
            url:'/api/notes/'+ note._id,
            data: note._id
          })
          .then(function(res){
            console.log(res.data);
            return  res.data;
          })
          .catch(function(err){
            console.error("DeleteNote DELETE", err)
          })
        }

        function upDateNote(note){
          console.log("line 78 : services UPDATE ", note);
          return $http ({
            method:'PUT',
            url:'/api/notes/' + note._id,
            data: note
          })
          .then(function(res){
            console.log(res.data);
            console.log("Services PUT ");


            return res.data;;
          })
          .catch(function(err){
            console.error("SendUserNote cannot PUT ", err)
          })
        }


      return service;
    }




})();
