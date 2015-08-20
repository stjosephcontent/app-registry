"use strict";

var util = require("util");

module.exports = {
   ReadApplications: ReadApplications
};

function ReadApplications(req, res, next) {
   //var name = req.swagger.params.name.value || 'stranger';
   //var hello = util.format('Hello, %s!', name);
   
   res.json();
}