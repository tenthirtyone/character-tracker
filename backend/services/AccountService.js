"use strict";

var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var atob = require('atob');
var request = require('superagent');
var Account = require('../models/Account.model.js')

function createAccount(accountInfo, callback) {
  Account.count({email: accountInfo.email}, function(err, total){
    if (err) return callback({success: false, err: err});
    if (total > 0) return callback({success: false, err: 'Email already registered'});

    var newAcct = Account({
      email: accountInfo.email,
      password: accountInfo.password
    });

    newAcct.save(function(err) {
      if (err) return callback({success: false, err: err});
      return callback(false, {success: true, msg: 'New User Created'});
    });
  })
}

function getAccount(email, callback) {
  Account.find({email: email}, function(err, account) {
    if (err) return callback({success: false, err: err});
    
    return callback(false, {success: true, account: account});
  })
}

module.exports = {
  createAccount: createAccount,
  getAccount: getAccount
};