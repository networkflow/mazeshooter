/*
 * globals.js
 *
 * David Wise
 */

(function(exports) {

exports.PORT = 13964;

exports.EPS = 1e-8;
exports.fieldWidth = 500;
exports.fieldHeight = 500;

exports.bgColor = "#AAAAAA";
exports.fieldColor = "#EEEEEE";

exports.ballAcc = 1.5;
exports.ballRadius = 10;
exports.ballFriction = 0.95;

})(typeof exports === 'undefined' ? this.globals = {} : exports);