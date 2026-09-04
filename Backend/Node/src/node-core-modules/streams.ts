// A Stream is a way of handling data piece by piece instead of loading everything into memory at once.

import { Readable, Transform, Writable } from "node:stream";
import fs from "node:fs";
import { pipeline } from "node:stream/promises";


const readableStream2 = fs.createReadStream("FIleSystem/callback_file.txt", {
  encoding: "utf-8",
});

readableStream2.on("data", (chunk) => {
  console.log(chunk);
});

// write the data in file in chunks
const writableStream2 = fs.createWriteStream("FIleSystem/callback_file.txt", {
  encoding: "utf-8",
});
writableStream2.write("\nThis is written by writable Stream");



// STREAM WITH NO FS

// create Readable stream
const readableStream = Readable.from(["Hello", "from", "readable", "steam"]);

// perform action to convert text to uppercase
const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const text = chunk.toString();
    callback(null, text.toUpperCase());
  },
});

// write the data
const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log("recieved chunk", chunk.toString());
    callback();
  },
});

// here a full pipeline of Readable → Transform → Writable
// here pipeline combining all the streams

async function main(): Promise<void> {
  try {
    await pipeline(readableStream, uppercaseTransform, writableStream);
    console.log("stream completed");
  } catch (error) {
    const msg = error instanceof Error ? error.message : "unknown error";
    console.error("stream failed", msg);
  }
}
main()
