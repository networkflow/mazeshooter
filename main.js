/*
 * main.js
 *
 * David Wise
 */

var draw = function() {
    var ctx = canvas.getContext("2d");

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.setTransform(1, 0, 0, 1,
		     canvas.width / 2 - playerBall.x,
		     canvas.height / 2 - playerBall.y);
    ctx.fillStyle = fieldColor;
    ctx.fillRect(0, 0, fieldWidth, fieldHeight);
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
    }
};

var keyDown = function(e) {
    e = e || window.event;
    setKey(e.keyCode, true);
};

var keyUp = function(e) {
    e = e || window.event;
    setKey(e.keyCode, false);
}

var tick = function() {
    accx = 0
    accy = 0
    if (leftArrow) { accx -= 1; }
    if (rightArrow) { accx += 1; }
    if (downArrow) { accy += 1; }
    if (upArrow) { accy -= 1; }
    if (Math.abs(accx) > EPS &&
	Math.abs(accy) > EPS) {
	accx *= Math.sqrt(2) / 2;
	accy *= Math.sqrt(2) / 2;
    }
    accx *= ballAcc;
    accy *= ballAcc;
    playerBall.vx += accx;
    playerBall.vy += accy;

    playerBall.move();

    draw();
};

var playerBall = new Ball(100, 100);

var leftArrow = false;
var rightArrow = false;
var upArrow = false;
var downArrow = false;

window.onkeydown = keyDown;
window.onkeyup = keyUp;
setInterval(tick, 50);
