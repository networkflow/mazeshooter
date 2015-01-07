/*
 * main.js
 *
 * David Wise
 */

requirejs(['./ball.js', './globals.js'], 
function(Ball, Globals) {
    var canvas = document.getElementById("game");

    var draw = function() {
	var ctx = canvas.getContext("2d");
	
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = Globals.bgColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.setTransform(1, 0, 0, 1,
			 canvas.width / 2 - playerBall.x,
			 canvas.height / 2 - playerBall.y);
	ctx.fillStyle = Globals.fieldColor;
	ctx.fillRect(0, 0, Globals.fieldWidth, globals.fieldHeight);
	playerBall.draw(ctx);
    };

    var setKey = function(keyCode, value) {
	switch (keyCode) {
	case 37:
            leftArrow = value;
            break;
	case 38:
	    upArrow = value;
	    break;
	case 39:
	    rightArrow = value;
	    break;
	case 40:
	    downArrow = value;
	    break;
	default:
	    return true;
	}
	return false;
    };

    window.onkeydown = function(e) {
	e = e || window.event;
	return setKey(e.keyCode, true);
    };

    window.onkeyup = function(e) {
	e = e || window.event;
	return setKey(e.keyCode, false);
    };

    window.onload = function(e) {

    };

    var tick = function() {
	accx = 0
	accy = 0
	if (leftArrow) { accx -= 1; }
	if (rightArrow) { accx += 1; }
	if (downArrow) { accy += 1; }
	if (upArrow) { accy -= 1; }
	if (Math.abs(accx) > Globals.EPS &&
	    Math.abs(accy) > Globals.EPS) {
	    accx *= Math.sqrt(2) / 2;
	    accy *= Math.sqrt(2) / 2;
	}
	accx *= Globals.ballAcc;
	accy *= Globals.ballAcc;
	playerBall.vx += accx;
	playerBall.vy += accy;

	playerBall.move();

	draw();
    };

    var playerBall = new Ball.Ball(100, 100);

    var leftArrow = false;
    var rightArrow = false;
    var upArrow = false;
    var downArrow = false;

    setInterval(tick, 50);
});