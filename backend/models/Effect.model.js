var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var effectSchema = new Schema({
  type: String,
  value: Number
});

var Effect = mongoose.model('Effect', effectSchema);

module.exports = Effect;