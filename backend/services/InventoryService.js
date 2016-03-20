"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Inventory = require('../models/Inventory.model.js');

function getInventory(inventoryid, callback) {
  if (!inventoryid) {
    var blankInventory = Inventory();
    return callback(null, blankInventory);
  }
  return callback({success: false, err: 'stubbed'});
}


function saveInventory(email, character, callback) {

}


module.exports = {
  getInventory: getInventory,
  saveInventory: saveInventory
};