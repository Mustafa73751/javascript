function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000); // waits 2 seconds
  });
}

async function showData() {
  console.log("Fetching...");
  let result = await getData(); // waits for the promise
  console.log(result);
}

showData();
