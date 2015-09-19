"use strict"

var mongoWrapper = require("./MongoWrapper.js");
var toMongodb = require("jsonpatch-to-mongodb");

var ProjectModel = function (data) {
   var self = this;
}

ProjectModel.init = function (options) {
   var self = this;
   return new Promise(function (resolve, reject) {
      resolve("ProjectModel initialized.");
   });
}

// Static methods

ProjectModel.ReadAllProjects = function () {
   return new Promise(function (resolve, reject) {
      mongoWrapper.db.collection("Projects").find({}).toArray(function (err, projects) {
         if (err) {
            reject(err);
         }
         else {
            if (projects.length > 0) {
               resolve(projects);
            }
            else {
               reject(404);
            }
         }
      });
   });
}


ProjectModel.CreateProject = function (projectObject) {
   return new Promise(function (resolve, reject) {
      mongoWrapper.db.collection("Projects").insert(projectObject, function (err, result) {
         if (!err && result.ops.length > 0) {
            resolve(result.ops[0]);
         }
         else if (err.code = 11000) {
            console.error("ProjectModel.CreateProject({slug: %s}): Attempt to create duplicate.", projectObject.slug)
            reject(400.11000);
         }
         else {
            console.error("ProjectModel.CreateProject({slug: %s}): %s", proejctObject.slug, err);
            reject(err);
         }
      });
   });
}


ProjectModel.ReadProjectByPermalink = function (projectSlug) {
   return new Promise(function (resolve, reject) {
      mongoWrapper.db.collection("Projects").findOne({ "slug": projectSlug }, function (err, result) {
         if (err) {
            reject(err);
         }
         else {
            if (result) {
               resolve(result);
            }
            else {
               reject(404);
            }
         }
      });
   });
}


ProjectModel.PatchProjectByPermalink = function (projectSlug, patchObject) {
   return new Promise(function (resolve, reject) {

      var criteria = { "slug": projectSlug };
      var sort = {};      
      var update = toMongodb(patchObject);
      var options = { "new": true };

      mongoWrapper.db.collection("Projects").update(criteria, update, function (err, doc) {
         if (err) {
            console.log(err);
            reject(err);
         }
         else { 
            resolve(doc.value);
         }
      });
      
      //).then(function (doc) {
      //   resolve(doc);
      //}).catch(function (reason) { 
      //   reject(reason);   
      //});
   });
}


ProjectModel.DeleteProjectByPermalink = function (projectSlug) {
   return new Promise(function (resolve, reject) {
      mongoWrapper.db.collection("Projects").deleteOne({ "slug": projectSlug }).then(function (result) {
         if (result.deletedCount === 1) {
            resolve();
         }
         else {
            reject(404);
         }
      }).catch(function (reason) {
         console.error("ProjectModel.DeleteProjectBySlug(%s): %s", projectObject, reason);
         reject(reason);
      });
   });
}


// Instance Methods

ProjectModel.prototype.data = {}
module.exports = ProjectModel;