var mongoose = require('mongoose');
var Spell = require('./Spell.model.js');

var Schema = mongoose.Schema;

var dndClass = new Schema({
  name: {type: String, default: 'Class Name'},
  hitdice: {type: Number, default: 0},
  armor: Array,
  weapons: Array,
  tools: Array,
  savingthrows: Array,
  skillsCount: {type: Number, default: 0},
  startingskills: Array,
  level: {type: Number, default: 0}
});

var DnDClass = mongoose.model('DnDClass', dndClass);

module.exports = DnDClass;