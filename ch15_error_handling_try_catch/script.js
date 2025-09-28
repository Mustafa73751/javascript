let noInternetError = Error("There is no internet please enable it")
try{
console.log("Learning JavaScript is fun!");
console.log("Mustafa is practicing ES6 features.");
console.log("Arrow functions make code cleaner.");
console.log("React was built using JavaScript.");
console.log("Stay consistent, and coding gets easier.");
let firstName
// throw noInternetError
console.log("Console logs are great for debugging.");
console.log("Random string number seven right here!");
console.log("The quick brown fox jumps over the lazy dog.");
console.log("Always test your code in small steps.");
console.log("You’re getting better every single day!");
} catch(error) {
    console.log(error.message)
} finally{
    console.log("i am the last message");
}