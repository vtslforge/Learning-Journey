"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// normal params
function fruits(fname) {
    return "apple" + fname;
}
console.log(fruits(" banana"));
console.log("--------------------------------------------------------------");
// for rest parameter
function fruits2(...fname) {
    return "apple" + fname.join(" ");
}
let store = fruits2(" banana", "kiwi", "watermelon");
console.log(store);
console.log("--------------------------------------------------------------");
// optional parameter
function fruits3(fname) {
    if (fname) {
        console.log(fname + " item added");
    }
    else {
        console.log("add valid item");
    }
}
fruits3();
//# sourceMappingURL=fncprm.js.map