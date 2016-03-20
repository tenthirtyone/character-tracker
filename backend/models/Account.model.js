var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var accountSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  admin: {type: Boolean, default: false},
  playername: String,
  characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
  items: Array,
  spells: Array,
  maps: Array
});

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;