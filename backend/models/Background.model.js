var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var backgroundSchema = new Schema({
  name: {type: String, default: 'Background Name'},
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
  equipment: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

var Background = mongoose.model('Background', backgroundSchema);

module.exports = Background;