// Example 1: Simple const
const pi = 3.14159;
console.log(pi); // 3.14159

// ❌ Error: You cannot reassign a const
// pi = 3.14;

// Example 2: Const with strings
const name = "Mustafa";
console.log("Hello, " + name); // Hello, Mustafa

// Example 3: Const with arrays
const fruits = ["apple", "banana"];
fruits.push("mango"); // ✅ Allowed: modifying content
console.log(fruits); // ["apple", "banana", "mango"]

// ❌ Error: Cannot reassign the array itself
// fruits = ["orange", "grape"];

// Example 4: Const with objects
const user = { username: "mustafa", age: 16 };
user.age = 17; // ✅ Allowed: changing a property
console.log(user); // { username: "mustafa", age: 17 }

// ❌ Error: Cannot reassign the object itself
// user = { username: "ahmed", age: 18 };

// Example 5: Const in a real use case
const TAX_RATE = 0.2; // constant tax rate
let price = 50;
let total = price + price * TAX_RATE;
console.log("Total price with tax: " + total); // 60
