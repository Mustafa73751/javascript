// A warehouse worker makes a promise to check if an item is in stock
let warehousePromise = new Promise(function (resolve, reject) {
  console.log("Worker: Let me check the warehouse... (pending)");

  // Simulate checking the warehouse (takes 2 seconds)
  setTimeout(() => {
    let itemFound = Math.random() > 0.5; // 50% chance of finding the item

    if (itemFound) {
      resolve("Worker: I found the item! ✅ Promise fulfilled.");
    } else {
      reject("Worker: Sorry, the item is out of stock ❌ Promise rejected.");
    }
  }, 2000);
});

// Someone at the desk waits for the worker’s promise
warehousePromise
  .then(function (message) {
    console.log("Desk: Great! " + message);
  })
  .catch(function (error) {
    console.log("Desk: Oh no! " + error);
  });
