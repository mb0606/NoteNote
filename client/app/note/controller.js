(function() {
  'use strict'

  angular
  .module('myApp.note', [])
    .controller("NoteController", NoteController);

    function NoteController($state, Note, $localStorage) {

      var vm = this;

      console.log("This is factory note: ", Note.storedNote);
      vm.note = $localStorage.note;

      vm.upDateNote = function(note){
        Note.updateNote(note).then(function(){

        })
      };
      vm.deleteNote = function(note){
        Note.deleteNote(note).then(function(){
          $state.go('welcome');
        })
      };

    }

})();
