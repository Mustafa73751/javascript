var globalVar = "I'm global!";

function showGlobal() {
  console.log(globalVar); // ✅ Accessible inside function
}

showGlobal();
console.log(globalVar); // ✅ Accessible outside too


function testVarScope() {
    var funcVar = "I'm inside a function!";
    console.log(funcVar); // ✅ Works
}
testVarScope();

// console.log(funcVar); // ❌ Error: not defined
