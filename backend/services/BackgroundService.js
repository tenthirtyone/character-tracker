"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Background = require('../models/Background.model.js');

function addBackground(background, callback) {
  console.log(background)
  new Background(background).save(function(err, newBackground){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newBackground);
  })
}

function getBackground(backgroundid, callback) {
  if (!backgroundid) {
    var blankBackground = Background();
    return callback(null, blankBackground);
  }
  Background.findOne({_id: backgroundid}, function(err, background){
    if (err) return callback(err)
    
    return callback(null, background);
   })
  
}

function getBackgrounds(callback) {
  Background.find({}, function(err, backgrounds) {
    if (err) return callback(err);
    
    return callback(null, backgrounds);
  });
}

function removeBackground(backgroundid, callback) {
  console.log(backgroundid);
  Background.remove({_id: backgroundid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateBackground(background, callback) {
  var id = background._id;
  delete background._id;
  Background.findByIdAndUpdate(id, background, function(err, newBackground) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


module.exports = {
  addBackground: addBackground,
  getBackground: getBackground,
  getBackgrounds: getBackgrounds,
  removeBackground: removeBackground,
  updateBackground: updateBackground
};