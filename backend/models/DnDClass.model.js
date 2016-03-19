var mongoose = require('mongoose');
var Spell = require('./Spell.model.js');

var Schema = mongoose.Schema;

var dndClass = new Schema({
  name: String,
  hitdice: Number,
  armor: Array,
  weapons: Array,
  tools: Array,
  savingthrows: Array,
  skills: Number,
  startingskills: Array,
  level: Number,
  proficiency: String,
  features: Array,
  spells: [Spell]
});

var DnDClass = mongoose.model('DnDClass', dndClass);

module.exports = DnDClass;