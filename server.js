/*
 * sock.js
 *
 * David Wise
 */

requirejs(['dgram', './Globals.js'], 
function(dgram, Globals) {
    var sock = dgram.createSocket('udp4');
    sock.on('listening', function () {
	    var address = sock.address();
	    console.log('UDP Server listening on ' + address.address + ":" + address.port);
	});
    
    sock.on('message', function (message, remote) {
	    console.log(remote.address + ':' + remote.port +' - ' + message);
	});
    sock.bind(Globals.PORT, '10.0.0.16');
});
