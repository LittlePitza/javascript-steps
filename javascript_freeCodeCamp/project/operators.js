// Arithmetic Operators
let sum = 5 + 3; // Addition
let diff = 10 - 4; // Subtraction
let product = 6 * 2; // Multiplication
let quotient = 8 / 2; // Division
let remainder = 7 % 2; // Modulus (Remainder)
let exponent = 3 ** 2; // Exponentiation

// Assignment Operators
let x = 10; // Assign value
x += 5; // Add and assign (x = x + 5)
x -= 3; // Subtract and assign (x = x - 3)
x *= 2; // Multiply and assign (x = x * 2)
x /= 4; // Divide and assign (x = x / 4)
x %= 3; // Modulus and assign (x = x % 3)

// Comparison Operators
let isEqual = 5 == '5'; // Equal to (value only)
let isStrictEqual = 5 === 5; // Strict equal (value and type)
let isNotEqual = 5 != '6'; // Not equal to
let isStrictNotEqual = 5 !== '5'; // Strict not equal
let isGreater = 7 > 5; // Greater than
let isLess = 4 < 6; // Less than
let isGreaterOrEqual = 8 >= 8; // Greater than or equal
let isLessOrEqual = 3 <= 5; // Less than or equal

// Logical Operators
let andOperator = true && false; // Logical AND
let orOperator = true || false; // Logical OR
let notOperator = !true; // Logical NOT

// Bitwise Operators
let bitwiseAnd = 5 & 3; // Bitwise AND
let bitwiseOr = 5 | 3; // Bitwise OR
let bitwiseXor = 5 ^ 3; // Bitwise XOR
let bitwiseNot = ~5; // Bitwise NOT
let leftShift = 5 << 1; // Left shift
let rightShift = 5 >> 1; // Right shift
let unsignedRightShift = 5 >>> 1; // Unsigned right shift

// Unary Operators
let negate = -10; // Negation
let positive = +5; // Convert to positive number (unary plus)

// Increment and Decrement Operators
let counter = 0;
counter++; // Post-increment
++counter; // Pre-increment
counter--; // Post-decrement
--counter; // Pre-decrement

// Ternary Operator (Conditional)
let age = 20;
let canVote = age >= 18 ? 'Yes' : 'No'; // Condition ? expressionIfTrue : expressionIfFalse

// typeof and instanceof Operators
let typeOfVariable = typeof 'hello'; // Returns 'string'
let isInstance = [] instanceof Array; // Returns true if object is an instance of Array

// Spread and Rest Operators
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5]; // Spread operator
function sumAll(...args) { return args.reduce((acc, cur) => acc + cur, 0); } // Rest operator

// Optional Chaining Operator
let user = { name: 'John' };
let userCity = user?.address?.city; // Returns undefined if address or city is null/undefined

// Nullish Coalescing Operator
let nullableValue = null;
let defaultValue = nullableValue ?? 'Default'; // Return right-hand operand if left-hand is null/undefined