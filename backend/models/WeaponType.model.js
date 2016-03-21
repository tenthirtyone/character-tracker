var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var weaponTypeSchema = new Schema({
  name: {type: String, default: 'WeaponType Name'}
});

var WeaponType = mongoose.model('WeaponType', weaponTypeSchema);

module.exports = WeaponType;