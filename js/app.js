App = function (spec) {
    var self = {maze: undefined, ball: undefined};

    self.onReady = function () {
        self.maze = Maze({target: '#gameCanvas'});
    };

    $(document).ready(function () {
        self.onReady();
    });

    return self;
};