var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var effectSchema = new Schema({
  type: {type: String, default: 'Effect Type'},
  abbr: {type: String, default: 'STR'},
  value: {type: Number, default: 0}
});

var Effect = mongoose.model('Effect', effectSchema);

module.exports = Effect;