/**
 * Common JavaScript pattern for "objects" in JavaScript.
 * We create a function named after the class, i.e. App in this instance.
 * It's job is to return a new instance of "App".
 */
App = function (spec) {
    ////////////////////////////////
    // Define member variables
    var self = {maze: undefined, ball: undefined};

    ////////////////////////////////
    // Define member functions (methods)

    /**
     * When the browser has loaded the page we need to set-up our 'maze'.
     * This is the event handler responsible for that.
     */
    self.onReady = function () {
        self.maze = Maze({target: '#gameCanvas'});
    };

    ////////////////////////////////
    // Extra initialisation work

    // Set the 'on ready' handler for the document so it calls
    // our handler above.
    $(document).ready(function () {
        self.onReady();
    });

    // Return the initialised object
    return self;
};