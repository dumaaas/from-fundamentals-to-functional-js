// Filter and then map this data structure to get the names of the final suspects to send back to the team

const _ = {};

_.each = function (list, callback) {
    //
    if (Array.isArray(list)) {
        // loop throug array
        for (var i = 0; i < list.length; i++) {
            // call the callback with a list item
            callback(list[i], i, list);
        }

    } else {
        // loop through object
        for (var key in list) {
            // call the callback with a list item
            callback(list[key], key, list);
        }
    }

}

_.filter = function (arr, cb) {
    // create a new array
    const storage = [];

    // loop throug arr
    _.each(arr, function(item, i, list) {
        if (cb(item, i, list)) storage.push(item);
    });

    // return arr
    return storage;
}

_.map = function (list, callback) {
    // create an empty array to store
    var storage = [];

    // loopin'
    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list));
    });
    
    // return []
    return storage;
}



const videoData = [
    {
        name: 'Miss Scarlet', 
        present: true,
        rooms: [
            {kitchen: false},
            {ballrom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White', 
        present: false,
        rooms: [
            {kitchen: false},
            {ballrom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ] 
    },
    {
        name: 'Reverend Green', 
        present: true,
        rooms: [
            {kitchen: false},
            {ballrom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ] 
    },
    {
        name: 'Professor Plum', 
        present: true,
        rooms: [
            {kitchen: false},
            {ballrom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ] 
    }, 
    {
        name: 'Colonel Mustard', 
        present: false,
        rooms: [
            {kitchen: false},
            {ballrom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ] 
    }
];

const presentSuspects = _.filter(videoData, function(suspectObject) {
    return suspectObject.present;
});

console.log("Present suspects:");
console.log(presentSuspects);

const suspectsName = _.map(presentSuspects, suspect => {
    return suspect.name;
})

console.log("Suspects names:");
console.log(suspectsName);