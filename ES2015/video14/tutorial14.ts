
let displayColors = function(message: string, ...colors: string[]){

    console.log(message);
    console.log(colors);


    for(let i in colors){
        console.log(colors[i]);

    }
}

let message = "List of Colors"

let colorArray = ['Orange','Yellow','Indigo'];
displayColors(message, ...colorArray)