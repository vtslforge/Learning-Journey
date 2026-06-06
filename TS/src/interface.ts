
type user = {
    name : string
    id : number
}

// type user = {    // cant reopen
//     home : string
// }
console.log("------------------------------------------------------------")

// interface 
interface uname  {
    home : string
    city : string
}

interface uname  {    // can be reopened
    id: number
}

const userData : uname   = {
    home: "rajankunte",
    city:"gorakhpur",
    id:23452
}

while (true) {
    console.log(userData.home)
    console.log(userData.city)
    console.log(userData.id)
    break;
}
console.log("------------------------------------------------------------")
// using inside function

function userNameData(userDatas : uname) {
    console.log(userDatas.city)
    console.log(userDatas.id)
    console.log(userDatas.home)
}
userNameData({
    city: "Bangalore",
    id: 1,
    home: "Whitefield"
});