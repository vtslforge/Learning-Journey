"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type user = {    // cant reopen
//     home : string
// }
console.log("------------------------------------------------------------");
const userData = {
    home: "rajankunte",
    city: "gorakhpur",
    id: 23452
};
while (true) {
    console.log(userData.home);
    console.log(userData.city);
    console.log(userData.id);
    break;
}
console.log("------------------------------------------------------------");
// using inside function
function userNameData(userDatas) {
    console.log(userDatas.city);
    console.log(userDatas.id);
    console.log(userDatas.home);
}
userNameData({
    city: "Bangalore",
    id: 1,
    home: "Whitefield"
});
//# sourceMappingURL=interface.js.map