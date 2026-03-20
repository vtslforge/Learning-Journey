let prompt = require("prompt-sync")();
// code from here

function pattern_1() {
    let n  = prompt("enter the number of times\t")
    for (let i = 1; i<=n;i++){
        for (let j = 1;j<=n;j++){
            process.stdout.write("*");
        }
        console.log()
    }
}
pattern_1()