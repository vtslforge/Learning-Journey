console.log("hello before exit code");
console.log("hello");

console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);

console.log("hello before exit code");
console.log("hello");


process.on('beforeExit',(code)=>{
    console.log("hello world before exit"+code)
})

process.abort()

process.on('exit',(code)=>{
    console.log("hello world exit"+code)
})