// A function in JavaScript is a block of reusable code that performs a specific task. Functions are defined with the "function" keyword, can take parameters, and return a value.

//function add(a, b) {
//    return a + b;
//}
//
//function greet(name) {
//    return `Hello, ${name}!`;
//}
//
//function multiply(x, y) {
//    return x * y;
//}

function sayHi(name){
    return console.log('Hi! ' + name);
}

sayHi('Luis');

// Function Declaration: A named function defined using the `function` keyword.
function add(a, b) {
    return a + b;
}

// Function Expression: An anonymous or named function assigned to a variable.
const subtract = function(a, b) {
    return a - b;
};

// Arrow Function: A shorter syntax for writing functions with ES6.
const multiply = (a, b) => a * b;

// Immediately Invoked Function Expression (IIFE): A function executed immediately after its definition.
(function() {
    console.log("This is an IIFE!");
})();

// Generator Function: A function that can pause its execution and be resumed later.
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

// Asynchronous Function: A function defined with `async` that returns a Promise.
async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}
