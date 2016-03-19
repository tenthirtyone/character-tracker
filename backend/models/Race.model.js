var mongoose = require('mongoose');
var Effect = require('./Effect.model.js');

var Schema = mongoose.Schema;

var raceSchema = new Schema({
  name: String,
  size: String,
  speed: Number,
  //effects: [Effect]
});

var Race = mongoose.model('Race', raceSchema);

module.exports = Race;