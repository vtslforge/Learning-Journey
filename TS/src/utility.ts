
// partial -> makes all properties optional

type User = {
    name: string
    rollno: number
}

type updata_user = Partial<User>

function userData(users:updata_user) {
    console.log(users.name)
    console.log(users.rollno ?? "no roll number")
}

userData({
    name: "vatsalya singh",
    // rollno:324234   // here i did't not give the 2nd argument
})

console.log("----------------------------------------------------------------------------------")

//  Required utility

type cData = {
    carName:string
    modelNo:number
}

type car_data = Required<cData>

function car_data(CarData:car_data) {
    console.log(CarData.carName)
    console.log(CarData.modelNo)
}

car_data({carName :"bmw", modelNo : 32452345})  // here arguments are both required else it will give error

console.log("----------------------------------------------------------------------------------")


// readonly utility

type BooksName = {
    bookName: string
    bookPrice: number
}

const bookStore: Readonly<BooksName> = {
    bookName: "Rover",
    bookPrice: 500
}


// bookStore.bookName = "harry pottor"  // throw error cause its readonly


console.log("----------------------------------------------------------------------------------")
