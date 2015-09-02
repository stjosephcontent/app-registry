"use strict";

var SwaggerExpress = require("swagger-express-mw"),
   app = require("express")(),
   nconf = require("nconf"),
   ApplicationModel = require("./api/helpers/ApplicationModel.js"),  
   MongoWrapper = require("./api/helpers/MongoWrapper.js");
   

module.exports = app; // for testing

nconf.file("./config.json");
var config = nconf.get();
config.appRoot = __dirname;


// Enable CORS
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH, OPTIONS");
   res.header("Access-Control-Expose-Headers", "x-auth-simple, Origin, X-Requested-With, Content-Type, Accept, api_key, Authorization");
   res.header("Access-Control-Allow-Headers", "x-auth-simple, Origin, X-Requested-With, Content-Type, Accept, api_key, Authorization");
   next();
});


MongoWrapper.init(config.db).then(function (result) {
   console.log(result);
})
.then(function () {
   var promises = [
      ApplicationModel.init(config)
   ];
   Promise.all(promises).then(function (results) {
      console.log(results);
   }).catch(function (reason) {
      console.error(reason);
   });
})
.catch(function (reason) {
   console.log(reason);
});

////.then(function (mongoWrapper) {
////   console.log(mongoWrapper);
////   var promises = [
////      ApplicationModel.init(config)
////   ]

//   // Todo: Should probably chain this such that SwaggerExpress.create does not run async to this method
//   Promise.all(promises).then(function (results) {
//      console.log(results);
//      resolve();
//   }).catch(function (reason) {
//      reject(reason);
//   });

//});

// Initialize all models

SwaggerExpress.create(config, function (err, swaggerExpress) {
   if (err) { throw err; }
   
   // install middleware
   swaggerExpress.register(app);
   
   // Custom error handler that returns JSON
   app.use(function (err, req, res, next) {
      if (typeof err !== "object") {
         // If the object is not an Error, create a representation that appears to be
         err = {
            message: String(err) // Coerce to string
         };
      } else {
         // Ensure that err.message is enumerable (It is not by default)
         Object.defineProperty(err, "message", { enumerable: true });
      }
      
      // Return a JSON representation of #/definitions/ErrorResponse
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(err));
   });
   
   var port = process.env.PORT || config.port;
   port = config.port;
   app.listen(port);
   console.log("Listening...");    
   console.log("try this:\ncurl http://127.0.0.1:" + port + "/api/v1/applications");
});