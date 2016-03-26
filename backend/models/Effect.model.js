var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var effectSchema = new Schema({
  source: {type: String, default: 'Racial/Item/Spell'},
  effecttype: {type: String, default: 'ability/hp/ac'},
  abbr: {type: String, default: 'str'},
  value: {type: Number, default: 2}
});

var Effect = mongoose.model('Effect', effectSchema);

module.exports = Effect;