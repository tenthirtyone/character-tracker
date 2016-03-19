/* 
 Base Model for player characters. Stores all computed values.
 */ 

var mongoose = require('mongoose');
var AbilityScore = require('./AbilityScore.model.js');
var Race = require('./Race.model.js');
var DnDClass = require ('./DnDClass.model.js');

var Schema = mongoose.Schema;

var characterSchema = new Schema({
  info: {
    characterName: {type: String, default: 'Character Name'},
    race: [Race],
    hp: {type: Number, default: 0},
    ac: {type: Number, default: 0},
    init: {type: Number, default: 0},
    proficiency: {type: Number, default: 0},
    speed: {type: Number, default: 0},
    classes: [DnDClass],
    abilityscores: [AbilityScore],
    //inventory: Array,
    //effects: Array,
    //gear: Array,
    //feats: Array,
    //saves: Array,
    //skills: Array,
    //spells: Array
  }
});

var Character = mongoose.model('Character', characterSchema);

module.exports = Character;