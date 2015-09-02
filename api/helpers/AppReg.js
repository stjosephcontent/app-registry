"use strict"

var DatabaseModel = require("./MongoWrapper.js"),
   ApplicationModel = require("./ApplicationModel.js");

// **Constructor**
var appReg = function () {
   this.options = {};
}
module.exports = new appReg();


/* ##theprojecthive.prototype.init
 * 
 * Initializes the class. Should only be called once when the application starts. Calling again could lead to instability.
 * 
 * returns: callback
 * 
 * parameters:
 * - *options*: object containing customization parameters.
 * - *cb*: callback function
 * - - - 
 */
appReg.init = function (options) {
   var self = this;
   
   return new Promise(function (resolve, reject) {      
      
      var promises = [
         ApplicationModel.init(options),
         DatabaseModel.init(options.db)
      ]
      
      Promise.all(promises)
      .then(function (results) { 
         console.log(results);
         resolve();
      })
      .catch(function () { 
         reject();
      });

   });
}


module.exports = appReg;