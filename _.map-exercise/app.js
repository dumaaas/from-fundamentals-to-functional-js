// 1. Take the weapon list and break them off using map

const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function (item) {
    return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken);

console.log(brokenWeapons);

// 2. Implementing _.map functionality

const __ = {};

__.map = function (list, callback) {
    // create an empty array to store
    var storage = [];
    // loopin'
    // for (var i = 0; i < list.length; i++) {
    //     // callback(element)
    //     // push it to our array
    //     storage.push(callback(list[i], i, list));
    // }

    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list));
    });
    
    // return []
    return storage;
}

const mapExample = __.map([1,2,3], function(val) {return val+1});

console.log(mapExample);