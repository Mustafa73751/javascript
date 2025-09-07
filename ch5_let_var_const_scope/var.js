// Example 1: Simple var
var age = 16;
console.log(age); // 16

// You can reassign
age = 17;
console.log(age); // 17

// You can even redeclare with var (not safe!)
var age = 18;
console.log(age); // 18

// Example 2: var with strings
var name = "Mustafa";
console.log("Hello, " + name); // Hello, Mustafa

// Example 3: Function scope
function testVar() {
  var x = 10;
  console.log("Inside function:", x); // 10
}
testVar();
// console.log(x); // ❌ Error: x is not defined (function scope)

// Example 4: var is hoisted
console.log(num); // undefined (var is hoisted but not initialized)
var num = 5;

// Example 5: var in loops
for (var i = 0; i < 3; i++) {
  console.log("Loop i:", i);
}
console.log("Outside loop i:", i);
// ✅ Still accessible, because var is function-scoped, not block-scoped
