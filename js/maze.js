Ball = function (spec) {
    var self = {x: spec.x, y: spec.y, radius: 32, canvas: spec.canvas, step: 4, oldx: undefined, oldy: undefined};

    self.draw = function () {
        var canvas = this.canvas;
        var context = canvas.getContext('2d');

        context.beginPath();
        if (self.oldx) {
            context.clearRect(self.oldx - self.radius - 1, self.oldy - self.radius - 1, self.radius * 2 + 2, self.radius * 2 + 2);
        }
        context.fillStyle = '#0000ff';

        // x,y,radius,startAngle,endAngle,anticlockwise
        context.arc(self.x, self.y, self.radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    };

    self.move = function (x, y) {
        self.oldx = self.x;
        self.oldy = self.y;

        self.x = x;
        self.y = y;

        self.draw();
    };

    self.left = function () {
        self.move(self.x - self.step, self.y);
    };

    self.right = function () {
        self.move(self.x + self.step, self.y);
    };

    self.up = function () {
        self.move(self.x, self.y - self.step);
    };

    self.down = function () {
        self.move(self.x, self.y + self.step);
    };

    return self;
};


Maze = function (spec) {
    var self = {canvas: $(spec.target)[0], keyResponders: {}, ball: undefined};

    self.newBall = function () {
        return Ball({x: 100, y: 100, canvas: this.canvas})
    };

    self.keyDown = function (e) {
        var handler = this.keyResponders[e.keyCode];

        if (handler) {
            handler();
        }
    };

    self.ball = self.newBall();
    self.ball.draw();

    self.keyResponders = {37: self.ball.left, 38: self.ball.up, 39: self.ball.right, 40: self.ball.down};

    $("body").keydown(function (e) {
        self.keyDown(e);
    });

    return self;
};




