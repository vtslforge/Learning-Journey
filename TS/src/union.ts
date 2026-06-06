function cars(carName: string | number) {
  if (typeof carName == "string") {
    console.log(`the value is ${carName}`);
  }
  if (typeof carName == "number") {
    console.log("enter a string value");
  }
}
cars(233);
