import {setTimeout as sleep} from 'node:timers/promises'

setTimeout(() => {
  console.log("1: runs after 10 seconds");
}, 10000);

// this will execute first cause node does not wait
console.log("2: app running");

setTimeout(() => {
  console.log("3: runs after 2 second");
}, 12000);

function withClearTimeout(): void {
  const timerID = setTimeout(() => {
    console.log("this will never run");
  }, 2000);

  clearTimeout(timerID);
  console.log("4: time out cancelled");
  // this will clear the timeout immidiately
}
withClearTimeout();

// will run again and again afte an interval
setInterval(() => {
  console.log("5: running again and again after 2s");
}, 2000);

// runs immidiatily after settimeout finishes
function setImmidiateExample():void {
    setImmediate(()=>{
        console.log("7: runs immidiatly after the timeout finishes")
    })
    console.log("8: syncohronous code after set immidiate")
}
setImmidiateExample()

// async function promised based timer
async function runPromiseTimerExample(): Promise<void> {
    // this will run immidiate
    console.log("9: waiting for promise based timer")
    await sleep(10000)
    // console will run afte 10s of sleep
    console.log("10: promise based timer finished after 10s ")
}
runPromiseTimerExample().catch((error:unknown)=>{
    console.error("11: timer based demo filled", error)
})


// set interval with clear timeout
function setIntervalExample(): void {
  let count = 0;
  const intervalID = setInterval(() => {
    console.log("6: will increase the count : " + count++);
    if (count === 5) {
      clearTimeout(intervalID);
      // the movement count goes to 5 clear timeout will run and the count will stop running
    }
  }, 2000);
}
setIntervalExample();
