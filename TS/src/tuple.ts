let appName:[string , number , boolean] = ["chatgpt" , 5.5 , true]

appName.forEach(element => {
    console.log(element)
});

//  tuple of obj

type appdataInfo = {
    appName:string
    appVersion:number
    released:boolean
}

let appData:[appdataInfo] = [
    {appName : "vtslforge", appVersion: 1.03, released: true}
]

appData.forEach(element => {
    console.log(element)
});
console.log("-------------------------------------------------")
// another example - 
type tpltype = {
    name: string
    id:number
    value:boolean
}
let tplexample:[tpltype] = [
    {name:"vatsalya" , id : 23 , value:false}
]

tplexample.forEach(num => {
    console.log(num)
});