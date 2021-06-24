// Filter the video data by the people who were present on the night of the murder

const _ = {};

_.filter = function (arr, cb) {
    // create a new array
    const storage = [];

    // loop throug arr
    for (let i = 0; i <= arr.length; i++) {
        // check if cb return true
        // if returns true, push into array
        if (cb(arr[i], i, arr) === true) {
            storage.push(arr[i]);
        }
        // if returns false, move on
    }

    // with _.each
    // _.each(arr, function(item, i, list) {
    //     if (cb(item, i, list)) storage.push(item);
    // });

    // return arr
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

console.log(presentSuspects);