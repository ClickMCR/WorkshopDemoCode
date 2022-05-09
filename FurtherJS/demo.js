// create an array
var myArray = ["Dan", "Asa", "Saadia", "Rachael", "Drew"];

// Get the first element of an array.
// Remember, we count from zero in JavaScript!
console.log( myArray[0] )

// Access a specific element (this is the fourth item)
console.log( myArray[3] )

// Add an element to the end of an array
myArray.push("Rachael");
console.log(myArray);

// Remove the last element of an array
console.log(myArray.pop());
console.log(myArray);

// Remove specific elements using splice()
// First number is the array index you're starting from
// Second number is the amount of items you're removing
console.log("Removing: " + myArray.splice(3, 1));
console.log(myArray);


// A simple for loop that counts to 100
for(var i = 0; i < 100; i++) {
    console.log(i);
}

// A loop that calls a function every time it loops
for(var i = 0; i < myArray.length; i++) {
    greet(myArray[i]);
}

function greet(username) {
    console.log("Hello, " + username);
}

// Putting it all together, using a loop to iterate over an array
var namesArray = ["Dan", "Asa", "Drew", "Rachael", "Saadia"]

for(var i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}

