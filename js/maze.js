Ball = function(spec)
{
    var that = {x: spec.x, y: spec.y, radius: 32, canvas: spec.canvas, oldx: undefined, oldy: undefined};

    that.draw = function () {
        var canvas = this.canvas;
        var context = canvas.getContext('2d');

        context.beginPath();
        if (this.oldx) {
            context.clearRect(this.oldx - this.radius, this.oldy - this.radius, this.radius * 2, this.radius * 2);
        }
        context.fillStyle = '#0000ff';

        // x,y,radius,startAngle,endAngle,anticlockwise
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    };

    that.move = function (x, y) {
        this.oldx = this.x;
        this.oldy = this.y;

        this.x = x;
        this.y = y;

        console.log("Move -> " + this.x + "," + this.y);

        this.draw();
    };

    return that;
};


Maze = function(spec)
{
    var that = {};

    that.canvas = $(spec.target)[0];

    that.newBall = function () {
        return Ball({x: 100, y: 100, canvas: this.canvas})
    };

    return that;
};




