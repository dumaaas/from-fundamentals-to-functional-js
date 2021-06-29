// Implement ._reduce 

const _ = {};

_.reduce = function (list, cb, initial) {
    // set memo value
    let memo = initial;
    // loop through list
    for (let i = 0; i < list.length; i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0]; 
            
        } else {
            // call the cb with arr[i], prev/initial
            memo = cb(list[i], memo); 
            console.log(memo);
        }
    }
    // return result
    return memo;
}

const reduceExample = _.reduce([1, 2, 3], (v, sum) => v + sum);
console.log(reduceExample);

// ._reduce examples

const reduceExample2 = _.reduce([1, 2], function (sum, n) {
    return sum + n;
}, 0); // => 3

console.log(reduceExample2);

const reduceExample3 = _.reduce({
    'a': 1,
    'b': 2,
    'c': 1
}, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {}); // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)

console.log(reduceExample3);