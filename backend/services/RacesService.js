"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Race = require('../models/Race.model.js');

function addRace(race, callback) {
  console.log(race)
  new Race(race).save(function(err, newRace){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newRace);
  })
}

function getRace(raceid, callback) {
  if (!raceid) {
    var blankRace = Race();
    return callback(null, blankRace);
  }
  Race.findOne({_id: raceid}, function(err, race){
    if (err) return callback(err)
    
    return callback(null, race);
   })
  
}

function getRaces(callback) {
  Race.find({})
  .populate('effects')
  .exec(function(err, races) {
    if (err) return callback(err);
    
    return callback(null, races);
  });
}

function removeRace(raceid, callback) {
  console.log(raceid);
  Race.remove({_id: raceid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateRace(race, callback) {
  var id = race._id;
  delete race._id;
  Race.findByIdAndUpdate(id, race, function(err, newRace) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


function saveRaces(email, character, callback) {

}


module.exports = {
  addRace: addRace,
  getRace: getRace,
  getRaces: getRaces,
  removeRace: removeRace,
  saveRaces: saveRaces,
  updateRace: updateRace
};