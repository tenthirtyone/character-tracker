"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var AbilityScore = require('../models/AbilityScore.model.js');

function addAbilityScore(abilityscore, callback) {
  console.log(abilityscore)
  new AbilityScore(abilityscore).save(function(err, newAbilityScore){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newAbilityScore);
  })
}

function getAbilityScore(abilityscoreid, callback) {
  if (!abilityscoreid) {
    var blankAbilityScore = AbilityScore();
    return callback(null, blankAbilityScore);
  }
  AbilityScore.findOne({_id: abilityscoreid}, function(err, abilityscore){
    if (err) return callback(err)
    
    return callback(null, abilityscore);
   })
  
}

function getAbilityScores(callback) {
  AbilityScore.find({}, function(err, abilityscores) {
    if (err) return callback(err);
    
    return callback(null, abilityscores);
  });
}

function getAbilityScoresAbbr(callback) {
  AbilityScore.find({}, 'abbr', function(err, abilityscores) {
    if(err) return callback(err);

    return callback(null, abilityscores);
  })
}

function removeAbilityScore(abilityscoreid, callback) {
  console.log(abilityscoreid);
  AbilityScore.remove({_id: abilityscoreid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateAbilityScore(abilityscore, callback) {
  var id = abilityscore._id;
  delete abilityscore._id;
  AbilityScore.findByIdAndUpdate(id, abilityscore, function(err, newAbilityScore) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


function saveAbilityScores(email, character, callback) {

}


module.exports = {
  addAbilityScore: addAbilityScore,
  getAbilityScore: getAbilityScore,
  getAbilityScores: getAbilityScores,
  getAbilityScoresAbbr: getAbilityScoresAbbr,
  removeAbilityScore: removeAbilityScore,
  saveAbilityScores: saveAbilityScores,
  updateAbilityScore: updateAbilityScore
};