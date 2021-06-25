// Spread operator 
const createTuple = (a, b, c, ...d) => {
    return [
        [a, c],
        [b, d]
    ];
}

const tuple = createTuple('It', 'be', 'could', 'anyone', 'no one'); // => [['It', 'could'], ['be', ['anyone, 'no one']]]

console.log(tuple);

// arguments keyword
// arguments are not working with arrow functions.. console log would throw error -> arguments undefined

const createTuple2 = function(a, b, c, ...d) {
    console.log(arguments); // ['It', 'be', 'could', 'anyone', 'no one']
    return [[a, c], [b, d]];
}

const tuple2 = createTuple2('It', 'be', 'could', 'anyone', 'no one');

console.log(tuple2);

// default parameters
// arguments wont save value of default parametar

const add = function(a, b=2) {
    console.log(arguments); // logs [3]
    return a+b;
}

add(3);

// exercise - rewrite above function in ES5

const add2 = function(a, b) {
    // if b exist value is b, if b dont exist value is 2
    b = b || 2;

    //if b exist value is 2
    // b = b && 2;

    console.log(arguments); // logs [3]
    return a+b;
}

add2(3);

// Array-Like Object

const constructArr = function() {
    // ES5
    // const arr = Array.prototype.slice.call(arguments);
    // ES6
    const arr = Array.from(arguments);
    // ['was', 'it', 'in']
    arr.push('the billiards room?');
    // ['was', 'it', 'in, 'the billiards room?']
    return arr.join(' ');
};

const arr = constructArr('was', 'it', 'in');

console.log(arr);
