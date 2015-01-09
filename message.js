/*
 * messages.js
 *
 * David Wise
 */

define(['./globals'], 
function(Globals) {
    /* Message types */

    /*
     * Sent from the client to the server to indicate that a new window has been
     * created.
     */
    var ConnectMessage = function(id) {
	this.id = id;
    };

    /*
     * Sent from the client to the server to tell it the control decision the user
     * is currently making.
     */
    var ControlMessage = function(dir) {
	
    };

    /*
     * Sent from the server to the client to give it an updated state.
     */
    var StateMessage = function(balls) {
	this.balls = balls;
    };
    

    /* Seralization */
    
    var SerialWrapper = function(obj) {
	this.classname = obj.constructor.name;
	this.obj = obj;
	
	this.createObject = function() {
	    var obj = this.obj;
	    obj.prototype = Globals.varFromString(this.classname);
	};
    }

    var serialize = function(obj) {
	return JSON.stringify(new SerialWrapper(obj));
    };
    
    /*
     * Throws a syntax error when given an invalid string.
     */
    var deserialize = function(str) {
	return JSON.parse(str).createObject();
    };

    return {
	ConnectMessage: ConnectMessage,
	ControlMessage: ControlMessage, 
	StateMessage: StateMessage, 
	serialize: serialize, 
	deserialize: deserialize
    };
});
