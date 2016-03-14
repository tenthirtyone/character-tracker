(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('ClassService', ClassService);
  
  function ClassService() {
 
    var characterClasses = [];
    
    var classes = [
      {name: 'Barbarian', 
       hitdice: 12, 
       armor: ['light', 'medium', 'shield'], 
       weapons: ['simple', 'martial'],
       tools: ['none'],
       savingthrows: ['STR', 'CON'],
       skills: 'Choose two: Animal Handling, Athletics, Intimidation, Nature, Perception, Survival',
       progression: [
         {level: 1, proficiency: 2, features: ['Rage 2, 2Dmg', 'Unarmored Defense']},
         {level: 2, proficiency: 2, features: ['Reckless Attack', 'Danger Sense']},
         {level: 3, proficiency: 2, features: ['Rage 3, 3Dmg', 'Primal Pain']},
         {level: 4, proficiency: 2, features: ['Ability Score Improvement']},
         {level: 5, proficiency: 3, features: ['Extra Attack', 'Fast Movement']},
         {level: 6, proficiency: 3, features: ['Path Feature']},
         {level: 7, proficiency: 3, features: ['Rage 4, 3Dmg', 'Feral Instinct']},
         {level: 8, proficiency: 3, features: ['Ability Score Improvement']},
         {level: 9, proficiency: 4, features: ['Brutal Critical']},
         {level: 10, proficiency: 4, features: ['Path Feature']},
         {level: 11, proficiency: 4, features: ['Relentless Rage']},
         {level: 12, proficiency: 4, features: ['Rage 5, 3Dmg', 'Ability Score Improvement']},
         {level: 13, proficiency: 5, features: ['Brutal Critical']},
         {level: 14, proficiency: 5, features: ['Path Feature']},
         {level: 15, proficiency: 5, features: ['Persistent Rage']},
         {level: 16, proficiency: 5, features: ['Ability Score Improvement']},
         {level: 17, proficiency: 6, features: ['Rage 6, 4Dmg', 'Brutal Critical']},
         {level: 18, proficiency: 6, features: ['Indomitable Might']},
         {level: 19, proficiency: 6, features: ['Ability Score Improvement']},
         {level: 20, proficiency: 6, features: ['Rage Unlimited', 'Primal Champion']},
       ]
      },
      {name: 'Bard', 
       hitdice: 8, 
       armor: ['light'], 
       weapons: ['simple', 'hand crossbow', 'longswords', 'rapiers', 'shortswords'],
       tools: ['Three Musical Instruments of your choice'],
       savingthrows: ['DEX', 'CHA'],
       skills: 'Choose any three'
      },
      {name: 'Cleric', 
       hitdice: 8, 
       armor: ['light', 'medium', 'shield'], 
       weapons: ['simple'],
       tools: ['None'],
       savingthrows: ['WIS', 'CHA'],
       skills: 'Choose two: History, Insight, Medicine, Persuasion, Religion'
      },
      {name: 'Druid', 
       hitdice: 8, 
       armor: ['light', 'medium', 'shield'], 
       weapons: ['club', 'dagger', 'dart', 'javelin', 'mace', 'quarterstaff', 'scimitar', 'sickel', 'sling', 'spear'],
       tools: ['Herbalism Kit'],
       savingthrows: ['WIS', 'INT'],
       skills: 'Choose two: Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, Survival'
      },
      {name: 'Fighter', 
       hitdice: 10, 
       armor: ['light', 'medium', 'heavy', 'shield'], 
       weapons: ['simple', 'martial'],
       tools: ['None'],
       savingthrows: ['STR', 'CON'],
       skills: 'Choose two: Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, Survival'
      },
      {name: 'Monk', 
       hitdice: 8, 
       armor: ['None'], 
       weapons: ['simple', 'shortsword'],
       tools: ['Artisan Tool or Instrument'],
       savingthrows: ['STR', 'DEX'],
       skills: 'Choose two: Acrobatics, Athletics, History, Insight, Religion, Stealth'
      },
      {name: 'Paladin', 
       hitdice: 10, 
       armor: ['light', 'medium', 'heavy', 'shield'], 
       weapons: ['simple', 'martial'],
       tools: ['None'],
       savingthrows: ['WIS', 'CHA'],
       skills: 'Choose two: Athletics, Insight, Intimidation, Medicine, Persuasion, Religion'
      },
      {name: 'Ranger', 
       hitdice: 10, 
       armor: ['light', 'medium', 'shield'], 
       weapons: ['simple', 'martial'],
       tools: ['None'],
       savingthrows: ['STR', 'DEX'],
       skills: 'Choose three: Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, Survival'
      },
      {name: 'Rogue', 
       hitdice: 8, 
       armor: ['light'], 
       weapons: ['simple', 'hand crossbow', 'longsword', 'rapier', 'shortsword'],
       tools: ['Thieve\'s Tools'],
       savingthrows: ['INT', 'DEX'],
       skills: 'Choose four: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth'
      },
      {name: 'Sorcerer', 
       hitdice: 6, 
       armor: ['none'], 
       weapons: ['dagger', 'dart', 'sling', 'quarterstaff', 'light crossbow'],
       tools: ['None'],
       savingthrows: ['CON', 'CHA'],
       skills: 'Choose two: Arcana, Deception, Insight, Intimidation, Persuasion, Religion'
      },
      {name: 'Warlock', 
       hitdice: 8, 
       armor: ['light'], 
       weapons: ['simple'],
       tools: ['None'],
       savingthrows: ['WIS', 'CHA'],
       skills: 'Choose two: Arcana, Deception, History, Intimidation, Investigation, Nature, Religion'
      },
      {name: 'Wizard', 
       hitdice: 6, 
       armor: ['none'], 
       weapons: ['dagger', 'dart', 'sling', 'quarterstaff'],
       tools: ['None'],
       savingthrows: ['WIS', 'INT'],
       skills: 'Choose two: Arcana, History, Insight, Investigation, Medicine, Religion'
      }      
    ];
      
    return {
      addClass: addClass,
      getCharacterClasses: getCharacterClasses,
      getBonusForStat: getBonusForStat,
      getClasses: getClasses,
      removeClass: removeClass
    }
    
    function addClass(newClass) {
      var match = false;
      for (i=0; i<characterClasses.length; i++) {
        if (characterClasses[i].name === newClass.name) {
          characterClasses[i].level++;
          match = true;
        }
      }
      
      if (!match) {
        characterClasses.push({name: newClass.name, level: 1})
      }
    }
    
    function removeClass(oldClass) {
      for (i=0; i<characterClasses.length; i++) {
        if (characterClasses[i].name === oldClass.name) {
          characterClasses[i].level--;
          if (characterClasses[i].level === 0) {
            characterClasses.splice(i, i+1);
          }
        }
      }
      
    }
    
    function getCharacterClasses() {
      return characterClasses;
    }
    
    function getBonusForStat() {
      return 0;
    }
    
    function getClasses() {
      return classes;
    }
    
  }
}());