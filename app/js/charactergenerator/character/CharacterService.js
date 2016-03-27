(function() {
  'use strict';
  
  angular.module('charactergenerator')
  .service('CharacterService', CharacterService);
  
  CharacterService.$inject = ['$http'];
  
  function CharacterService($http) {
    var APIURL = 'http://localhost:28469/api/character';
   
    return {
      saveCharacter: saveCharacter,
      getCharacter: getCharacter
    };
   
    function saveCharacter(character) {
      return $http.post('http://localhost:28469/api/character', character)
        .then(addCharacterComplete)
        .catch(addCharacterFailed);
      
        function addCharacterComplete(response) {
            return response.data;
        }

        function addCharacterFailed(error) {
            console.log('XHR Failed for addCharacter.' + error.data);
        }      
    }  
    
    function getCharacter() {
        return $http.get('http://localhost:28469/api/character')
            .then(getCharacterComplete)
            .catch(getCharacterFailed);

        function getCharacterComplete(response) {
            return response.data;
        }

        function getCharacterFailed(error) {
            console.log('XHR Failed for getCharacters.' + error.data);
        }
    }

  }
  
}());