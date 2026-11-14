const NumberData = [12, 5, 3, 7, 9, 2, 1, 0];

const data = [
  { id: 11, name: "Aman", age: 21, class: "12th" },
  { id: 12, name: "Riya", age: 18, class: "12th" },
  { id: 13, name: "Kabir", age: 17, class: "11th" },
  { id: 14, name: "Ananya", age: 16, class: "10th" },
  { id: 15, name: "Rohan", age: 18, class: "12th" },
  { id: 16, name: "Sneha", age: 17, class: "11th" },
  { id: 17, name: "Vikram", age: 15, class: "9th" },
  { id: 18, name: "Meera", age: 16, class: "10th" },
  { id: 19, name: "Arjun", age: 17, class: "11th" },
  { id: 20, name: "Pooja", age: 18, class: "12th" },
];

// console.log(NumberData.sort((a, b) => a - b));

// const filteredData = data.filter((n) => n.id < 18);
// console.log(filteredData);

// const findById = data.find((n) => n.name == "Riya");
// console.log(findById);

type Student = {
  id: number;
  name: string;
  age: number;
  class: string;
};

function findit(arr: Student[], num: number) {
  const result = arr.map((n) => n.name);
  if (!result) {
    return "No data found";
  }

  return result;
}

console.log(findit(data, 15));
