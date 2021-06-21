function CreateSuspectObject(name) {
    return {
        name: name,
        color: name.split(" ")[1],
        speak() {log("My name is ${name}");}
    }
}

var suspects = ["Miss Red", "Mr White", "Sinjor Brown"];

var suspectList = [];

// normal list iteration
// for(var i=0; i<suspects.length; i++) {
//     suspectList.push(CreateSuspectObject(suspects[i]));
// }

// with forEach
// suspects.forEach(function(name) {
//     suspectList.push(CreateSuspectObject(name));
// });

// with _.each
_.each(suspects, function(name) {
    suspectList.push(CreateSuspectObject(name));
});

console.log(suspectList);