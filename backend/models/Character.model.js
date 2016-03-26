/* 
 Base Model for player characters. Stores all computed values.
 */ 

var mongoose = require('mongoose');
var AbilityScore = require('./AbilityScore.model.js');
var Race = require('./Race.model.js');
var Effect = require('./Effect.model.js');
var DnDClass = require ('./DnDClass.model.js');

var Schema = mongoose.Schema;

var characterSchema = new Schema({
  info: {
    account: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
    characterName: {type: String, default: 'Character Name'},
    race: [{ type: Schema.Types.ObjectId, ref: 'Race' }],
    temphp: {type: Number, default: 0},
    maxhp: {type: Number, default: 0},
    inspiration: {type: Boolean, default: false},
    ac: {type: Number, default: 0},
    init: {type: Number, default: 0},
    proficiency: {type: Number, default: 0},
    speed: {type: Number, default: 0},
    abilityscores: [AbilityScore],
    classes: [DnDClass],
    inventory: [{ type: Schema.Types.ObjectId, ref: 'Inventory' }],
    gear: [{ type: Schema.Types.ObjectId, ref: 'Gear' }],
    feats: [{ type: Schema.Types.ObjectId, ref: 'Feat' }],
    skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
    tools: [{ type: Schema.Types.ObjectId, ref: 'Tool' }],
    effects: [Effect],
  }
});

var Character = mongoose.model('Character', characterSchema);

module.exports = Character;