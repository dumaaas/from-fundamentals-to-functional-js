// Figure out which room no one claims to be the night of the murder from this data set 
const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'biliard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'biliard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'biliard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'biliard room': false},
            {library: false}
        ]
    },
]

const notInRoom = suspect => {
    // return an array of all the falses
    const emptyRooms = _.reduce(suspect.rooms, (memo, room) => {
        if(room === false) {

            memo.push(room);
        }
        return memo;
    }, []);

    return emptyRooms;
};


notInRooms = _.map(newDevelopment, notInRoom);

_.intersection(...notInRooms);

