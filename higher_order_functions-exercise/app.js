// 1. Takes a functions as an input (argument)

element.addEventListener("change", () => {
    console.log("Our evidence is updated");
});

// 2. Returns a function as the output

const newClue = (name) => {
    const length = name.length;

    return (weapon) => {
        let clue = length + weapon.length;
        return !! (clue % 1);
    };
};

// 3. Callbacks

const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
};

ifElse(true, 
    () => { console.log(true); },
    () => { console.log(false); }
);

// above will log true
 
// same as above 
const logTrue = () => { console.log(true); };
const logFalse = () => { console.log(false); };

ifElse(true, logTrue, logFalse);

// 4. Passing arguments

var increment = function(n) { return n+1; };

var square = function(n) { return n*n; };

var doMathSoIDontHaveTo = function(n, func) { return func(n); };

doMathSoIDontHaveTo(5, square); // 25

doMathSoIDontHaveTo(4, increment); // 5

// 5. Translate 4. into ES6

var increment1 = n => { return n+1; };

var square1 = n => { return n*n; };

var doMathSoIDontHaveTo1 = (n, func) => { return func(n); };

doMathSoIDontHaveTo1(4, square); // 16

doMathSoIDontHaveTo1(5, increment); // 5

// 6. How do we pass arguments?

const ifElse1 = (condition, isTrue, isFalse, p) => {
    return condition ? isTrue(p) : isFalse(p);
};

ifElse1(true, fn1, fn2, 'HI');

// multiple arguments

const ifElse2 = (condition, isTrue, isFalse, ...args) => {
    console.log([]);
    return condition ? isTrue(...args) : isFalse(...args);
};

ifElse2(true, fn1, fn2, 'HI', 'BYE', 'HOLA');

// multiple arguments - How was this done pre-ES6?

const ifElse3 = (condition, isTrue, isFalse) => {
    const args = [].slice.call(arguments, 3)
    return condition ? isTrue.apply(this, args) : isFalse.apply(this, args);
};

const logTrue3 = (msgs) => { console.log(msgs); };
const logFalse3 = (msgs) => {console.log(msgs); };

const heh = ifElse3(true, logTrue3, logFalse3, 'a', 'b', 'c'); // ['a', 'b', 'c'];


