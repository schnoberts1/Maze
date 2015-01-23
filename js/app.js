App = function (spec) {
    that = {maze: undefined, ball: undefined};

    that.bounce = function () {
        this.ball.move(this.ball.x + 1, this.ball.y + 1);
    };

    that.onReady = function () {
        this.maze = Maze({target: '#gameCanvas'});
        this.ball = this.maze.newBall();
        this.ball.draw();

        var This = this;

        setInterval(function () {
            This.bounce();
        }, 500);
    };

    $(document).ready(function () {
        that.onReady();
    });

    return that;
};