"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Alignment = require('../models/Alignment.model.js');

function addAlignment(alignment, callback) {
  console.log(alignment)
  new Alignment(alignment).save(function(err, newAlignment){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newAlignment);
  })
}

function getAlignment(alignmentid, callback) {
  if (!alignmentid) {
    var blankAlignment = Alignment();
    return callback(null, blankAlignment);
  }
  Alignment.findOne({_id: alignmentid}, function(err, alignment){
    if (err) return callback(err)
    
    return callback(null, alignment);
   })
  
}

function getAlignments(callback) {
  Alignment.find({}, function(err, alignments) {
    if (err) return callback(err);
    
    return callback(null, alignments);
  });
}

function removeAlignment(alignmentid, callback) {
  console.log(alignmentid);
  Alignment.remove({_id: alignmentid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateAlignment(alignment, callback) {
  var id = alignment._id;
  delete alignment._id;
  Alignment.findByIdAndUpdate(id, alignment, function(err, newAlignment) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


module.exports = {
  addAlignment: addAlignment,
  getAlignment: getAlignment,
  getAlignments: getAlignments,
  removeAlignment: removeAlignment,
  updateAlignment: updateAlignment
};