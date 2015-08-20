"use strict"

var path = require("path"), 
   basePath = path.dirname(require.main.filename);

// **Constructor**
 var appReg = function () {
   this.options = {};
}
module.exports = new appReg();
//module.exports = {
//   appReg: new appReg()
//};


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
appReg.prototype.init = function (options) {
   var self = this;
   this.options = options;
   
   //aws.config.update({
   //   accessKeyId: options.S3.AWS_ACCESS_KEY,
   //   secretAccessKey: options.S3.AWS_SECRET_KEY
   //});
   
   //var initPromises = [
   //   utils.init(options),
   //   AssetClass.init(options),
   //   ClientClass.init(options),
   //   CommentClass.init(options),
   //   ErrorClass.init(options),
   //   FolderClass.init(options),
   //   PermissionClass.init(options),
   //   ProjectClass.init(options),
   //   SimpleAuthClass.init(options.users),
   //   UserClass.init(options)
   //];
   //Promise.all(initPromises).then(function (ok) {
   //   cb(ok);
   //}).catch(function (reason) {
   //   console.error(reason);
   //});
}