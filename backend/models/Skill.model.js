var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var skillSchema = new Schema({
  name: {type: String, default: 'Skill name'},
  ability: {type: String, default: 'str'}
});

var Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;