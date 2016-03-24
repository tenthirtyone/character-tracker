"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Effect = require('../models/Effect.model.js');

function addEffect(effect, callback) {
  console.log(effect)
  new Effect(effect).save(function(err, newEffect){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newEffect);
  })
}

function getEffect(effectid, callback) {
  if (!effectid) {
    var blankEffect = Effect();
    return callback(null, blankEffect);
  }
  Effect.findOne({_id: effectid}, function(err, effect){
    if (err) return callback(err)
    
    return callback(null, effect);
   })
  
}

function getEffects(callback) {
  Effect.find({}, function(err, effects) {
    if (err) return callback(err);
    
    return callback(null, effects);
  });
}

function removeEffect(effectid, callback) {
  console.log(effectid);
  Effect.remove({_id: effectid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateEffect(effect, callback) {
  var id = effect._id;
  delete effect._id;
  Effect.findByIdAndUpdate(id, effect, function(err, newEffect) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


module.exports = {
  addEffect: addEffect,
  getEffect: getEffect,
  getEffects: getEffects,
  removeEffect: removeEffect,
  updateEffect: updateEffect
};