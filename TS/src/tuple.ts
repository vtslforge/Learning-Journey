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