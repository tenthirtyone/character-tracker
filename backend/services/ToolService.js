"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Tool = require('../models/Tool.model.js');

function addTool(tool, callback) {
  console.log(tool)
  new Tool(tool).save(function(err, newTool){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newTool);
  })
}

function getTool(toolid, callback) {
  if (!toolid) {
    var blankTool = Tool();
    return callback(null, blankTool);
  }
  Tool.findOne({_id: toolid}, function(err, tool){
    if (err) return callback(err)
    
    return callback(null, tool);
   })
  
}

function getTools(callback) {
  Tool.find({}, function(err, tools) {
    if (err) return callback(err);
    
    return callback(null, tools);
  });
}

function removeTool(toolid, callback) {
  console.log(toolid);
  Tool.remove({_id: toolid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateTool(tool, callback) {
  var id = tool._id;
  delete tool._id;
  Tool.findByIdAndUpdate(id, tool, function(err, newTool) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


module.exports = {
  addTool: addTool,
  getTool: getTool,
  getTools: getTools,
  removeTool: removeTool,
  updateTool: updateTool
};