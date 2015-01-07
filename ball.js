/*
 * ball.js
 *
 * David Wise
 */

define(['Globals'], 
function(Globals) {
    var Ball = function(x, y) {
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.radius = Globals.ballRadius;
	this.friction = Globals.ballFriction;
    };

    Ball.prototype.move = function() {
	this.vx *= this.friction;
	this.vy *= this.friction;

	this.x += this.vx;
	this.y += this.vy;

	if (this.x - this.radius < 0) {
	    this.x = -(this.x - this.radius) + this.radius;
	    this.vx = -this.vx;
	} else if (this.x + this.radius > Globals.fieldWidth) {
	    this.x = Globals.fieldWidth - (this.x + this.radius - globals.fieldWidth) - this.radius;
	    this.vx = -this.vx;
	}
	if (this.y - this.radius < 0) {
	    this.y = -(this.y - this.radius) + this.radius;
	    this.vy = -this.vy;
	} else if (this.y + this.radius > Globals.fieldHeight) {
	    this.y = Globals.fieldHeight - (this.y + this.radius - globals.fieldHeight) - this.radius;
	    this.vy = -this.vy;
	}
    };

    Ball.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
	ctx.fillStyle = "#AACCFF";
	ctx.fill();
    };

    return {
	Ball: Ball
    };
});
