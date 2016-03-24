var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var toolSchema = new Schema({
  name: {type: String, default: 'Tool Name'}
});

var Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;