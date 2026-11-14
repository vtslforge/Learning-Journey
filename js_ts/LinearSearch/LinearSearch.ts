console.log("An Example of linear search algorithm");

const arr: number[] = [22, 43, 65, 23, 87, 43];
const target: number = 6;

function linearSearch(arr: Array<number>, target: number): number {
  if (arr.length === 0) {
    return -1;
  }

  for (let num of arr) {
    if (num === target) {
      return 1;
    }
  }

  return -1;
}

console.log(linearSearch(arr, target));