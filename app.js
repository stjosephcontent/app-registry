"use strict";

var SwaggerExpress = require("swagger-express-mw");

var app = require("express")(),
   appReg = require("./api/helpers/AppReg.js");

module.exports = app; // for testing

appReg.init({}, function (d) {
   console.log("appReg initialized.");
});

var config = {
   appRoot: __dirname // required config
};

// Enable CORS
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH, OPTIONS");
   res.header("Access-Control-Expose-Headers", "x-auth-simple, Origin, X-Requested-With, Content-Type, Accept, api_key, Authorization");
   res.header("Access-Control-Allow-Headers", "x-auth-simple, Origin, X-Requested-With, Content-Type, Accept, api_key, Authorization");
   next();
});


SwaggerExpress.create(config, function (err, swaggerExpress) {
   if (err) { throw err; }
   
   // install middleware
   swaggerExpress.register(app);
   
   // Custom error handler that returns JSON
   app.use(function (err, req, res, next) {
      if (typeof err !== 'object') {
         // If the object is not an Error, create a representation that appears to be
         err = {
            message: String(err) // Coerce to string
         };
      } else {
         // Ensure that err.message is enumerable (It is not by default)
         Object.defineProperty(err, 'message', { enumerable: true });
      }
      
      // Return a JSON representation of #/definitions/ErrorResponse
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(err));
   });
   var port = process.env.PORT || 10010;
   port = 10010; // to-do get from swagger file 
   app.listen(port);
   
   console.log("try this:\ncurl http://127.0.0.1:" + port + "/hello?name=Scott");
});
