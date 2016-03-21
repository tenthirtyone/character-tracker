var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var armorTypeSchema = new Schema({
  name: {type: String, default: 'ArmorType Name'}
});

var ArmorType = mongoose.model('ArmorType', armorTypeSchema);

module.exports = ArmorType;