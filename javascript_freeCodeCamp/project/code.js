// Function declaration: greetUser takes a parameter 'name' and returns a greeting message.
const greetUser = (name) => {
    return `Hello, ${name}! Welcome to the program.`; // Template literal used to construct the greeting message dynamically.
};

// Variable declaration: Assigning the string "John" to the variable userName.
const userName = "John";

// Logging the result of calling greetUser with userName as an argument to the console.
console.log(greetUser(userName));
