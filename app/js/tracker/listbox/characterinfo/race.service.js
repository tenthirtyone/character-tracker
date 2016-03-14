(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('RacesService', RacesService);
  
  function RacesService() {
    var characterRace;
    
    var races = [
     {name: 'Human', 
      effects: [
        {abbr: 'STR', value: 1, type: 'racial'},
        {abbr: 'DEX', value: 1, type: 'racial'},
        {abbr: 'CON', value: 1, type: 'racial'},
        {abbr: 'INT', value: 1, type: 'racial'},
        {abbr: 'WIS', value: 1, type: 'racial'},
        {abbr: 'CHA', value: 1, type: 'racial'}
      ]},
     {name: 'Hill Dwarf', 
      effects: [
        {abbr: 'CON', value: 2, type: 'racial'},
        {abbr: 'WIS', value: 1, type: 'racial'}
      ]},
     {name: 'Mountain Dwarf', 
      effects: [
        {abbr: 'CON', value: 2, type: 'racial'},
        {abbr: 'STR', value: 2, type: 'racial'}
      ]},
     {name: 'Lightfoot Halfling', 
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'CHA', value: 1, type: 'racial'}
      ]},
     {name: 'Stout Halfling', 
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'CON', value: 1, type: 'racial'}
      ]},
     {name: 'Drow', 
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'CHA', value: 1, type: 'racial'}
      ]},
     {name: 'Wood Elf', 
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'WIS', value: 1, type: 'racial'}
      ]},
     {name: 'High Elf', 
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'INT', value: 1, type: 'racial'}
      ]},
     {name: 'Dragonborn', 
      effects: [
        {abbr: 'STR', value: 2, type: 'racial'},
        {abbr: 'CHA', value: 1, type: 'racial'}
      ]},
     {name: 'Rock Gnome', 
      effects: [
        {abbr: 'INT', value: 2, type: 'racial'},
        {abbr: 'CON', value: 1, type: 'racial'}
      ]}
   ]
    
    return {
      getEffects: getEffects,
      getRaces: getRaces,
      getBonusForStat: getBonusForStat,
      getCharacterRace: getCharacterRace,
      setCharacterRace: setCharacterRace
    }
    
    function getRaces() {
      return races;
    }
    
    function getBonusForStat(stat) {
      var tempVal = 0;
      if (characterRace) {
        for(i=0; i< characterRace.effects.length; i++) {
          if (characterRace.effects[i].abbr === stat) {
            tempVal+= characterRace.effects[i].value;
          }
        }
      }
      return tempVal;
    }
    
    function getCharacterRace() {
      return characterRace;
    }
    
    function getEffects() {
      if (characterRace) {
        return {source: characterRace.name, effects: characterRace.effects};
      } else {
        return {}
      }
    }
    
    function setCharacterRace(race) {
      characterRace = race;
    }
   
  }
}());