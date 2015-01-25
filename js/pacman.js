/**
 * Created by Fryer on 24/01/2015.
 */

/**
 * A pacman on the screen.
 */
Pacman = function (spec) {
    var self = {x: spec.x,
                y: spec.y,
                radius: 32,
                canvas: spec.canvas,
                step: 4,
                oldx: undefined,
                oldy: undefined,
                pacmanClosed:true,
                direction: undefined};

    self.draw = function () {
        var canvas = self.canvas;
        var context = canvas.getContext('2d');

        context.beginPath();
        if (self.oldx) {
            context.clearRect(self.oldx - self.radius - 1, self.oldy - self.radius - 1, self.radius * 2 + 2, self.radius * 2 + 2);
        }
        context.fillStyle = '#0000ff';
        if(self.pacmanClosed)
        {
            context.arc(self.x, self.y, self.radius,(Math.PI / 180) * 10 + self.direction, (Math.PI / 180) * 350 + self.direction);
            context.lineTo(self.x, self.y)
//            context.arc(self.x, self.y, self.radius,0,2*Math.PI)
        }
        else
        {
            context.arc(self.x, self.y, self.radius,(Math.PI / 180) * 40 + self.direction, (Math.PI / 180) * 320 + self.direction);
            context.lineTo(self.x, self.y)
        }

        context.fill();
        context.closePath();

    };

    self.move = function (x, y) {
        self.pacmanClosed = !self.pacmanClosed

        self.oldx = self.x;
        self.oldy = self.y;

        self.x = x;
        self.y = y;

        self.draw();
    };

    self.left = function () {
        self.direction = Math.PI;
        self.move(self.x - self.step, self.y);
    };

    self.right = function () {
        self.direction = 0;
        self.move(self.x + self.step, self.y);
    };

    self.up = function () {
        self.direction = 1.5 * Math.PI;
        self.move(self.x, self.y - self.step);
    };

    self.down = function () {
        self.direction = Math.PI / 2;
        self.move(self.x, self.y + self.step);
    };

    return self;
};
