function digit_print() {
  let num = 23423;
  n = num;
  while (n > 0) {
    let digit = n % 10;
    console.log(digit);
    n = Math.floor(n / 10);
  }
}
// -------------------------------------------------------------------------------------------------------------
function number_formation() {
  let a = 8;
  let b = 12;
  num = a = b;
  console.log(a);
  num = num + a;
  // a = 12 + 12 = 24
  console.log(num);
}
// -------------------------------------------------------------------------------------------------------------
function numplay() {
  let a = 12;
  let b = "12";
  let value = a == b ? "match" : "no match";
  console.log(value)
}
numplay();
// -------------------------------------------------------------------------------------------------------------
