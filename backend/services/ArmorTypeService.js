"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var ArmorType = require('../models/ArmorType.model.js');
function addArmorType(armortype, callback) {
  console.log(armortype)
  new ArmorType(armortype).save(function(err, newArmorType){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newArmorType);
  })
}

function getArmorType(armortypeid, callback) {
  if (!armortypeid) {
    var blankArmorType = ArmorType();
    return callback(null, blankArmorType);
  }
  ArmorType.findOne({_id: armortypeid}, function(err, armortype){
    if (err) return callback(err)
    
    return callback(null, armortype);
   })
  
}

function getArmorTypes(callback) {
  ArmorType.find({}, function(err, armortypes) {
    if (err) return callback(err);
    
    return callback(null, armortypes);
  });
}

function removeArmorType(armortypeid, callback) {
  console.log(armortypeid);
  ArmorType.remove({_id: armortypeid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateArmorType(armortype, callback) {
  var id = armortype._id;
  delete armortype._id;
  ArmorType.findByIdAndUpdate(id, armortype, function(err, newArmorType) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


module.exports = {
  addArmorType: addArmorType,
  getArmorType: getArmorType,
  getArmorTypes: getArmorTypes,
  removeArmorType: removeArmorType,
  updateArmorType: updateArmorType
};