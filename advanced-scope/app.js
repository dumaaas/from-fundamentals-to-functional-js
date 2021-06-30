// Advanced Scope

// const clueAlert = () => {
//     const x = "Help! I think I found a clue!";
//     const alerter = () => {
//         alert(x);
//     }
//     setTimeout(alerter, 1000);
//     console.log('what happens first? this log or the alert?');
// };

// clueAlert();

// Advanced Scope 2

const myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    };
    return alerter;
};


// we are declaring value of myAlert to funcAlert
const funcAlert = myAlert();
const funcAlert2 = myAlert();

// we are executing only body of myAlert so count everytime increment
funcAlert(); // Help! I think I found a clue! 1
funcAlert(); // Help! I think I found a clue! 2 
funcAlert(); // Help! I think I found a clue! 3
funcAlert2(); // Help! I think I found a clue! 1

// Closure Demonstration

const newClue = (name) => {
    const length = name.length;

    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    };
};

const didGreenDoItWithA = newClue('Green');
const didHe = didGreenDoItWithA('candlestick');
console.log(didHe);

// Closure Demonstation 2

function countClues() {
    var n = 0;
    return {
        count: function() { return ++n; },
        reset: function() { return n=0; }
    };
};

// ES6 equivalent for above

const countCluesES6 = () => {
    let n = 0;
    return {
        count: () => n++,
        reset: () => n=0
    }
}

// Closure RECIPE

// 1. Create your parent function // function checkscope() {
// 2. define some variables in    // var innerVar = "local scope";
// the parent's local scope
// (this can be accessed by the
// child function)
// 3. define a function inside    // function innerFunc() {
// the parent function. We call   //    return innerVar;
// this a child.                  // };
// 4. return that function from   // return innerFunc;
// inside the parent function     // }; 

// Closure Execution

// 1. Run parent function and     // var scope = "global scope";
// save to a variable. This       // function checkscope() {
// variable will hold whatever    //    var scope = "local scope";
// that function returns          //    function innerFunc() {
// 2. Optional: check what        //        return scope;
// that variable holds as its     //    };
// value. (Hint: it should be     // return innerFunc;
// the inner function)            // };
// 3. Run the inner function      // var test = checkscope(); -> (1)
// 4. What happens??              // test; -> (2)
                                  // test(); -> (3)

// Gotcha!

const findSomeone = () => {
    const speak = () => {
        console.log(who);
    };

    let who = "Why hello there, Prof Plum!";

    return speak;
};

const someoneSpeak = findSomeone();
someoneSpeak(); // Why hello there, Prof Plum!

// Closure - Timer!

const makeTimer = () => {
    console.log('Initialized');
    let elapsed = 0;
    console.log(elapsed);

    const stopwatch = () => { 
        console.log('stopwatch');
        return elapsed; 
    };

    const increase = () => elapsed++;

    setInterval(increase, 1000);

    return stopwatch;    
};

