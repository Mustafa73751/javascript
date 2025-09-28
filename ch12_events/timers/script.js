function runLater() {
  console.log("Mustafa");
}

runLater()
// setTimeout(runLater, 30000)
let timer =setInterval(runLater, 1000) 
setTimeout(
   function(){
    clearInterval(timer)
   }, 10000
)

