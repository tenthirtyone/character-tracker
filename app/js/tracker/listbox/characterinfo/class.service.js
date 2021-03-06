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
       skills: {total: 2, skills: ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival']},
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
       skills: {total: 3, skills: ['all']},
       progression: [
         {level: 1, proficiency: 2, features: ['Spellcasting', 'Bardic Inspiration d6'],
          spells: {cantrips: 2, known: 4, slots: [{first: 2}]}},
         {level: 2, proficiency: 2, features: ['Jack of All Trades', 'Song of Rest d6'],
          spells: {cantrips: 2, known: 5, slots: [{first: 3}]}},
         {level: 3, proficiency: 2, features: ['Bard College', 'Expertise'],
          spells: {cantrips: 2, known: 6, slots: [{first: 4}, {second: 2}]}},
         {level: 4, proficiency: 2, features: ['Ability Score Improvement'],
          spells: {cantrips: 3, known: 7, slots: [{first: 4}, {second: 3}]}},
         {level: 5, proficiency: 3, features: ['Font of Inspiration', 'Bardic Inspiration d8'],
          spells: {cantrips: 3, known: 8, slots: [{first: 4}, {second: 3}, {third: 2}]}},
         {level: 6, proficiency: 3, features: ['Countercharm', 'Bard College Feature'],
          spells: {cantrips: 3, known: 9, slots: [{first: 4}, {second: 3}, {third: 3}]}},
         {level: 7, proficiency: 3, features: ['None'],
          spells: {cantrips: 3, known: 10, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 1}]}},
         {level: 8, proficiency: 3, features: ['Ability Score Improvement'],
          spells: {cantrips: 3, known: 11, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 2}]}},
         {level: 9, proficiency: 4, features: ['Song of Rest d8'],
          spells: {cantrips: 3, known: 12, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 1}]}},
         {level: 10, proficiency: 4, features: ['Expertise', 'Magical Secrets', 'Bardic Inspiration d10'],
          spells: {cantrips: 4, known: 14, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}]}},
         {level: 11, proficiency: 4, features: ['None'],
          spells: {cantrips: 4, known: 15, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 12, proficiency: 4, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, known: 15, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 13, proficiency: 5, features: ['Song of Rest d10'],
          spells: {cantrips: 4, known: 16, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 14, proficiency: 5, features: ['Magical Secrets', 'Bardic College'],
          spells: {cantrips: 4, known: 18, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 15, proficiency: 5, features: ['Bardic Inspiration d12'],
          spells: {cantrips: 4, known: 19, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 16, proficiency: 5, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, known: 19, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 17, proficiency: 6, features: ['Song of Rest d12'],
          spells: {cantrips: 4, known: 20, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 18, proficiency: 6, features: ['Magical Secrets'],
          spells: {cantrips: 4, known: 22, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 19, proficiency: 6, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, known: 22, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 2}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 20, proficiency: 6, features: ['Superior Inspiration'],
          spells: {cantrips: 4, known: 22, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 2}, {seventh: 2}, {eighth: 1}, {ninth: 1}]}},
       ]
      },
      {name: 'Cleric', 
       hitdice: 8, 
       armor: ['light', 'medium', 'shield'], 
       weapons: ['simple'],
       tools: ['None'],
       savingthrows: ['WIS', 'CHA'],
       skills: {total: 2, skills: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']},
       progression: [
         {level: 1, proficiency: 2, features: ['Spellcasting', 'Divine Domain'],
          spells: {cantrips: 3, slots: [{first: 2}]}},
         {level: 2, proficiency: 2, features: ['Channel Divinity 1', 'Divine Domain Feature'],
          spells: {cantrips: 3, slots: [{first: 3}]}},
         {level: 3, proficiency: 2, features: ['None'],
          spells: {cantrips: 3, slots: [{first: 4}, {second: 2}]}},
         {level: 4, proficiency: 2, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}]}},
         {level: 5, proficiency: 3, features: ['Destroy Undead CR 1/2'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 2}]}},
         {level: 6, proficiency: 3, features: ['Channel Divinity 2', 'Divine Domain Feature'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}]}},
         {level: 7, proficiency: 3, features: ['None'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 1}]}},
         {level: 8, proficiency: 3, features: ['Ability Score Improvement', 'Destroy Undead CR 1', 'Divine Domain feature'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 2}]}},
         {level: 9, proficiency: 4, features: ['None'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 1}]}},
         {level: 10, proficiency: 4, features: ['Divine Intervention'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}]}},
         {level: 11, proficiency: 4, features: ['Destroy Undead 2'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 12, proficiency: 4, features: ['Ability Score Improvement'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 13, proficiency: 5, features: ['None'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 14, proficiency: 5, features: ['Destroy Undead CR 3'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 15, proficiency: 5, features: ['None'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 16, proficiency: 5, features: ['Ability Score Improvement'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 17, proficiency: 6, features: ['Destroy Undead CR 4', 'Divine Domain Feature'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 18, proficiency: 6, features: ['Channel Divinity 3'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 3}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 19, proficiency: 6, features: ['Ability Score Improvement'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 3}, {sixth: 2}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 20, proficiency: 6, features: ['Divine Intervention Improvement'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 3}, {sixth: 2}, {seventh: 2}, {eighth: 1}, {ninth: 1}]}},
       ]
      },
      {name: 'Druid', 
       hitdice: 8, 
       armor: ['light', 'medium', 'shield'], 
       weapons: ['club', 'dagger', 'dart', 'javelin', 'mace', 'quarterstaff', 'scimitar', 'sickel', 'sling', 'spear'],
       tools: ['Herbalism Kit'],
       savingthrows: ['WIS', 'INT'],
       skills: {total: 2, skills: ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']},
       progression: [
         {level: 1, proficiency: 2, features: ['Spellcasting', 'Druidic'],
          spells: {cantrips: 2, slots: [{first: 2}]}},
         {level: 2, proficiency: 2, features: ['Wild Shape', 'Druid Circle'],
          spells: {cantrips: 2, slots: [{first: 3}]}},
         {level: 3, proficiency: 2, features: ['None'],
          spells: {cantrips: 2, slots: [{first: 4}, {second: 2}]}},
         {level: 4, proficiency: 2, features: ['Wild Shape Improvement', 'Ability Score Improvement'],
          spells: {cantrips: 3, slots: [{first: 4}, {second: 3}]}},
         {level: 5, proficiency: 3, features: ['None'],
          spells: {cantrips: 3, slots: [{first: 4}, {second: 3}, {third: 2}]}},
         {level: 6, proficiency: 3, features: ['Druid Circle Feature'],
          spells: {cantrips: 3, slots: [{first: 4}, {second: 3}, {third: 3}]}},
         {level: 7, proficiency: 3, features: ['None'],
          spells: {cantrips: 3, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 1}]}},
         {level: 8, proficiency: 3, features: ['Ability Score Improvement', 'Wild Shape Improvement'],
          spells: {cantrips: 3, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 2}]}},
         {level: 9, proficiency: 4, features: ['None'],
          spells: {cantrips: 3, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 1}]}},
         {level: 10, proficiency: 4, features: ['Druid Circle Feature'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}]}},
         {level: 11, proficiency: 4, features: ['None'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 12, proficiency: 4, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 13, proficiency: 5, features: ['None'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 14, proficiency: 5, features: ['Druid Circle Feature'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 15, proficiency: 5, features: ['None'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 16, proficiency: 5, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 17, proficiency: 6, features: ['None'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 18, proficiency: 6, features: ['Timeless Body', 'Beast Spells'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 3}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 19, proficiency: 6, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 3}, {sixth: 2}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 20, proficiency: 6, features: ['Archdruid'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 3}, {sixth: 2}, {seventh: 2}, {eighth: 1}, {ninth: 1}]}},
       ]
      },
      {name: 'Fighter', 
       hitdice: 10, 
       armor: ['light', 'medium', 'heavy', 'shield'], 
       weapons: ['simple', 'martial'],
       tools: ['None'],
       savingthrows: ['STR', 'CON'],
       skills: {total: 2, skills: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival']},
       progression: [
         {level: 1, proficiency: 2, features: ['Fighting Style', 'Second Wind']},
         {level: 2, proficiency: 2, features: ['Action Surge 1']},
         {level: 3, proficiency: 2, features: ['Martial Archetype']},
         {level: 4, proficiency: 2, features: ['Ability Score Improvement']},
         {level: 5, proficiency: 3, features: ['Extra Attack']},
         {level: 6, proficiency: 3, features: ['Ability Score Improvement']},
         {level: 7, proficiency: 3, features: ['Martial Archetype feature']},
         {level: 8, proficiency: 3, features: ['Ability Score Improvement']},
         {level: 9, proficiency: 4, features: ['Indomitable']},
         {level: 10, proficiency: 4, features: ['Martial Archetype feature']},
         {level: 11, proficiency: 4, features: ['Extra Attack 2']},
         {level: 12, proficiency: 4, features: ['Ability Score Improvement']},
         {level: 13, proficiency: 5, features: ['Indomitable 2']},
         {level: 14, proficiency: 5, features: ['Ability Score Improvement']},
         {level: 15, proficiency: 5, features: ['Martial Archetype feature']},
         {level: 16, proficiency: 5, features: ['Ability Score Improvement']},
         {level: 17, proficiency: 6, features: ['Action Surge 2', 'Indomitable 3']},
         {level: 18, proficiency: 6, features: ['Martial Archetype feature']},
         {level: 19, proficiency: 6, features: ['Ability Score Improvement']},
         {level: 20, proficiency: 6, features: ['Extra Attack 3']},
       ]
      },
      {name: 'Monk', 
       hitdice: 8, 
       armor: ['None'], 
       weapons: ['simple', 'shortsword'],
       tools: ['Artisan Tool or Instrument'],
       savingthrows: ['STR', 'DEX'],
       skills: {total: 2, skills: ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth']},
       progression: [
         {level: 1, proficiency: 2, martialArts: 4, ki: 0, movement: 0, features: ['Unarmored Defense', 'Martial Arts']},
         {level: 2, proficiency: 2, martialArts: 4, ki: 2, movement: 10, features: ['Ki', 'Unarmored Movement']},
         {level: 3, proficiency: 2, martialArts: 4, ki: 3, movement: 10, features: ['Monastic Tradition', 'Deflect Missiles']},
         {level: 4, proficiency: 2, martialArts: 4, ki: 4, movement: 10, features: ['Ability Score Improvement', 'Slowfall']},
         {level: 5, proficiency: 3, martialArts: 6, ki: 5, movement: 10, features: ['Extra Attack', 'Stunning Strike']},
         {level: 6, proficiency: 3, martialArts: 6, ki: 6, movement: 15, features: ['Ki Empowered Strike', 'Monastic Tradition Feature']},
         {level: 7, proficiency: 3, martialArts: 6, ki: 7, movement: 15, features: ['Evasion', 'Stillness of Mind']},
         {level: 8, proficiency: 3, martialArts: 6, ki: 8, movement: 15, features: ['Ability Score Improvement']},
         {level: 9, proficiency: 4, martialArts: 6, ki: 9, movement: 15, features: ['Unarmored Movement Improvement']},
         {level: 10, proficiency: 4, martialArts: 6, ki: 10, movement: 20, features: ['Purity of Body']},
         {level: 11, proficiency: 4, martialArts: 8, ki: 11, movement: 20, features: ['Monastic Tradition Feature']},
         {level: 12, proficiency: 4, martialArts: 8, ki: 12, movement: 20, features: ['Ability Score Improvement']},
         {level: 13, proficiency: 5, martialArts: 8, ki: 13, movement: 20, features: ['Tongue of the Sun and Moon']},
         {level: 14, proficiency: 5, martialArts: 8, ki: 14, movement: 25, features: ['Diamond Soul']},
         {level: 15, proficiency: 5, martialArts: 8, ki: 15, movement: 25, features: ['Timeless Body']},
         {level: 16, proficiency: 5, martialArts: 8, ki: 16, movement: 25, features: ['Ability Score Improvement']},
         {level: 17, proficiency: 6, martialArts: 10, ki: 17, movement: 25, features: ['Monastic Tradition Feature']},
         {level: 18, proficiency: 6, martialArts: 10, ki: 18, movement: 30, features: ['Empty Body']},
         {level: 19, proficiency: 6, martialArts: 10, ki: 19, movement: 30, features: ['Ability Score Improvement']},
         {level: 20, proficiency: 6, martialArts: 10, ki: 20, movement: 30, features: ['Perfect Self']},
       ]
      },
      {name: 'Paladin', 
       hitdice: 10, 
       armor: ['light', 'medium', 'heavy', 'shield'], 
       weapons: ['simple', 'martial'],
       tools: ['None'],
       savingthrows: ['WIS', 'CHA'],
       skills: {total: 2, skills: ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion']},
       progression: [
         {level: 1, proficiency: 2, features: ['Divine Sense', 'Lay on Hands'],
          spells: {slots: [{first: 0}]}},
         {level: 2, proficiency: 2, features: ['Fighting Style', 'Spellcasting', 'Divine Smite'],
          spells: {slots: [{first: 2}]}},
         {level: 3, proficiency: 2, features: ['Divine Health', 'Sacred Oath'],
          spells: {slots: [{first: 3}]}},
         {level: 4, proficiency: 2, features: ['Ability Score Improvement'],
          spells: {slots: [{first: 3}]}},
         {level: 5, proficiency: 3, features: ['Extra Attack'],
          spells: {slots: [{first: 4}, {second: 2}]}},
         {level: 6, proficiency: 3, features: ['Aura of Protection'],
          spells: {slots: [{first: 4}, {second: 2}]}},
         {level: 7, proficiency: 3, features: ['Sacred Oath Feature'],
          spells: {slots: [{first: 4}, {second: 3}]}},
         {level: 8, proficiency: 3, features: ['Ability Score Improvement'],
          spells: {slots: [{first: 4}, {second: 3}]}},
         {level: 9, proficiency: 4, features: ['None'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 2}]}},
         {level: 10, proficiency: 4, features: ['Aura of Courage'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 2}]}},
         {level: 11, proficiency: 4, features: ['Improved Divine Smite'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}]}},
         {level: 12, proficiency: 4, features: ['Ability Score Improvement'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}]}},
         {level: 13, proficiency: 5, features: ['None'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 1}]}},
         {level: 14, proficiency: 5, features: ['Cleansing Touch'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 1}]}},
         {level: 15, proficiency: 5, features: ['Sacred Oath Feature'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 2}]}},
         {level: 16, proficiency: 5, features: ['Ability Score Improvement'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 2}]}},
         {level: 17, proficiency: 6, features: ['None'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 1}]}},
         {level: 18, proficiency: 6, features: ['Aura Improvements'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 1}]}},
         {level: 19, proficiency: 6, features: ['Ability Score Improvement'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}]}},
         {level: 20, proficiency: 6, features: ['Sacred Oath Feature'],
          spells: {slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}]}},
       ]
      },
      {name: 'Ranger', 
       hitdice: 10, 
       armor: ['light', 'medium', 'shield'], 
       weapons: ['simple', 'martial'],
       tools: ['None'],
       savingthrows: ['STR', 'DEX'],
       skills: {total: 3, skills: ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival']},
       progression: [
         {level: 1, proficiency: 2, features: ['Favored Enemy', 'Natural Explorer'],
          spells: {known: 0, slots: [{first: 0}]}},
         {level: 2, proficiency: 2, features: ['Fighting Style', 'Spellcasting'],
          spells: {known: 2, slots: [{first: 2}]}},
         {level: 3, proficiency: 2, features: ['Ranger Archetype', 'Primeval Awareness'],
          spells: {known: 3, slots: [{first: 3}]}},
         {level: 4, proficiency: 2, features: ['Ability Score Improvement'],
          spells: {known: 3, slots: [{first: 3}]}},
         {level: 5, proficiency: 3, features: ['Extra Attack'],
          spells: {known: 4, slots: [{first: 4}, {second: 2}]}},
         {level: 6, proficiency: 3, features: ['Favored Enemy Improvement', 'Natural Explorer Improvement'],
          spells: {known: 4, slots: [{first: 4}, {second: 2}]}},
         {level: 7, proficiency: 3, features: ['Ranger Archetype Feature'],
          spells: {known: 5, slots: [{first: 4}, {second: 3}]}},
         {level: 8, proficiency: 3, features: ['Ability Score Improvement', 'Land Stride'],
          spells: {known: 5, slots: [{first: 4}, {second: 3}]}},
         {level: 9, proficiency: 4, features: ['None'],
          spells: {known: 6, slots: [{first: 4}, {second: 3}, {third: 2}]}},
         {level: 10, proficiency: 4, features: ['Natural Explorer Improvement', 'Hide in Plain Sight'],
          spells: {known: 6, slots: [{first: 4}, {second: 3}, {third: 2}]}},
         {level: 11, proficiency: 4, features: ['Ranger Archetype Feature'],
          spells: {known: 7, slots: [{first: 4}, {second: 3}, {third: 3}]}},
         {level: 12, proficiency: 4, features: ['Ability Score Improvement'],
          spells: {known: 7, slots: [{first: 4}, {second: 3}, {third: 3}]}},
         {level: 13, proficiency: 5, features: ['None'],
          spells: {known: 8, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 1}]}},
         {level: 14, proficiency: 5, features: ['Favored Enemy Improvement', 'Vanish'],
          spells: {known: 8, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 1}]}},
         {level: 15, proficiency: 5, features: ['Ranger Archetype Feature'],
          spells: {known: 9, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 2}]}},
         {level: 16, proficiency: 5, features: ['Ability Score Improvement'],
          spells: {known: 9, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 2}]}},
         {level: 17, proficiency: 6, features: ['None'],
          spells: {known: 10, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 1}]}},
         {level: 18, proficiency: 6, features: ['Feral Senses'],
          spells: {known: 10, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 1}]}},
         {level: 19, proficiency: 6, features: ['Ability Score Improvement'],
          spells: {known: 11, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}]}},
         {level: 20, proficiency: 6, features: ['Foe Slayer'],
          spells: {known: 11, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}]}},
       ]
      },
      {name: 'Rogue', 
       hitdice: 8, 
       armor: ['light'], 
       weapons: ['simple', 'hand crossbow', 'longsword', 'rapier', 'shortsword'],
       tools: ['Thieve\'s Tools'],
       savingthrows: ['INT', 'DEX'],
       skills: {total: 4, skills: ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth']},
       progression: [
         {level: 1, proficiency: 2, sneakdie: 1, sneakdmg: 6, features: ['Expertise', 'Sneak Attack', 'Thieve\'s Cant']},
         {level: 2, proficiency: 2, sneakdie: 1, sneakdmg: 6,  features: ['Cunning Action']},
         {level: 3, proficiency: 2, sneakdie: 2, sneakdmg: 6,  features: ['Roguish Archetype']},
         {level: 4, proficiency: 2, sneakdie: 2, sneakdmg: 6,  features: ['Ability Score Improvement']},
         {level: 5, proficiency: 3, sneakdie: 3, sneakdmg: 6,  features: ['Uncanny Dodge']},
         {level: 6, proficiency: 3, sneakdie: 3, sneakdmg: 6,  features: ['Expertise']},
         {level: 7, proficiency: 3, sneakdie: 4, sneakdmg: 6,  features: ['Evasion']},
         {level: 8, proficiency: 3, sneakdie: 4, sneakdmg: 6,  features: ['Ability Score Improvement']},
         {level: 9, proficiency: 4, sneakdie: 5, sneakdmg: 6,  features: ['Roguish Archetype Feature']},
         {level: 10, proficiency: 4, sneakdie: 5, sneakdmg: 6,  features: ['Ability Score Improvement']},
         {level: 11, proficiency: 4, sneakdie: 6, sneakdmg: 6,  features: ['Reliable Talent']},
         {level: 12, proficiency: 4, sneakdie: 6, sneakdmg: 6,  features: ['Ability Score Improvement']},
         {level: 13, proficiency: 5, sneakdie: 7, sneakdmg: 6,  features: ['Roguish Archetype Feature']},
         {level: 14, proficiency: 5, sneakdie: 7, sneakdmg: 6,  features: ['Blindsense']},
         {level: 15, proficiency: 5, sneakdie: 8, sneakdmg: 6,  features: ['Slippery Mind']},
         {level: 16, proficiency: 5, sneakdie: 8, sneakdmg: 6,  features: ['Ability Score Improvement']},
         {level: 17, proficiency: 6, sneakdie: 9, sneakdmg: 6,  features: ['Roguish Archetype Feature']},
         {level: 18, proficiency: 6, sneakdie: 9, sneakdmg: 6,  features: ['Elusive']},
         {level: 19, proficiency: 6, sneakdie: 10, sneakdmg: 6,  features: ['Ability Score Improvement']},
         {level: 20, proficiency: 6, sneakdie: 10, sneakdmg: 6,  features: ['Stroke of Luck']},
       ]
      },
      {name: 'Sorcerer', 
       hitdice: 6, 
       armor: ['none'], 
       weapons: ['dagger', 'dart', 'sling', 'quarterstaff', 'light crossbow'],
       tools: ['None'],
       savingthrows: ['CON', 'CHA'],
       skills: {total: 2, skills: ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion']},
       progression: [
         {level: 1, proficiency: 2, sorcerypoints: 0, features: ['Spellcasting', 'Sorcerous Origin'],
          spells: {cantrips: 2, known: 4, slots: [{first: 2}]}},
         {level: 2, proficiency: 2, sorcerypoints: 2, features: ['Font of Magic'],
          spells: {cantrips: 2, known: 5, slots: [{first: 3}]}},
         {level: 3, proficiency: 2, sorcerypoints: 3, features: ['Metamagic'],
          spells: {cantrips: 2, known: 6, slots: [{first: 4}, {second: 2}]}},
         {level: 4, proficiency: 2, sorcerypoints: 4, features: ['Ability Score Improvement'],
          spells: {cantrips: 3, known: 7, slots: [{first: 4}, {second: 3}]}},
         {level: 5, proficiency: 3, sorcerypoints: 5, features: ['None'],
          spells: {cantrips: 3, known: 8, slots: [{first: 4}, {second: 3}, {third: 2}]}},
         {level: 6, proficiency: 3, sorcerypoints: 6, features: ['Sorcerous Origin Feature'],
          spells: {cantrips: 3, known: 9, slots: [{first: 4}, {second: 3}, {third: 3}]}},
         {level: 7, proficiency: 3, sorcerypoints: 7, features: ['None'],
          spells: {cantrips: 3, known: 10, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 1}]}},
         {level: 8, proficiency: 3, sorcerypoints: 8, features: ['Ability Score Improvement'],
          spells: {cantrips: 3, known: 11, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 2}]}},
         {level: 9, proficiency: 4, sorcerypoints: 9, features: ['None'],
          spells: {cantrips: 3, known: 12, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 1}]}},
         {level: 10, proficiency: 4, sorcerypoints: 10, features: ['Metamagic'],
          spells: {cantrips: 4, known: 14, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}]}},
         {level: 11, proficiency: 4, sorcerypoints: 11, features: ['None'],
          spells: {cantrips: 4, known: 15, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 12, proficiency: 4, sorcerypoints: 12, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, known: 15, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 13, proficiency: 5, sorcerypoints: 13, features: ['None'],
          spells: {cantrips: 4, known: 16, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 14, proficiency: 5, sorcerypoints: 14, features: ['Sorcerous Origin Feature'],
          spells: {cantrips: 4, known: 18, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 15, proficiency: 5, sorcerypoints: 15, features: ['None'],
          spells: {cantrips: 4, known: 19, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 16, proficiency: 5, sorcerypoints: 16, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, known: 19, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 17, proficiency: 6, sorcerypoints: 17, features: ['Metamagic'],
          spells: {cantrips: 4, known: 20, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 18, proficiency: 6, sorcerypoints: 18, features: ['Sorcerous Origin Feature'],
          spells: {cantrips: 4, known: 22, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 19, proficiency: 6, sorcerypoints: 19, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, known: 22, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 2}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 20, proficiency: 6, sorcerypoints: 20, features: ['Sorcerous Restoration'],
          spells: {cantrips: 4, known: 22, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 2}, {seventh: 2}, {eighth: 1}, {ninth: 1}]}},
       ]
      },
      {name: 'Warlock', 
       hitdice: 8, 
       armor: ['light'], 
       weapons: ['simple'],
       tools: ['None'],
       savingthrows: ['WIS', 'CHA'],
       skills: {total: 2, skills: ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion']},
       progression: [
         {level: 1, proficiency: 2, features: ['Otherwordly Patron', 'Pact Magic'],
          spells: {cantrips: 2, known: 2, slots: 1[{first: 1}], invocations: 0}},
         {level: 2, proficiency: 2, features: ['Eldritch Invocation'],
          spells: {cantrips: 2, known: 3, slots: [{first: 2}], invocations: 2}},
         {level: 3, proficiency: 2, features: ['Pact Boon'],
          spells: {cantrips: 2, known: 4, slots: [{second: 2}], invocations: 2}},
         {level: 4, proficiency: 2, features: ['Ability Score Improvement'],
          spells: {cantrips: 3, known: 5, slots: [{second: 2}], invocations: 2}},
         {level: 5, proficiency: 3, features: ['None'],
          spells: {cantrips: 3, known: 6, slots: [{third: 2}], invocations: 3}},
         {level: 6, proficiency: 3, features: ['Otherwordly Patron Feature'],
          spells: {cantrips: 3, known: 7, slots: [{third: 2}], invocations: 3}},
         {level: 7, proficiency: 3, features: ['None'],
          spells: {cantrips: 3, known: 8, slots: [{fourth: 2}], invocations: 4}},
         {level: 8, proficiency: 3, features: ['Ability Score Improvement'],
          spells: {cantrips: 3, known: 9, slots: [{fourth: 2}], invocations: 4}},
         {level: 9, proficiency: 4, features: ['None'],
          spells: {cantrips: 3, known: 10, slots: [{fifth: 2}], invocations: 5}},
         {level: 10, proficiency: 4, features: ['Otherwordly Patron Feature'],
          spells: {cantrips: 4, known: 10, slots: [{fifth: 3}], invocations: 5}},
         {level: 11, proficiency: 4, features: ['Mystic Arcanum'],
          spells: {cantrips: 4, known: 11, slots: [{fifth: 3}], invocations: 5}},
         {level: 12, proficiency: 4, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, known: 11, slots: [{fifth: 3}], invocations: 6}},
         {level: 13, proficiency: 5, features: ['Mystic Arcanum'],
          spells: {cantrips: 4, known: 12, slots: [{fifth: 3}], invocations: 6}},
         {level: 14, proficiency: 5, features: ['Otherwordly Patron Feature'],
          spells: {cantrips: 4, known: 12, slots: [{fifth: 3}], invocations: 6}},
         {level: 15, proficiency: 5, features: ['MysticArcanum'],
          spells: {cantrips: 4, known: 13, slots: [{fifth: 3}], invocations: 7}},
         {level: 16, proficiency: 5, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, known: 13, slots: [{fifth: 3}], invocations: 7}},
         {level: 17, proficiency: 6, features: ['Mystic Arcanum'],
          spells: {cantrips: 4, known: 14, slots: [{fifth: 4}], invocations: 7}},
         {level: 18, proficiency: 6, features: ['None'],
          spells: {cantrips: 4, known: 14, slots: [{fifth: 4}], invocations: 8}},
         {level: 19, proficiency: 6, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, known: 15, slots: [{fifth: 4}], invocations: 8}},
         {level: 20, proficiency: 6, features: ['Eldritch Master'],
          spells: {cantrips: 4, known: 15, slots: [{fifth: 4}], invocations: 8}},
       ]
      },
      {name: 'Wizard', 
       hitdice: 6, 
       armor: ['none'], 
       weapons: ['dagger', 'dart', 'sling', 'quarterstaff'],
       tools: ['None'],
       savingthrows: ['WIS', 'INT'],
       skills: {total: 2, skills: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion']},
       progression: [
         {level: 1, proficiency: 2, features: ['Spellcasting', 'Arcane Recovery'],
          spells: {cantrips: 3, slots: [{first: 2}]}},
         {level: 2, proficiency: 2, features: ['Arcane Tradition'],
          spells: {cantrips: 3, slots: [{first: 3}]}},
         {level: 3, proficiency: 2, features: ['None'],
          spells: {cantrips: 3, slots: [{first: 4}, {second: 2}]}},
         {level: 4, proficiency: 2, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}]}},
         {level: 5, proficiency: 3, features: ['None'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 2}]}},
         {level: 6, proficiency: 3, features: ['Arcane Tradition Feature'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}]}},
         {level: 7, proficiency: 3, features: ['None'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 1}]}},
         {level: 8, proficiency: 3, features: ['Ability Score Improvement'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 2}]}},
         {level: 9, proficiency: 4, features: ['None'],
          spells: {cantrips: 4, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 1}]}},
         {level: 10, proficiency: 4, features: ['Arcane Tradition Feature'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}]}},
         {level: 11, proficiency: 4, features: ['None'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 12, proficiency: 4, features: ['Ability Score Improvement'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}]}},
         {level: 13, proficiency: 5, features: ['None'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 14, proficiency: 5, features: ['Arcane Tradition Feature'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}]}},
         {level: 15, proficiency: 5, features: ['None'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 16, proficiency: 5, features: ['Ability Score Improvement'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}]}},
         {level: 17, proficiency: 6, features: ['None'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 18, proficiency: 6, features: ['Spell Mastery'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 1}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 19, proficiency: 6, features: ['Ability Score Improvement'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 2}, {seventh: 1}, {eighth: 1}, {ninth: 1}]}},
         {level: 20, proficiency: 6, features: ['Signature Spell'],
          spells: {cantrips: 5, slots: [{first: 4}, {second: 3}, {third: 3}, {fourth: 3}, {fifth: 2}, {sixth: 2}, {seventh: 2}, {eighth: 1}, {ninth: 1}]}},
       ]
      }      
    ];
      
    return {
      addClass: addClass,
      getClassHP: getClassHP,
      getClassEffects: getClassEffects,
      getCasterClasses: getCasterClasses,
      getCharacterClasses: getCharacterClasses,
      getBonusForStat: getBonusForStat,
      getClasses: getClasses,
      removeClass: removeClass,
      getProficiencyBonus: getProficiencyBonus
    }
    
    function getClassHP() {
      var hpSources = [];
      for (var classes in characterClasses){
        if (characterClasses[classes].hp) {
          hpSources.push({source: characterClasses[classes].name, hp: (characterClasses[classes].hp * characterClasses[classes].level)});
        }
      }
      console.log(hpSources);
      return hpSources.length > 0 ? hpSources : 0;
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
        characterClasses.push({name: newClass.name, level: 1, hp: newClass.hitdice})
      }
      
    }
    
    function getCasterClasses() {
      var casterClasses = [];
      
      if (characterClasses.length > 0) {
        for (var charClass in characterClasses) {
          for (var dndClass in classes) {
            if (classes[dndClass].name === characterClasses[charClass].name && classes[dndClass].progression[0].spells) {
              for (var level in classes[dndClass].progression) {
                if (classes[dndClass].progression[level].level === characterClasses[charClass].level) {
                  //console.log(classes[dndClass].progression[level].spells);
                  casterClasses.push({name: classes[dndClass].name, spells: classes[dndClass].progression[level].spells})
                }
              }
            } 
          }
        }
      } 
      return casterClasses;
    }
    
    function getClassEffects() {
      return [];
    }
    
    function getProficiencyBonus() {
      var tmpLvl = 0;
      for (var dndClass in characterClasses) {
        if (characterClasses[dndClass].level) {
          tmpLvl+=characterClasses[dndClass].level
        }
      }
      
      return (Math.ceil(tmpLvl/4)+1);
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