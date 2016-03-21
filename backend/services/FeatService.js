"use strict";

var logger = require("../common/logger");
var Feat = require('../models/Feat.model.js');

function addFeat(feat, callback) {
  console.log(feat)
  new Feat(feat).save(function(err, newFeat){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newFeat);
  })
}

function getFeat(featid, callback) {
  if (!featid) {
    var blankFeat = Feat();
    return callback(null, blankFeat);
  }
  Feat.findOne({_id: featid}, function(err, feat){
    if (err) return callback(err)
    
    return callback(null, feat);
   })
  
}

function getFeats(callback) {
  Feat.find({}, function(err, feats) {
    if (err) return callback(err);
    
    return callback(null, feats);
  });
}

function removeFeat(featid, callback) {
  console.log(featid);
  Feat.remove({_id: featid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateFeat(feat, callback) {
  var id = feat._id;
  delete feat._id;
  Feat.findByIdAndUpdate(id, feat, function(err, newFeat) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


function saveFeats(email, character, callback) {

}


module.exports = {
  addFeat: addFeat,
  getFeat: getFeat,
  getFeats: getFeats,
  removeFeat: removeFeat,
  saveFeats: saveFeats,
  updateFeat: updateFeat
};