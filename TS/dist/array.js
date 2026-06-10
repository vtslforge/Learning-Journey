"use strict";
//  array of string
// let userName: string[] = ["vatsalya" , "aman" , "saurabh" , "sanjeev"]
Object.defineProperty(exports, "__esModule", { value: true });
let userName = ["vatsalya", "aman", "saurabh", "sanjeev"];
userName.forEach(element => {
    console.log(element);
});
const storeData = [
    { id: 101, storeName: "ps4 palace", location: "gorakhpur" },
    { id: 102, storeName: "dmart shop", location: "lucknow" }
];
storeData.forEach(sdata => {
    console.log(sdata);
});
// readonly array
let pc = ['rtx-4050', 'rtx-5090', 'rtx-3090'];
// pc.push('rtx-2070')  // will faild
//# sourceMappingURL=array.js.map