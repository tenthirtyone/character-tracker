var mongoose = require('mongoose');
var Effect = require('./Effect.model.js');

var Schema = mongoose.Schema;

var raceSchema = new Schema({
  name: String,
  size: String,
  speed: Number,
  effects: [{ type: Schema.Types.ObjectId, ref: 'Effect' }]
});

var Race = mongoose.model('Race', raceSchema);

module.exports = Race;