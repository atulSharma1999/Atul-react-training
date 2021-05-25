
let displayColors = function(){

    console.log(message);

    for(let i in arguments){
        console.log(arguments[i]);

    }
}

let message = "List of Colors"

displayColors(message, 'Red');
displayColors(message, 'Red','Blue');
displayColors(message, 'Red','Blue','Green');