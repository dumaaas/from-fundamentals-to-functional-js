// 1. Loop through an array

const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange",
            guilty: true
        }, 
        {
            name: "Miss Scarlet",
            color: "red",
            guilty: false
        }
    ]
}

function foo() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}

foo();


// 2. Loop through all the properties of the 
// suspect objects in the suspects array,
// mark them if u think they are guily

let guily = false;

var gameLoop = function(game) {
    for (var i=0; i < game.suspects.length; i++) {
        if(game.suspects[i].guilty === true) {
            console.log("Found 'em");
        } else {
            console.log("Nope");
        }
    }
}

gameLoop(game);

// 3. Destructure this nested data structure into
// two variables with the string 'red' and 'orange'

var suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, 
    {
        name: "Miss Scarlet",
        color: "red"
    }
]

// normal way
const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;

// destructured way 1
var [color1, color2] = [suspects[0].color, suspects[1].color];
console.log(color1, color2);

// destructured way 2
var [{color: firstColor1}, {color: secondColor1}] = suspects;
console.log(firstColor1, secondColor1);


