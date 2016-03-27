var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var alignmentSchema = new Schema({
  name: {type: String, default: 'Alignment Name'}
});

var Alignment = mongoose.model('Alignment', alignmentSchema);

module.exports = Alignment;