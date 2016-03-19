"use strict";

var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var atob = require('atob');
var request = require('superagent');
var Character = require('../models/Character.model.js');
var Account = require('../models/Account.model.js');

function saveCharacterToUser(email, character, callback) {
  Account.find({email: email}, function(err, account) {
    console.log(account);
  })
}

function getCharactersForUser(email, callback) {
  
}

function getCharacter(characterid, callback) {
  if (!characterid) {
    var blankCharacter = Character();
    return callback(null, blankCharacter);
  }
  
  return callback({success: false, err: 'stubbed'});
}

module.exports = {
  getCharactersForUser: getCharactersForUser,
  getCharacter: getCharacter
};