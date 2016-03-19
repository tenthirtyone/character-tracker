var mongoose = require('mongoose');
var Effect = require('./Effect.model.js');

var Schema = mongoose.Schema;

var spell = new Schema({
  name: String,
  description: String,
  range: Number,
  effect: [Effect]
});

var Spell = mongoose.model('Spell', spell);

module.exports = Spell;