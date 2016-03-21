"use strict";

var logger = require("../common/logger");
var Skill = require('../models/Skill.model.js');

function addSkill(skill, callback) {
  console.log(skill)
  new Skill(skill).save(function(err, newSkill){
    if (err) return callback(err);
    console.log('new item');
    return callback(null, newSkill);
  })
}

function getSkill(skillid, callback) {
  if (!skillid) {
    var blankSkill = Skill();
    return callback(null, blankSkill);
  }
  Skill.findOne({_id: skillid}, function(err, skill){
    if (err) return callback(err)
    
    return callback(null, skill);
   })
  
}

function getSkills(callback) {
  Skill.find({}, function(err, skills) {
    if (err) return callback(err);
    
    return callback(null, skills);
  });
}

function removeSkill(skillid, callback) {
  console.log(skillid);
  Skill.remove({_id: skillid}, function(err){
    
      return callback(null, {success: true});      
  });
}

function updateSkill(skill, callback) {
  var id = skill._id;
  delete skill._id;
  Skill.findByIdAndUpdate(id, skill, function(err, newSkill) {
    if (err) return callback(err);
    
    return callback(null, {success: true});
  });
  
}


function saveSkills(email, character, callback) {

}


module.exports = {
  addSkill: addSkill,
  getSkill: getSkill,
  getSkills: getSkills,
  removeSkill: removeSkill,
  saveSkills: saveSkills,
  updateSkill: updateSkill
};