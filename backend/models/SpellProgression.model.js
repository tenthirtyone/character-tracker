var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var abilityScoreSchema = new Schema({
  cantrips: Number,
  known: Number,
  slots: Array  
});

var AbilityScore = mongoose.model('AbilityScore', abilityScoreSchema);

module.exports = AbilityScore;