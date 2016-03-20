var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gearSchema = new Schema({
  character: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
  ear1: {name: {type: String, default: 'Left Earring'}, slot: {type: String, default:'ear1'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]},
  head: {name: {type: String, default: 'Head'}, slot: {type: String, default:'head'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  ear2: {name: {type: String, default: 'Right Earring'}, slot: {type: String, default:'ear2'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  shoulders: {name: {type: String, default: 'Shoulders'}, slot: {type: String, default:'shoulders'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  face: {name: {type: String, default: 'Face'}, slot: {type: String, default:'face'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]},
  throat: {name: {type: String, default: 'Throat'}, slot: {type: String, default:'throat'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]},
  cloak: {name: {type: String, default: 'Cloak'}, slot: {type: String, default:'cloak'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  torso: {name: {type: String, default: 'Torso'}, slot: {type: String, default:'torso'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  hands: {name: {type: String, default: 'Hands'}, slot: {type: String, default:'hands'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  ring1: {name: {type: String, default: 'Left Ring'}, slot: {type: String, default:'ring1'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  belt: {name: {type: String, default: 'Belt'}, slot: {type: String, default:'belt'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  ring2: {name: {type: String, default: 'Right Ring'}, slot: {type: String, default:'ring2'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  boots: {name: {type: String, default: 'Boots'}, slot: {type: String, default:'boots'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  legs: {name: {type: String, default: 'Legs'}, slot: {type: String, default:'legs'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}, 
  charm: {name: {type: String, default: 'Charm'}, slot: {type: String, default:'charm'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]},
  weapon1: {name: {type: String, default: 'Weapon 1'}, slot: {type: String, default:'weapon1'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]},
  weapon2: {name: {type: String, default: 'Weapon 2'}, slot: {type: String, default:'weapon2'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]},
  ranged: {name: {type: String, default: 'Ranged'}, slot: {type: String, default:'ranged'}, equipped: {type: Boolean, default: false}, equippedItem: [{ type: Schema.Types.ObjectId, ref: 'Item' }]}
  
});

var Gear = mongoose.model('Gear', gearSchema);

module.exports = Gear;