"use strict";

var config = require('config');
var express = require('express');
var cors = require('cors');
var helmet = require('helmet');
var winston = require('winston');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var Path = require('path');
var bodyParser = require('body-parser');
var logger = require('./common/logger');
var createDomain = require('domain').create;
var app = express();
var mongoose = require('mongoose')

app.set('port', config.WEB_SERVER_PORT);
mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var corsOptions = {
  origin: 'http://localhost',
  exposedHeaders: 'Authorization'
};

app.use(cors(corsOptions));
app.use(helmet());

app.use(morgan('dev'));

app.use("/api", require("./controllers/APIController")); 


app.use(function (req, res) {
    res.status(404).json({error: "route not found"});
});

app.use(function (err, req, res, next) {//jshint ignore:line
    logger.logFullError(err, req.method + " " + req.url);
    res.status(err.httpStatus || 500).json({
        error: err.message
    });
});

app.get('/*', function (req, res, next) {
  
  if (req.url.indexOf("/img/*") === 0) {
    res.setHeader("Cache-Control", "public, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  }
  next();
});

app.listen(app.get('port'), function() {
  winston.info('Express server listening on port %d',
              app.get('port'));
});