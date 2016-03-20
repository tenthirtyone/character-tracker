var mongoose = require('mongoose');
var Item = require('./Item.model.js')
var Schema = mongoose.Schema;

var inventorySchema = new Schema({
  character: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
  inventory: [Item]
});

var Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;