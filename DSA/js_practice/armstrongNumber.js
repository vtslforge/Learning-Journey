
//--------------------------------------------------------
// performing floor division
// used for remove, reduce, drop last digit


// let num = 3523
// console.log(Math.floor(num / 10))  // output  - 352

// Question - 1 Question:
/* Write a JavaScript program to count how many digits are in the number 5638 using Math.floor() 
inside a while loop. */

let digitToCount = 5638
let dig = digitToCount
let count = 0
while (dig > 0) {  // here keeping the loop running until digit is bigger then 0 Since 5638 > 0 → TRUE
    count++
    dig = Math.floor(dig / 10)
}
console.log(count)