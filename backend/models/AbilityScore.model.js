var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var abilityScoreSchema = new Schema({
  name: {type: String, default: 'Ability Score'},
  abbr: {type: String, default: 'Abbreviation'},
  value: {type: Number, default: 10},
  spellSave: {type: Boolean, default: false}
});

var AbilityScore = mongoose.model('AbilityScore', abilityScoreSchema);

module.exports = AbilityScore;