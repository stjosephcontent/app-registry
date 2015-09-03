"use strict"

var mongoWrapper = require("./MongoWrapper.js");

var ApplicationModel = function (data) {
   var self = this;
}

ApplicationModel.init = function (options) {
   var self = this;
   return new Promise(function (resolve, reject) {      
      resolve("ApplicationModel initialized.");
   });
}

// Static methods

ApplicationModel.create = function (applicationObject) {
   // For now assumes we have a correct Application object passed in from the controller. We can add Swagger validation here later if necessary.
   return new Promise(function (resolve, reject) {
      mongoWrapper.db.collection("Applications").insert(applicationObject, function (err, result) {
         if (err) {
            reject(err);
         }
         else {
            resolve(result);
         }
      });
   });
}

ApplicationModel.readAll = function () {
   return new Promise(function (resolve, reject) {
      mongoWrapper.db.collection("Applications").insert(applicationObject, function (err, result) {
         if (err) {
            reject(err);
         }
         else {
            resolve(result);
         }
      });
   });
}

// Instance Methods

ApplicationModel.prototype.data = {}
module.exports = ApplicationModel;