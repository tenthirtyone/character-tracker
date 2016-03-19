var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var skillSchema = new Schema({
  name: String,
  proficient: Boolean,
  ability: String,
  value: Number
});

var Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;