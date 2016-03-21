"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var WeaponType = require('../models/WeaponType.model.js');
function addWeaponType(weapontype, callback) {
  console.log(weapontype)
  new WeaponType(weapontype).save(function(err, newWeaponType){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newWeaponType);
  })
}

function getWeaponType(weapontypeid, callback) {
  if (!weapontypeid) {
    var blankWeaponType = WeaponType();
    return callback(null, blankWeaponType);
  }
  WeaponType.findOne({_id: weapontypeid}, function(err, weapontype){
    if (err) return callback(err)
    
    return callback(null, weapontype);
   })
  
}

function getWeaponTypes(callback) {
  WeaponType.find({}, function(err, weapontypes) {
    if (err) return callback(err);
    
    return callback(null, weapontypes);
  });
}

function removeWeaponType(weapontypeid, callback) {
  console.log(weapontypeid);
  WeaponType.remove({_id: weapontypeid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateWeaponType(weapontype, callback) {
  var id = weapontype._id;
  delete weapontype._id;
  WeaponType.findByIdAndUpdate(id, weapontype, function(err, newWeaponType) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


module.exports = {
  addWeaponType: addWeaponType,
  getWeaponType: getWeaponType,
  getWeaponTypes: getWeaponTypes,
  removeWeaponType: removeWeaponType,
  updateWeaponType: updateWeaponType
};