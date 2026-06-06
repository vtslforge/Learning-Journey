// normal params
function fruits(fname: string): string {
  return "apple" + fname;
}
console.log(fruits(" banana"));

console.log("--------------------------------------------------------------");

// for rest parameter
function fruits2(...fname: string[]): string {
  return "apple" + fname.join(" ");
}
let store = fruits2(" banana", "kiwi", "watermelon");
console.log(store);

console.log("--------------------------------------------------------------");

// optional parameter
function fruits3(fname?: string) {
  if (fname) {
    console.log(fname + " item added");
  } else {
    console.log("add valid item");
  }
}

fruits3()
