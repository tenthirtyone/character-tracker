var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var toolSchema = new Schema({
  name: {type: String, default: 'Tool Name'},
  type: {type: String, default: 'Artisan'},
  cost: {type: Number, default: 0},
  weight: {type: Number, default: 0}
});

var Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;