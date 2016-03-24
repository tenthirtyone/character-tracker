"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var DnDClass = require('../models/DnDClass.model.js');

function addDnDClass(dndclass, callback) {
  console.log(dndclass)
  new DnDClass(dndclass).save(function(err, newDnDClass){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newDnDClass);
  })
}

function getDnDClass(dndclassid, callback) {
  if (!dndclassid) {
    var blankDnDClass = DnDClass();
    return callback(null, blankDnDClass);
  }
  DnDClass.findOne({_id: dndclassid})
  .populate(
    'armor weapons tools savingthrows startingskills'
    )
  .exec(function(err, dndclass){
    if (err) return callback(err)
    console.log('populating?');
    return callback(null, dndclass);
   })

  
}

function getDnDClasses(callback) {
  DnDClass.find({})
    .populate(
    'armor weapons tools savingthrows startingskills'
    )
  .exec(function(err, dndclasses) {
    if (err) return callback(err);
    
    return callback(null, dndclasses);
  });
}

function removeDnDClass(dndclassid, callback) {
  DnDClass.remove({_id: dndclassid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateDnDClass(dndclass, callback) {
  var id = dndclass._id;
  delete dndclass._id;
  console.log('test');
  console.log('test');
  console.log('test');
  console.log('test');
  console.log(dndclass);
  DnDClass.findByIdAndUpdate(id, dndclass, function(err, newDnDClass) {
    console.log(err)
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
 }

module.exports = {
  addDnDClass: addDnDClass,
  getDnDClass: getDnDClass,
  getDnDClasses: getDnDClasses,
  removeDnDClass: removeDnDClass,
  updateDnDClass: updateDnDClass
};