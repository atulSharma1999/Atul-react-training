var displayColors = function () {
    console.log(message);
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
var message = "List of Colors";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');
//# sourceMappingURL=tutorial13.js.map