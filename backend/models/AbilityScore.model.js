var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var abilityScoreSchema = new Schema({
	strength: {name: {type: String, default: 'Strength'}, abbreviation: {type: String, default: 'STR'}, value: {type: Number, default: 10}, spellSave: {type: Boolean, default: false}},
	dexterity: {name: {type: String, default: 'Dexterity'}, abbreviation: {type: String, default: 'DEX'}, value: {type: Number, default: 10}, spellSave: {type: Boolean, default: false}},
	constitution: {name: {type: String, default: 'Constitution'}, abbreviation: {type: String, default: 'CON'}, value: {type: Number, default: 10}, spellSave: {type: Boolean, default: false}},
	intelligence: {name: {type: String, default: 'Intelligence'}, abbreviation: {type: String, default: 'INT'}, value: {type: Number, default: 10}, spellSave: {type: Boolean, default: false}},
	wisdom: {name: {type: String, default: 'Wisdom'}, abbreviation: {type: String, default: 'WIS'}, value: {type: Number, default: 10}, spellSave: {type: Boolean, default: false}},
	charisma: {name: {type: String, default: 'Charisma'}, abbreviation: {type: String, default: 'CHA'}, value: {type: Number, default: 10}, spellSave: {type: Boolean, default: false}},
});

var AbilityScore = mongoose.model('AbilityScore', abilityScoreSchema);

module.exports = AbilityScore;