class Cars {
  car_names: string;
  plate_number: number;

  constructor(name: string, plate_number: number) {
    this.car_names = name;
    this.plate_number = plate_number;
  }
}

const newCar = new Cars("bmw", 234583);
const newCa2 = new Cars("bmw", 234583);
const newCar3 = new Cars("bmw", 234583);

// console.log(newCa2 , newCar3 , newCar)

//  With Access modifiers

// Public
class Movies {
  name: string;
  genere: string;

  constructor(genere: string, name: string) {
    this.genere = genere;
    this.name = name;
  }
}

const newMovie = new Movies("Avengers", "tokto drift");

console.log(newMovie);

// Private
class Login {
  private password = "sanjeev_baba";
  showPassword() {
    console.log(this.password);
  }
}

const account = new Login();
account.showPassword();

// console.log(account.password)  // error can't access outside class

// protected

class autoPart {
  protected name: string;
  protected id: number;

  constructor(name: string, id: number) {
    this.id = id;
    this.name = name;
  }
}

class moreParts extends autoPart {
  show() {
    console.log(this.name);
    console.log(this.id);
  }
}
const engine = new moreParts("v12", 6428);
engine.show();


  