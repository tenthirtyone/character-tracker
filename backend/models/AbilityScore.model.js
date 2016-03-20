var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var abilityScoreSchema = new Schema({
  character: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
  strength: {name: {type: String, default: 'Strength'}, abbr: {type: String, default: 'str'}, value: {type: Number, default: 10}, save: {type: Boolean, default: false}},
  dexterity: {name: {type: String, default: 'Dexterity'}, abbr: {type: String, default: 'dex'}, value: {type: Number, default: 10}, save: {type: Boolean, default: false}},
  constitution: {name: {type: String, default: 'Consitution'}, abbr: {type: String, default: 'con'}, value: {type: Number, default: 10}, save: {type: Boolean, default: false}},
  intelligence: {name: {type: String, default: 'Intelligence'}, abbr: {type: String, default: 'int'}, value: {type: Number, default: 10}, save: {type: Boolean, default: false}},
  wisdom: {name: {type: String, default: 'Wisdom'}, abbr: {type: String, default: 'wis'}, value: {type: Number, default: 10}, save: {type: Boolean, default: false}},
  charisma: {name: {type: String, default: 'Charisma'}, abbr: {type: String, default: 'cha'}, value: {type: Number, default: 10}, save: {type: Boolean, default: false}}
});

var AbilityScore = mongoose.model('AbilityScore', abilityScoreSchema);

module.exports = AbilityScore;