"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Character = require('../models/Character.model.js');

function addCharacter(character, callback) {
  console.log(character)
  new Character(character).save(function(err, newCharacter){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newCharacter);
  })
}

function getCharacter(characterid, callback) {
  if (!characterid) {
    var blankCharacter = Character();
    return callback(null, blankCharacter);
  }
  Character.findOne({_id: characterid}, function(err, character){
    if (err) return callback(err)
    
    return callback(null, character);
   })
  
}

function getCharacters(callback) {
  Character.find({}, function(err, characters) {
    if (err) return callback(err);
    
    return callback(null, characters);
  });
}

function removeCharacter(characterid, callback) {
  console.log(characterid);
  Character.remove({_id: characterid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateCharacter(character, callback) {
  var id = character._id;
  delete character._id;
  Character.findByIdAndUpdate(id, character, function(err, newCharacter) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


module.exports = {
  addCharacter: addCharacter,
  getCharacter: getCharacter,
  getCharacters: getCharacters,
  removeCharacter: removeCharacter,
  updateCharacter: updateCharacter
};