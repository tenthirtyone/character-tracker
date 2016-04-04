var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var accountSchema = new Schema({
	level: {type: Number, default: 0},
	proficiency: {type: Number, default: 0},
	sneakdie: {type: Number, default: 0},
	sneakdmg: {type: Number, default: 0},
	martialArts: {type: Number, default: 0},
	ki: {type: Number, default: 0},
	movement: {type: Number, default: 0},
	sorcerypoints: {type: Number, default: 0},
	features: 
});

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;