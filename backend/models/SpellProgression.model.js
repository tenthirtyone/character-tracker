var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSpellSchema = new Schema({
  cantrips: Number,
  known: Number,
  slots: Array  
});

var ClassSpell = mongoose.model('ClassSpell', classSpellSchema);

module.exports = ClassSpell;