var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var dndClassAbility = new Schema({
  name: {type: String, default: 'ClassAbility Name'},
  class: {type: Schema.Types.ObjectId, ref: 'DnDClass' },
  leve: {type: Number, default: 0},
  description: {type String, default: 'Description'},
  effect: {type: Schema.Types.ObjectId, ref: 'Effect' }
});

var DnDClassAbility = mongoose.model('DnDClassAbility', dndClassAbility);

module.exports = DnDClassAbility;