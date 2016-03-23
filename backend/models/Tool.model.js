var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var toolTypeSchema = new Schema({
  name: {type: String, default: 'Tool Name'}
});

var ToolType = mongoose.model('ToolType', toolTypeSchema);

module.exports = ToolType;