"use strict";

var logger = require("../common/logger");
var Class = require('../models/DnDClass.model.js');

function getClass(classid, callback) {
  if (!classid) {
    var blankClass = Class();
    return callback(null, blankClass);
  }
  return callback({success: false, err: 'stubbed'});
}


function saveClass(email, character, callback) {

}


module.exports = {
  getClass: getClass,
  saveClass: saveClass
};