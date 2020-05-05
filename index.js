
'use strict';

var moment = require('moment');

/**
 * Returns a string element with a footer and updating year
 * @param {string} name  //this means that the function expects a parameter, should be a type: string
 * @return {string}
 */
//below we have EXPORTS, & it is an object and it is used to export packages.
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};
// just added this for an update. To be continued.