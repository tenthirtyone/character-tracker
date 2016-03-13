(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('CharacterInfoService', CharacterInfoService);
  
  function CharacterInfoService() {  
    var characterName = '';
    
    return {
      getCharacterName: getCharacterName,
      setCharacterName: setCharacterName
    }
    
    function getCharacterName() {
      return characterName;
    }
    
    function setCharacterName(newName) {
      characterName = newName;
    }
    
  }
}());