"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Item = require('../models/Item.model.js');

function getItem(itemid, callback) {
  if (!itemid) {
    var blankItem = Item();
    return callback(null, blankItem);
  }
  return callback({success: false, err: 'stubbed'});
}


function saveItem(email, character, callback) {

}


module.exports = {
  getItem: getItem,
  saveItem: saveItem
};