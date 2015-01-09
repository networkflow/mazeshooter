/*
 * Globals.js
 *
 * David Wise
 */

define(function() {
    return {
	SERVER: '10.0.0.16', 
	PORT: 13964, 

	EPS: 1e-8, 
	fieldWidth: 500, 
	fieldHeight: 500, 
	
	bgColor: "#AAAAAA", 
	fieldColor: "#EEEEEE", 

	ballAcc: 1.5, 
	ballRadius: 10, 
	ballFriction: 0.95, 

	/*
	 * Returns a top-level variable or function given its identifier as a string.
	 * Can be used to get a constructor for a class from a string.
	 */
	varFromString: function(s) {
	    return (window || this)[s];
	}
    };
});
