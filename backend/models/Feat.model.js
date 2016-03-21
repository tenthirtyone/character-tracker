var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var featSchema = new Schema({
  name: {type: String, default: 'Feat name'},
  desc: {type: String, default: 'Description'},
  effects: [{ type: Schema.Types.ObjectId, ref: 'Effect' }]
});

var Feat = mongoose.model('Feat', featSchema);

module.exports = Feat;