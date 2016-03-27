var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var skillSchema = new Schema({
	acrobatics: {name: {type: String, default: 'Acrobatics'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'DEX'}},
	animalhandling: {name: {type: String, default: 'Animal Handling'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'WIS'}},
	arcana: {name: {type: String, default: 'Arcana'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'INT'}},
	athletics: {name: {type: String, default: 'Athletics'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'STR'}},
	acrobatics: {name: {type: String, default: 'Acrobatics'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'DEX'}},
	deception: {name: {type: String, default: 'Deception'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'CHA'}},
	history: {name: {type: String, default: 'History'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'INT'}},
	insight: {name: {type: String, default: 'Insight'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'WIS'}},
	intimidation: {name: {type: String, default: 'Intimidation'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'CHA'}},
	investigation: {name: {type: String, default: 'Investigation'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'INT'}},
	medicine: {name: {type: String, default: 'Medicine'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'WIS'}},
	nature: {name: {type: String, default: 'Nature'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'INT'}},
	perception: {name: {type: String, default: 'Perception'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'WIS'}},
	performance: {name: {type: String, default: 'Performance'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'CHA'}},
	persuasion: {name: {type: String, default: 'Persuasion'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'CHA'}},
	religion: {name: {type: String, default: 'Religion'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'INT'}},
	sleightofhand: {name: {type: String, default: 'Sleight of Hand'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'DEX'}},
	stealth: {name: {type: String, default: 'Stealth'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'DEX'}},
	survival: {name: {type: String, default: 'Survival'}, proficient: {type: Boolean, default: false}, ability: {type: String, default: 'WIS'}}
});

var Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;