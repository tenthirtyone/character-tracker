var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var accountSchema = new Schema({
	name: {type: String},
	desc: {type: String},
	effects: [Effect]
});

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;