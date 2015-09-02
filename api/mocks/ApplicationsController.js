/*
 * M O C K 
 */

"use strict";

var util = require("util"),
   mockData = require("../mocks/mock-data.json");

module.exports = {
   ReadApplications: ReadApplications,
   ReadApplication: ReadApplication,
   CreateApplication: CreateApplication,
   UpdateApplication: UpdateApplication,
   
   CreateApplicationRef: CreateApplicationRef,
   UpdateApplicationRef: UpdateApplicationRef,
   
   CreateApplicationRefTarget: CreateApplicationRefTarget,
   UpdateApplicationRefTarget: UpdateApplicationRefTarget
};

function ReadApplications(req, res, next) {
   var json = [mockData.ApplicationResponse];
   res.json(json);
}


function ReadApplication(req, res, next) {
   res.status(200).json(mockData.ApplicationRequest);
}

function CreateApplication(req, res, next) {
   res.status(200).json(mockData.ApplicationRequest);
}

function UpdateApplication(req, res, next) {
   res.status(200).json(mockData.ApplicationRequest);
}

function CreateApplicationRef(req, res, next) {
   res.status(200).json(mockData.ApplicationRequest);
}

function UpdateApplicationRef(req, res, next) {
   res.status(200).json(mockData.ApplicationRequest);
}

function CreateApplicationRefTarget(req, res, next) {
   res.status(200).json(mockData.ApplicationRequest);
}

function UpdateApplicationRefTarget(req, res, next) {
   res.status(200).json(mockData.ApplicationRequest);
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