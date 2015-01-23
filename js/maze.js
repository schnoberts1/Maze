Ball = function(spec)
{
    var that = {x: spec.x, y: spec.y, canvas: spec.canvas};

    that.draw = function () {
        var canvas = this.canvas;
        var context = canvas.getContext('2d');

        context.beginPath();
        context.fillStyle = '#0000ff';

        // x,y,radius,startAngle,endAngle,anticlockwise
        context.arc(this.x, this.y, 32, 0, Math.PI * 2);
        context.closePath();
        context.fill();
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




