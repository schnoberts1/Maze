////////////////////////////////


/**
 * A maze with one pacman and no walls!
 */
Maze = function (spec) {
    var self = {canvas: $(spec.target)[0], keyResponders: {}, pacman: undefined};

    self.keyDown = function (event) {
        var handler = this.keyResponders[event.keyCode];

        if (handler) {
            handler();
        }

        event.preventDefault();
    };

    self.pacman = Pacman({x: 100, y: 100, canvas: self.canvas});
    self.pacman.draw();

    self.keyResponders = {37: self.pacman.left, 38: self.pacman.up, 39: self.pacman.right, 40: self.pacman.down};

    self.onDeviceOrientation=function (event) {
        if (event.beta && event.gamma) {
            $("#log").text("Beta: " + event.beta + " Gamma: " + event.gamma);
        }
        else
        {
            $("#log").text("Garbage");
        }
    }

    if(window.DeviceOrientationEvent){
        $("#log").text("Tilt mode");
        window.addEventListener("deviceorientation",self.onDeviceOrientation)
    }
    else
    {
        $("body").keydown(function (e) {
            $("#log").text("Keyboard mode");
            self.keyDown(e);

        });
    }

    return self;
};




