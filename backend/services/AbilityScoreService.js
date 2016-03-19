"use strict";

var config = require("config");
var logger = require("../common/logger");
var AbilityScore = require('../models/AbilityScore.model.js');

function getAbilityScores(callback) {
  return callback(null, AbilityScore());
}

module.exports = {
  getAbilityScores: getAbilityScores
};