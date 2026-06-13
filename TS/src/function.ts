function cars() {
    return "lambo"
}

function fruit() {
    
}

function sayHello():void {
console.log("Hello");
}

let typeinfer = sayHello()
console.log(typeinfer) 



// more

type User = {
    name: string
    rollno: number
}

function userData(user: User) {
    console.log(user.name)
    console.log(user.rollno)
}

userData({
    name: "Vatsalya",
    rollno: 334245
})