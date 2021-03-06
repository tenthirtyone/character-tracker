var mongoose = require('mongoose');
var Effect = require('./Effect.model.js');

var Schema = mongoose.Schema;

var featSchema = new Schema({
  name: {type: String, default: 'Feat name'},
  requirements: {type: String, default: 'STR 13'},
  desc: {type: String, default: 'Description'},
  effects: [Effect]
});

var Feat = mongoose.model('Feat', featSchema);

module.exports = Feat;