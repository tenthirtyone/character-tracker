var mongoose = require('mongoose');
var Effect = require('./Effect.model.js');

var Schema = mongoose.Schema;

var raceSchema = new Schema({
  name: {type: String, default: 'Race Name'},
  size: {type: String, default: 'M'},
  speed: {type: Number, default: 35},
  effects: [{ type: Schema.Types.ObjectId, ref: 'Effect' }]
});

var Race = mongoose.model('Race', raceSchema);

module.exports = Race;