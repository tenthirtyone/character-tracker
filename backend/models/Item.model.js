var mongoose = require('mongoose');
var Effect = require('Effect.model.js');

var Schema = mongoose.Schema;

var abilityScoreSchema = new Schema({
  name: String,
  img: String, 
  desc: String, 
  slot: [String], 
  equipable: Boolean,
  equipped: Boolean,
  type: String, 
  cost: Number, 
  damagedice: Number, 
  damage: Number, 
  damagetype: String, 
  weight: Number, 
  properties: [String], 
  range: Number, 
  maxrange: Number,
  effects: [Effect]
});

var AbilityScore = mongoose.model('AbilityScore', abilityScoreSchema);

module.exports = AbilityScore;