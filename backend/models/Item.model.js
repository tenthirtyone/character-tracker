var mongoose = require('mongoose');
var Effect = require('./Effect.model.js');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: {type: String, default: 'Item Name'},
  img: {type: String, default: 'Image URL'},
  desc: {type: String, default: 'Description'},
  slot: [String], 
  equipable: {type: Boolean, default: false},
  equipped: {type: Boolean, default: false},
  type: {type: String, default: 'item type'}, 
  cost: {type: Number, default: 0},
  damagedice: {type: Number, default: 0},
  damage: {type: Number, default: 0},
  damagetype: {type: String, default: 'none'},
  weight: {type: Number, default: 0},
  properties: [String], 
  range: {type: Number, default: 0},
  maxrange: {type: Number, default: 0},
  effects: [Effect]
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;