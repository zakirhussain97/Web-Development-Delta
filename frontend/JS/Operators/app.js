//Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + (a * b)); // 50
console.log("Division: " + (a / b)); // 2
console.log("Modulus: " + (a % b)); // 0

//Urity Operators
console.log("Increment: " + (++a)); // 11
console.log("Decrement: " + (--b)); // 4

//Assignment Operators
let c = 10;
console.log("Addition Assignment: " + (c += 5)); // 15
console.log("Subtraction Assignment: " + (c -= 3)); // 12
console.log("Multiplication Assignment: " + (c *= 2)); // 24
console.log("Division Assignment: " + (c /= 4)); // 6
console.log("Modulus Assignment: " + (c %= 3)); // 0

//Comparison Operators
let x = 10;
let y = '10';

console.log("Equal to: " + (x == y)); // true
console.log("Not equal to: " + (x != y)); // false
console.log("Strict equal to: " + (x === y)); // false
console.log("Strict not equal to: " + (x !== y)); // true
console.log("Greater than: " + (x > 5)); // true
console.log("Less than: " + (x < 15)); // true
console.log("Greater than or equal to: " + (x >= 10)); // true
console.log("Less than or equal to: " + (x <= 10)); // true

//Logical Operators
let p = true;
let q = false;

console.log("Logical AND: " + (p && q)); // false
console.log("Logical OR: " + (p || q)); // true
console.log("Logical NOT: " + (!p)); // false