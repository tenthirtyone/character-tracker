var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var dndClass = new Schema({
  name: {type: String, default: 'Class Name'},
  hitdice: {type: Number, default: 0},
  armor: [{ type: Schema.Types.ObjectId, ref: 'ArmorType' }],
  weapons: [{ type: Schema.Types.ObjectId, ref: 'WeaponType' }],
  tools: [{ type: Schema.Types.ObjectId, ref: 'Tool' }],
  savingthrows: [String],
  skillsCount: {type: Number, default: 0},
  startingskills:  [String],
  level: {type: Number, default: 1},
  progression: [{ type: Schema.Types.ObjectId, ref: 'DnDClassProgression' }]
});

var DnDClass = mongoose.model('DnDClass', dndClass);

module.exports = DnDClass;
