// _.curry 

const curry = (fn) => {    // function is ab
    return (arg) => {      // 1
        return (arg2) => { // 2
            return fn(arg, arg2);
        };
    };
}

var ab = function (a, b) {
    return [a, b];
};

var curried = curry(ab);

var curriedFinal = curried(1)(2) 

console.log(curriedFinal); // => [1, 2]

// _.composer

const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg);
        return fn(result);
    }
}

const consider = (name) => {
    return `I think it could be ... ${name}`;
};

const exclaim = (statement) => {
    return `${statement.toUpperCase()} !`;
};

const blame = compose(consider, exclaim);

const blameWho = blame('you');

console.log(blameWho);

// THE MURDER IS YOU GUYS COZ U KILLED IT! 

// BIANCA GANDO LADIES AND GENTLEMEN!