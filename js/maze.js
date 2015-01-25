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

    self.pacman = Pacman({x: 100, y: 100, canvas: self.canvas});
    self.pacman.draw();

    self.keyResponders = {37: self.pacman.left, 38: self.pacman.up, 39: self.pacman.right, 40: self.pacman.down};

    $("body").keydown(function (e) {
        self.keyDown(e);
    });

    return self;
};




