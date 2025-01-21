// Objects in JavaScript are collections of key-value pairs, where keys are strings or symbols.
// Values can be any datatype, including other objects, functions, arrays, or primitive types.

//const myObject = {
//    name: "John",
//    age: 30,
//    greet: function() {
//        console.log(`Hello, my name is ${this.name}!`);
//    },
//    interests: ["reading", "sports", "coding"]
//};
//
//myObject.greet(); // Example of using a method within the object
//console.log(myObject.interests[1]); // Accessing array property within the object

let course = {
    name: "Edgar Manuel Hernandez", // The 'name' property stores the string "Edgar Manuel Hernandez".
    age: 24, // The 'age' property stores the number 24.
    hours: 8, // The 'hours' property stores the number 8.
};

// Logging the entire 'course' object to the console.
console.log(course);

// Accessing and logging the value of the 'name' property of the 'course' object.
console.log(course.name);

// Updating the value of the 'name' property in the 'course' object using bracket notation.
course['name'] = 'James Smith'; // The 'name' property is now updated to "James Smith".

// Logging the updated value of the 'name' property to the console.
console.log(course.name);


