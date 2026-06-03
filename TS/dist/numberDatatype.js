"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num1 = 20;
var num2 = "20";
// String to number conversion
var converted_number = +num2; // option 1
var converted_number = Number(num2); // option 2
console.log(num1 + converted_number); // output = 40
// conversion using template literal
var value1 = 30;
var value2 = "vatsalya singh";
// var value3:string = value1  // error cant assign
var value3 = `the value ${value1} is converted to string ${value2} already is string`;
console.log(value3);
console.log("-----------------------------------");
var num_con = 30;
console.log(typeof num_con);
var con_num = num_con.toString();
console.log(typeof con_num);
//# sourceMappingURL=numberDatatype.js.map