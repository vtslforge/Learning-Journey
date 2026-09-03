// creating simple buffer

const textBuffer = Buffer.from("This is a text");
// this normal text will become byts internally
console.log(textBuffer);
// output -> <Buffer 54 68 69 73 20 69 73 20 61 20 74 65 78 74> -> Byte Hexa Decimal format
/* 
    T - 54
    h - 68
    i - 69
    Each value is 1 byte
*/

console.log(textBuffer.toString("utf-8"));
// to convert buffer into string

console.log(textBuffer.length);
// To find the lenght of buffer 14 character 14 character

// create an empty fixed buffer alloc method
const fixedBuffer = Buffer.alloc(5);
console.log(fixedBuffer);

// to write in fixed buffer write method
fixedBuffer.write("vtslx");
console.log("writing in fixed buffer : " + fixedBuffer);
console.log(fixedBuffer.toString("utf-8"));

// to combine data or chunks in one concat method
const chunks = [
  Buffer.from("Getting"),
  Buffer.from("data"),
  Buffer.from("in"),
  Buffer.from("chunks"),
];

const combineBuffer  = Buffer.concat(chunks)
console.log(combineBuffer.toString("utf-8"))
// output -> Gettingdatainchunks