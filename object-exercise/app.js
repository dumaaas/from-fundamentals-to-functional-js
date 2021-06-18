// Create an object using bracket and dot notation that represents the characters and related data you may find in game of Clue.

var game = {};

game.murderer = "??"; // with dot notation

game['weapons'] = [
    {type: 'lasers', location: 'lab'}, 
    {type: 'angry cats', location: 'living room'}, 
    {type: 'dish soap', location: 'kitchen'}
]; // without dot notation

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');

