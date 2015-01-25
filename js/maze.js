////////////////////////////////


/**
 * A maze with one pacman and no walls!
 */
Maze = function (spec) {
    var self = {canvas: $(spec.target)[0], keyResponders: {}, pacman: undefined};

    self.keyDown = function (e) {
        var handler = this.keyResponders[e.keyCode];

        if (handler) {
            handler();
        }

        e.preventDefault();
    };

    self.onDeviceOrientation = function (e)
    {
        var alpha = event.alpha;
        var beta = event.beta;
        var gamma = event.gamma;

        var minDelta = 10;

        if (gamma > minDelta)
        {
            self.right();
        }
        else if (gamma < -minDelta)
        {
            self.left();
        }
        else if (beta > minDelta)
        {
            self.down();
        }
        else if (beta < -minDelta)
        {
            self.up();
        }

    }

    self.pacman = Pacman({x: 100, y: 100, canvas: self.canvas});
    self.pacman.draw();

    self.keyResponders = {37: self.pacman.left, 38: self.pacman.up, 39: self.pacman.right, 40: self.pacman.down};

    // If the browser supports detection of device motion events we'll use them, otherwise
    // we'll use keys.
    if (window.DeviceMotionEvent)
    {
        window.addEventListener("deviceorientation", self.onDeviceOrientation, false);
    }
    else
    {
        $("body").keydown(function (e) {
            self.keyDown(e);
        });
    }


    return self;
};




