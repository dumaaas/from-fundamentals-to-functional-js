function CreateSuspectObject(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {console.log(`My name is ${name}`);}
    };
};

var suspects = ['Miss Red', 'Mr White', 'Mr Blue'];

var suspectsList = _.map(suspects, function(name) {
    return CreateSuspectObject(name);
});

_.each(suspectsList, function(suspect) {
    suspect.speak();
});

