(function() {
  'use strict'

  angular
  .module('myApp.welcome', [])
    .controller("WelcomeController", WelcomeController);

    function WelcomeController(Welcome) {

      var vm = this;
      vm.notes = {};
      vm.note = {};
      vm.id = 0;

      vm.sendUserNote = function(){
        vm.note.id = vm.id;
        vm.id++;
        console.log("line 15: welcome", vm.note)
        Welcome.sendUserNote(vm.note)
        .then(function(note){
          vm.note = {}
        });

      }
      vm.getLinks = function () {
        Welcome.getUserNote().then(function (notes) {
          console.log('this is data', notes);
          vm.data = notes;
        })
      }

    }

})();
