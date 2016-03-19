"use strict";

var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var atob = require('atob');
var request = require('superagent');
var loginURL = config.OB_URL + '/login';
var token;
var cookie;

init();

function init() {
  
}

function checkToken(userToken, callback) {
  if (!token) {
    return callback({success: false, msg: 'Auth failed, missing valid token'});
  }
  if (userToken === token) {
    //Enable this to exchange tokens each time
    //FE will need requests changed to work properly.
    //token = jwt.sign({ email: config.email }, config.SECRET_SEED);
    return callback(null, {success: true, token: token});
  } else {
    return callback({success: false, msg: 'Auth failed, missing valid token'});
  }
}

function getCookie() {
  return cookie;
}

function getOBCookie(callback) {
  console.log('Getting Open Bazaar Cookie');
  request
  .post(loginURL)
  .type('form')
  .send({email: config.OBemail, password: config.OBPASSWORD})
  .end(function(err, res){
    if (err) {
      console.log('error', err);
      return callback({success: false, msg: 'getOBCookie failed, check OB Backend'});
    }
    return callback(null, res.headers);
  });
}

function getToken() {
  return token;
}

function login(authData, callback) {  
  var authParams = authData.split(' ');
  
  if (authParams[0] !== 'Basic') {
    return callback({success: false, msg: 'Login failed, bad Auth type'})
  }
  
  if (atob(authParams[1]) !== config.email + ':' + config.PASSWORD) {
    return callback({success: false, msg: 'Auth failed, credentials failed.'});
  } else {
    token = jwt.sign({ email: config.email }, config.SECRET_SEED);
    return callback(null, token);
  }
}

module.exports = {
  getCookie: getCookie,
  getToken: getToken,
  login: logger.wrapFunction(login),
  checkToken: logger.wrapFunction(checkToken)
};