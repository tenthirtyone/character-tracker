(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('RacesService', RacesService);
  
  function RacesService() {
    var characterRace;
    
    var races = [
     {name: 'Aarakocra', 
      size: 'M',
      speed: 25,
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'WIS', value: 1, type: 'racial'}
      ]},
     {name: 'Aasimar',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'CHA', value: 2, type: 'racial'},
        {abbr: 'WIS', value: 1, type: 'racial'}
      ]},
     {name: 'Changeling',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'DEX', value: 1, type: 'racial'},
        {abbr: 'CHA', value: 1, type: 'racial'}
      ]},
     {name: 'Deep Gnome',
      size: 'S',
      speed: 25, 
      effects: [
        {abbr: 'INT', value: 2, type: 'racial'},
        {abbr: 'DEX', value: 1, type: 'racial'}
      ]},
     {name: 'Dragonborn',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'STR', value: 2, type: 'racial'},
        {abbr: 'CHA', value: 1, type: 'racial'}
      ]},
     {name: 'Drow', 
      size: 'M',
      speed: 30,
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'CHA', value: 1, type: 'racial'}
      ]},
     {name: 'Duergar', 
      size: 'M',
      speed: 25,
      effects: [
        {abbr: 'CON', value: 2, type: 'racial'},
        {abbr: 'STR', value: 1, type: 'racial'}
      ]},
     {name: 'Eladrin', 
      size: 'M',
      speed: 30,
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'INT', value: 1, type: 'racial'}
      ]},
      {name: 'Forest Gnome',
      size: 'M',
      speed: 25, 
      effects: [
        {abbr: 'INT', value: 2, type: 'racial'},
        {abbr: 'DEX', value: 1, type: 'racial'}
      ]},
      {name: 'Half Drow',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'CHA', value: 2, type: 'racial'}
      ]},
      {name: 'Half Moon Elf',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'CHA', value: 2, type: 'racial'}
      ]},
      {name: 'Half Orc',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'STR', value: 2, type: 'racial'},
        {abbr: 'CON', value: 1, type: 'racial'}
      ]},
      {name: 'Half Wood Elf',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'CHA', value: 2, type: 'racial'}
      ]},
      {name: 'Hill Dwarf',
      size: 'M',
      speed: 25, 
      effects: [
        {abbr: 'CON', value: 2, type: 'racial'},
        {abbr: 'WIS', value: 1, type: 'racial'}
      ]},
     {name: 'High Elf',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'INT', value: 1, type: 'racial'}
      ]},
     {name: 'Human',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'STR', value: 1, type: 'racial'},
        {abbr: 'DEX', value: 1, type: 'racial'},
        {abbr: 'CON', value: 1, type: 'racial'},
        {abbr: 'INT', value: 1, type: 'racial'},
        {abbr: 'WIS', value: 1, type: 'racial'},
        {abbr: 'CHA', value: 1, type: 'racial'}
      ]},
     {name: 'Human Variant',
      size: 'M',
      speed: 30, 
      effects: [
        {abbr: 'Raise Ability', value: 2, type: 'racial'},
        {abbr: 'Skill', value: 1, type: 'racial'},
        {abbr: 'Feat', value: 1, type: 'racial'}
      ]},
     {name: 'Lightfoot Halfling', 
      size: 'S',
      speed: 25,
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'CHA', value: 1, type: 'racial'}
      ]},
     {name: 'Mountain Dwarf', 
      size: 'M',
      speed: 25,
      effects: [
        {abbr: 'CON', value: 2, type: 'racial'},
        {abbr: 'STR', value: 2, type: 'racial'}
      ]},
     {name: 'Rock Gnome', 
      size: 'S',
      speed: 25,
      effects: [
        {abbr: 'INT', value: 2, type: 'racial'},
        {abbr: 'CON', value: 1, type: 'racial'}
      ]},
     {name: 'Stout Halfling', 
      size: 'S',
      speed: 25,
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'CON', value: 1, type: 'racial'}
      ]},
     {name: 'Wood Elf', 
      size: 'M',
      speed: 35,
      effects: [
        {abbr: 'DEX', value: 2, type: 'racial'},
        {abbr: 'WIS', value: 1, type: 'racial'}
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