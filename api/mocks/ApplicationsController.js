"use strict";

var util = require("util"),
   mockData = require("./mock-data.json");

module.exports = {
   ReadApplications: ReadApplications
};

function ReadApplications(req, res, next) {
   var json = [mockData.ApplicationResponse];
   res.json(json);
}


function ReadApplication(req, res, next) {
   res.status(200).json(mockData.ApplicationRequeset);
}

function CreateAplication(req, res, next) {
   res.status(501);
}

function UpdateApplication(req, res, next) {
   res.status(501);
}

function CreateApplicationRef(req, res, next) {
   res.status(501);
}

function UpdateApplicationRef(req, res, next) {
   res.status(501);
}

function CreateApplicationRefTarget(req, res, next) {
   res.status(501);
}

function UpdateApplicationRefTarget(req, res, next) {
   res.status(501);
}


var hosts = {
   "prod": {
      "cnames": ["brandstem.ca", "www.brandstem,ca"],
      "host": "ecs-production-cluster.sjc.io"
   },
   "stage": {
      "host": "ecs-staging-cluster.sjc.io",
      "cnames": ["stage.sjc.io"]
   } ,
   "develop": {
      "host": "localhost"
   },
   "integration": {
      "host": "integration.sjc.io"
   }
}