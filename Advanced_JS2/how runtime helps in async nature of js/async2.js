function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 1000000000; i++) {
    // some task
  }
  console.log("loop ends");
}

function timeConsumingByRuntimeFuciton() {
  console.log("Starting timer");
  setTimeout(function exec() {
    console.log("Completed the timer");
  }, 5000);
}

console.log("hi");

timeConsumingByLoop();
timeConsumingByRuntimeFuciton();
timeConsumingByLoop();

console.log("Hi");
