
// Implementing from 

const _ = {};

_.from = arr => {
    return Array.prototype.slice.call(arr);
}

const constructArr = function() {

    const arr = _.from(arguments);
    // ['was', 'it', 'in']
    arr.push('the billiards room?');
    // ['was', 'it', 'in, 'the billiards room?']
    return arr.join(' ');
};

const arr = constructArr('was', 'it', 'in');

console.log(arr);