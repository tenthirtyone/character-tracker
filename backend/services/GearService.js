"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Gear = require('../models/Gear.model.js');

function getGear(gearid, callback) {
  if (!gearid) {
    var blankGear = Gear();
    return callback(null, blankGear);
  }
  return callback({success: false, err: 'stubbed'});
}


function saveGear(email, character, callback) {

}


module.exports = {
  getGear: getGear,
  saveGear: saveGear
};