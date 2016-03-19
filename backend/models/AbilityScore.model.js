var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var abilityScoreSchema = new Schema({
  strength: {name: {type: String, default: 'Strength'}, abbr: {type: String, default: 'str'}, value: {type: Number, default: 10}},
  dexterity: {name: {type: String, default: 'Dexterity'}, abbr: {type: String, default: 'dex'}, value: {type: Number, default: 10}},
  constitution: {name: {type: String, default: 'Consitution'}, abbr: {type: String, default: 'con'}, value: {type: Number, default: 10}},
  intelligence: {name: {type: String, default: 'Intelligence'}, abbr: {type: String, default: 'int'}, value: {type: Number, default: 10}},
  wisdom: {name: {type: String, default: 'Wisdom'}, abbr: {type: String, default: 'wis'}, value: {type: Number, default: 10}},
  charisma: {name: {type: String, default: 'Charisma'}, abbr: {type: String, default: 'cha'}, value: {type: Number, default: 10}}
});

var AbilityScore = mongoose.model('AbilityScore', abilityScoreSchema);

module.exports = AbilityScore;