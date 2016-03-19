var express = require("express");
var config = require("config");
var async = require("async");
var router = express.Router();
var AuthService = require("../services/AuthService.js");
var CharacterService = require("../services/CharacterService.js");
var AccountService = require("../services/AccountService.js");
var AbilityScoreService = require("../services/AbilityScoreService.js");

module.exports = router;

router.get("/", function(req, res) {
  res.send('success');
});

router.get("/account", function(req, res) {
  AccountService.getAccount(req.headers.email, function(err, account) {
    if (err) res.status(400).send(err);
    
    res.send(account);
  }) 
})

router.post("/createAccount", function(req, res) {
  AccountService.createAccount(req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);  
  });
})

router.get("/abilityscores", function(req, res) {
  AbilityScoreService.getAbilityScores(function(err, result) {
    if (err) return res.status(400).send(err);
    
    res.send(result);
  })
})

router.get("/character", function(req, res) {
  CharacterService.getCharacter(req.body.characterid, function(err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result);
  })
})

router.get("/login", function(req, res) {
  AuthService.login(req.headers.authorization, function(err, token, result) {
    if (err) {
      res.status(401).json({error: err});
    } else {
      res.header({
        "Authorization": token
      });
      res.send(result);  
    };
  })
});