//  array of string
// let userName: string[] = ["vatsalya" , "aman" , "saurabh" , "sanjeev"]

let userName: Array<string> = ["vatsalya" , "aman" , "saurabh" , "sanjeev"]
userName.forEach(element => {
    console.log(element)
});

// array of object
type store = {
    id: number
    storeName: string
    location:string
}

const storeData: Array<store> = [
    {id : 101 , storeName : "ps4 palace" , location : "gorakhpur"},
    {id : 102 , storeName : "dmart shop" , location : "lucknow"}
]

storeData.forEach(sdata => {
    console.log(sdata)
});

// readonly array
let pc: ReadonlyArray<string> = ['rtx-4050', 'rtx-5090', 'rtx-3090']
// pc.push('rtx-2070')  // will faild