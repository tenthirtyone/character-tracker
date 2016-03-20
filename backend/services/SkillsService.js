"use strict";

var config = require("config");
var logger = require("../common/logger");
var request = require('superagent');
var Skill = require('../models/Skill.model.js');

function getSkill(skillid, callback) {
  if (!skillid) {
    var blankSkill = Skill();
    return callback(null, blankSkill);
  }
  return callback({success: false, err: 'stubbed'});
}

function getSkills(skillsid, callback) {
  if (!skillsid) {
    var blankSkills = Skills();
    return callback(null, blankSkills);
  }
  return callback({success: false, err: 'stubbed'});
}


function saveSkills(email, character, callback) {

}


module.exports = {
  getSkills: getSkills,
  saveSkills: saveSkills
};