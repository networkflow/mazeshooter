/*
 * sock.js
 *
 * David Wise
 */

var requirejs = require('./r.js');

requirejs(['dgram', './globals.js'], 
function(dgram, Globals) {
    var sock = dgram.createSocket('udp4');
    sock.on('listening', function () {
	var address = sock.address();
	console.log('UDP Server listening on ' + address.address + ":" + address.port);
    });
    
    sock.on('message', function (message, remote) {
	console.log(remote.address + ':' + remote.port +' - ' + message);
	var classname = message.constructor.classname;
	if (classname === 'ConnectMessage') {
	    console.log('Received connect message with id ' + message.id);
	}
    });
    sock.bind(Globals.PORT, '10.0.0.16');
});
